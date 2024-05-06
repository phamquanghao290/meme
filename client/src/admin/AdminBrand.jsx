import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Modal } from 'antd';
import '../admin/admin.css'
import publicAxios from '../config/PublicAxios';
import { editBrandAPI, addBrandAPI, deleteBrandAPI } from '../apis/brand.services';
import axios from 'axios';
import { success, failed } from '../components/Modal/NotificationModal';
import { API_BRAND } from '../apis/patchAPI';

export default function AdminBrand() {
    const [newBrand, setNewBrand] = React.useState({
        name_brand: "",
        image_brand: "",
    });
    const [brands, setBrands] = React.useState([]);
    const [preview, setPreview] = React.useState(null || "");
    const [selectedMedia, setSelectedMedia] = React.useState(null);
    const [flag, setFlag] = React.useState(false);
    const handleGetBrands = async () => {
        const response = await publicAxios.get(API_BRAND);
        setBrands(response.data);
    }

    //add
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {setIsModalOpen(true)};
    const handleCancel = () => {setIsModalOpen(false)};

    //edit
    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
    const [edit, setEdit] = useState(false);
    const showModalEdit = (item) => {
        setIsModalOpenEdit(true);
        setNewBrand(item);
        setPreview(item.image_brand);
    };
    const handleOkEdit = async () => {
        setIsModalOpenEdit(false);
        try {
            if(!selectedMedia){
                const response = await editBrandAPI(newBrand.id, newBrand);
                setFlag(true);
                setNewBrand({
                    name_brand: "",
                    image_brand: "",
                })
                setPreview(null || "");
                return
            }
            const formData = new FormData();
            formData.append("file", selectedMedia);
            formData.append("upload_preset", "project");
            const [uploadMedia] = await Promise.all([
                axios.post("https://api.cloudinary.com/v1_1/dixzrnjbq/image/upload", formData),
            ])
            const media = uploadMedia.data.secure_url;
            const response = await editBrandAPI(newBrand.id, {
                ...newBrand,
                image_brand: media
            })
            setFlag(true);
            success(response.data.message);
            setNewBrand({
                name_brand: "",
                image_brand: "",
            })
            setPreview(null || "");
        }catch (error) {
            failed("Sửa thất bại");
        }
    };
    const handleCancelEdit = () => {setIsModalOpenEdit(false)};

    //delete
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const showModalDelete = () => {setIsModalOpenDelete(!isModalOpenDelete)};  
    const handleOkDelete = async (id) => {
        const response = await deleteBrandAPI(id);
        setFlag(!flag);
        success(response.data.message);
        setIsModalOpenDelete(false);
    };
    const handleCancelDelete = () => {setIsModalOpenDelete(false)};

    const changeImage = (event) => {
        setSelectedMedia(event.target.files[0]);
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            setPreview(event.target.result);
        };
        reader.readAsDataURL(file);
    };

    const handleGetValue = (e) => {
        setNewBrand({ ...newBrand, [e.target.name]: e.target.value });
    }

    const handleAddBrand = async () => {
        if(!selectedMedia){
            failed("Please select an image");
            return
        }
        if(!newBrand.name_brand){
            failed("Please enter the brand name");
            return
        }
        // điều kiện nếu không điền đủ thông tin

        try {
            const formData = new FormData();
            formData.append("file", selectedMedia);
            formData.append("upload_preset", "project");
            const [uploadMedia] = await Promise.all([
                axios.post("https://api.cloudinary.com/v1_1/dixzrnjbq/image/upload", formData),
            ]);
            const response = await addBrandAPI({
                ...newBrand,
                image_brand: uploadMedia.data.secure_url
            })
            setFlag(!flag);
            success(response.data.message);
            setPreview("");
            setNewBrand({   
                name_brand: "",
                image_brand: "",
            })
            setIsModalOpen(false);
        } catch (error) {
            failed("Please fill in the information");
        }
    }

    React.useEffect(() => {
        handleGetBrands();
        document.title = "Admin Brand";
    }, [flag]);

    return (
        <>
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                {/* Main content */}
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                    {/* Header */}
                    <header className="bg-surface-primary border-bottom pt-6">
                        <div className="container-fluid">
                            <div className="mb-npx">
                                <div className="row align-items-center">
                                    <div className="col-sm-6 col-12 mb-4 mb-sm-0 flex gap-16">
                                        {/* Title */}
                                        <h1 className="h2 mb-0 ls-tight">
                                            Brand
                                        </h1>
                                        <Button
                                            variant="contained"
                                            className="w-full max-w-[200px] h-[40px] p-[12px] rounded-lg ml-16 border-2 border-[#F5BB40]"
                                            onClick={showModal}
                                        >
                                            Create New Brand
                                        </Button>

                                        {/* <Button type="primary" onClick={showModal}>
                                            Open Modal
                                        </Button> */}
                                        <Modal
                                            title="Create New Brand"
                                            open={isModalOpen}
                                            onOk={handleAddBrand}
                                            onCancel={handleCancel}
                                        >
                                            <p className="text-[#575757] text-[14px] font-[700]">
                                                Brand Image
                                            </p><br />
                                            <label htmlFor="formFileSm" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>Upload</label>
                                            <input
                                                id="formFileSm"
                                                type="file"
                                                name="image"
                                                className="hidden"
                                                onChange={changeImage}
                                                value={newBrand.image_brand}
                                                hidden
                                            />
                                            <br /><br />
                                            <img
                                                className='max-w-[250px] max-h-[150px] object-cover'
                                                id="image"
                                                src={preview}
                                                alt="preview"
                                            />
                                            <p className="mt-4 text-[#575757] text-[14px] font-[700]">
                                                Brand Name
                                            </p>
                                            <input
                                                className="mt-2 rounded px-2 py-4 bg-[#eeeded] outline-none w-full"
                                                type="text"
                                                placeholder="Brand Name"
                                                value={newBrand.name_brand}
                                                name="name_brand"
                                                onChange={handleGetValue}
                                            />
                                        </Modal>
                                    </div>
                                    {/* Actions */}
                                    <div className="col-sm-6 col-12 text-sm-end"></div>
                                </div>
                                {/* Nav */}
                                <ul className="nav nav-tabs mt-4 overflow-x border-0">
                                    <li className="nav-item ">
                                        <a href="#" className="nav-link active">
                                            Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    {/* Main */}
                    <main className="py-6 bg-surface-secondary">
                        <div className="container-fluid">
                            {/* Card stats */}
                            <div className="row g-6 mb-6">
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                                        Budget
                                                    </span>
                                                    <span className="h3 font-bold mb-0">
                                                        $750.90
                                                    </span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i className="bi bi-credit-card" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                                    <i className="bi bi-arrow-up me-1" />
                                                    13%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">
                                                    Since last month
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                                        New projects
                                                    </span>
                                                    <span className="h3 font-bold mb-0">
                                                        215
                                                    </span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                        <i className="bi bi-people" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                                    <i className="bi bi-arrow-up me-1" />
                                                    30%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">
                                                    Since last month
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                                        Total hours
                                                    </span>
                                                    <span className="h3 font-bold mb-0">
                                                        1.400
                                                    </span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                        <i className="bi bi-clock-history" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-danger text-danger me-2">
                                                    <i className="bi bi-arrow-down me-1" />
                                                    -5%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">
                                                    Since last month
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                                        Work load
                                                    </span>
                                                    <span className="h3 font-bold mb-0">
                                                        95%
                                                    </span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                        <i className="bi bi-minecart-loaded" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                                    <i className="bi bi-arrow-up me-1" />
                                                    10%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">
                                                    Since last month
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow border-0 mb-7">
                                <div className="card-header flex items-center gap-[60%] relative">
                                    <h5 className="mb-0">List Brand</h5>
                                    {/* <input type="text" placeholder='Search for brand' className='outline-0 border-1 shadow-sm p-2 max-w-[300px] ' />
                                    <p className='absolute ml-[80%]'><i className="fa-solid fa-magnifying-glass text-[#575757] text-md"></i></p> */}
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Id </th>
                                                <th scope="col">Brand</th>
                                                <th scope="col">Create Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-xl">
                                            {brands?.map((brand, index) => (
                                                <tr key={index}>
                                                    <td scope="col">
                                                        {index + 1}
                                                    </td>
                                                    <td
                                                        scope="col"
                                                        className="flex justify-center items-center max-w-[200px] w-full m-auto max-h-[100px]"
                                                    >
                                                        <img
                                                            src={
                                                                brand.image_brand
                                                            }
                                                            alt=""
                                                        />
                                                    </td>
                                                    <td scope="col">
                                                        {brand.name_brand}
                                                    </td>
                                                    <td className="">
                                                        <Button
                                                            onClick={() =>
                                                                showModalEdit(
                                                                    item
                                                                )
                                                            }
                                                            variant="danger"
                                                        >
                                                            <i className="fa-regular fa-pen-to-square text-md"></i>
                                                            <Modal
                                                                title="Edit Brand"
                                                                open={
                                                                    isModalOpenEdit
                                                                }
                                                                onOk={
                                                                    handleOkEdit
                                                                }
                                                                onCancel={
                                                                    handleCancelEdit
                                                                }
                                                            >
                                                                <p className="text-[#575757] text-[14px] font-[700]">
                                                                    Brand Name
                                                                </p>
                                                                <input
                                                                    className="mt-2 rounded px-2 py-4 bg-[#eeeded] outline-none w-full"
                                                                    type="text"
                                                                    placeholder="Brand Name"
                                                                    name="name_brand"
                                                                    value={
                                                                        newBrand.name_brand
                                                                    }
                                                                    onChange={
                                                                        handleGetValue
                                                                    }
                                                                />
                                                                <label
                                                                    htmlFor="image"
                                                                    className="max-w-[200px] w-full m-auto max-h-[100px] border-2 border-dashed border-blue-600 rounded-lg flex justify-center items-center "
                                                                >
                                                                    <img
                                                                        src={
                                                                            preview
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </label>
                                                            </Modal>
                                                        </Button>

                                                        <Button
                                                            variant="danger"
                                                            onClick={
                                                                showModalDelete
                                                            }
                                                        >
                                                            <i className="fa-regular fa-trash-can  text-md"></i>
                                                            <Modal
                                                                title="Delete"
                                                                open={
                                                                    isModalOpenDelete
                                                                }
                                                                onOk={() =>
                                                                    handleOkDelete(
                                                                        brand.id
                                                                    )
                                                                }
                                                                onCancel={
                                                                    handleCancelDelete
                                                                }
                                                            >
                                                                <div className="flex justify-center">
                                                                    <div className="bg-[#D64D22] w-[80px] h-[80px] rounded-full flex justify-center items-center shadow-lg">
                                                                        <i className="fa-regular fa-trash-can text-white text-[40px] shadow-lg"></i>
                                                                    </div>
                                                                </div>
                                                                <p className="text-[#575757] text-[18px] font-[700] text-center mt-3">
                                                                    Are you sure
                                                                    you want to
                                                                    delete this
                                                                    brand?
                                                                </p>
                                                                <p className="text-[#575757] text-[14px] font-[400] text-center ">
                                                                    This action
                                                                    cannot be
                                                                    undo.
                                                                </p>
                                                                <img
                                                                    src={
                                                                        preview
                                                                    }
                                                                    alt=""
                                                                />
                                                            </Modal>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
