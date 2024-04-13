import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Modal } from 'antd';
import '../admin/admin.css'
import axios from 'axios';
export default function AdminBrand() {
    const [dataUser, setDataUser] = React.useState([]);
    const handleGetUsers = async () => {
        const response = await axios.get("/api/user");
        setDataUser(response.data);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
    const showModalEdit = () => {
        setIsModalOpenEdit(!isModalOpenEdit);
    };
    const handleOkEdit = () => {
        setIsModalOpenEdit(false);
    };
    const handleCancelEdit = () => {
        setIsModalOpenEdit(false)
    };

    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const showModalDelete = () => {
        setIsModalOpenDelete(!isModalOpenDelete);
    };
    const handleOkDelete = () => {
        setIsModalOpenDelete(false);
    };
    const handleCancelDelete = () => {
        setIsModalOpenDelete(false)
    };

    React.useEffect(() => {
        handleGetUsers();
        document.title = "Admin - User";
    }, []);

    const handleChangeStatus = async (user) => {
        if (user.status === 1) {
            user.status = 0;
        } else {
            user.status = 1;
        }
        await publicAxios.patch(`/api/user/status/${user.userId}`, user);
        success("Thay đổi trạng thái thành công");
        handleGetUsers();
    };
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
                                        <Modal title="Create New Brand" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                            <p className='text-[#575757] text-[14px] font-[700]'>Brand Image</p>
                                            <input
                                                type="file"
                                                name="image"
                                                id="image"
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="image"
                                                className=" mt-2 w-[100px] h-[100px] border-2 border-dashed border-blue-600 rounded-lg flex justify-center items-center "
                                            >
                                                Upload
                                            </label>

                                            <p className='mt-4 text-[#575757] text-[14px] font-[700]'>Brand Name</p>
                                            <input className='mt-2 rounded px-2 py-4 bg-[#eeeded] outline-none w-full' type="text" placeholder='Brand Name' />

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
                                                <th scope="col">
                                                    Create Date
                                                </th>
                                                <th></th>
                                                {/* <th scope="col">Status</th>
                                              <th scope="col">Acction</th> */}
                                            </tr>
                                        </thead>
                                        <tbody className='text-xl'>

                                            <tr  >
                                                <td scope="col">
                                                    1231
                                                </td>
                                                <td scope="col" className='flex justify-center items-center'>
                                                    <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png" className='w-[100px] h-[100px]' alt="" />
                                                    <p>awdadwad</p>
                                                </td>
                                                {/* <td scope="col">
                                                          {user.phone}
                                                      </td>
                                                      <td scope="col">
                                                          {user.status == 1
                                                              ? "Lock"
                                                              : "Normal"}
                                                      </td> */}
                                                <td scope='col'>
                                                    22/12/1242
                                                </td>
                                                <td scope="col">
                                                    <Button onClick={showModalEdit} variant="danger" >
                                                        <i className="fa-regular fa-pen-to-square text-md" ></i>
                                                        <Modal title="Edit Brand" open={isModalOpenEdit} onOk={handleOkEdit} onCancel={handleCancelEdit}>
                                                            <p className='text-[#575757] text-[14px] font-[700]'>Brand Name</p>
                                                            <input className='mt-2 rounded px-2 py-4 bg-[#eeeded] outline-none w-full' type="text" placeholder='Brand Name' />
                                                        </Modal>
                                                    </Button>

                                                    <Button variant="danger" onClick={showModalDelete}>
                                                        <i className="fa-regular fa-trash-can  text-md"></i>
                                                        <Modal title="Delete" open={isModalOpenDelete} onOk={handleOkDelete} onCancel={handleCancelDelete}>
                                                            <div className='flex justify-center'>
                                                                <div className='bg-[#D64D22] w-[80px] h-[80px] rounded-full flex justify-center items-center shadow-lg'>
                                                                    <i className="fa-regular fa-trash-can text-white text-[40px] shadow-lg"></i>
                                                                </div>
                                                            </div>
                                                            <p className='text-[#575757] text-[18px] font-[700] text-center mt-3'>Are you sure you want to delete this brand?</p>
                                                            <p className='text-[#575757] text-[14px] font-[400] text-center '>This action cannot be undo.</p>


                                                        </Modal>
                                                    </Button>

                                                    {/*  <Switch
                                                              checkedChildren={
                                                                  <CheckOutlined />
                                                              }
                                                              unCheckedChildren={
                                                                  <CloseOutlined />
                                                              }
                                                              defaultChecked
                                                              onChange={() =>
                                                                  handleChangeStatus(
                                                                      user
                                                                  )
                                                              }
                                                          /> */}
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
