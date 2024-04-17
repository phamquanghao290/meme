import React, { useEffect } from "react";
import { Button } from "@mui/material";
import publicAxios from "../config/PublicAxios";
import { success, failed } from "../components/Modal/NotificationModal";
import axios from "axios";
import { Modal } from "antd";
import { Pagination } from "antd";
import { Select, Tag } from "antd";

import "./admin.css";
import { TbCameraPlus } from "react-icons/tb";
import { useState } from "react";

function AdminProduct() {
    const USDollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    const [preview, setPreview] = React.useState("");
    const [selectedMedia, setSelectedMedia] = React.useState(null);
    const [categories, setCategories] = React.useState([]);
    const [brands, setBrands] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [oneProduct, setOneProduct] = React.useState([]);
    const [edit, setEdit] = React.useState(false);
    const [colors, setColors] = React.useState([]);
    const [flag, setFlag] = React.useState(false);
    const handleGetColor = async () => {
        const response = await publicAxios.get("/api/color");
        console.log(response.data);
        setColors(response.data);
    }
    const [options, setOptions] = useState([]);

    const [newProduct, setNewProduct] = React.useState({
        nameProduct: "",
        price: 0,
        image: "",
        category_id: 0,
        brand_id: 0,
        stock: 0,
        rate: 5,
    });

    const handleGetCategories = async () => {
        const response = await publicAxios.get("/api/category");
        setCategories(response.data);
    };

    const handleGetAllBrand = async () => {
        const response = await publicAxios.get("/api/brand");
        setBrands(response.data);
    };

    const handleGetOneProduct = async (id) => {
        const response = await publicAxios.get(
            `/api/product/${products[id - 1].id}`
        );
        console.log(response.data);
        setOneProduct(response.data);
    };

    const handleGetProducts = async () => {
        const response = await publicAxios.get("/api/product");
        setProducts(response.data);
    };

    console.log(colors);

    const handleGetValue = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const changeImage = (event) => {
        setSelectedMedia(event.target.files[0]);
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            setPreview(event.target.result);
        };
        reader.readAsDataURL(file);
    };
    const handleSave = async () => {
        try {
            const formData = new FormData();
            formData.append("file", selectedMedia);
            formData.append("upload_preset", "project");
            const [uploadMedia] = await Promise.all([
                axios.post(
                    "https://api.cloudinary.com/v1_1/dixzrnjbq/image/upload",
                    formData
                ),
            ]);
            const media = uploadMedia.data.secure_url;
            const response = await publicAxios.post("/api/product", {
                ...newProduct,
                image: media,
                category_id: categories[0].id,
            });
            console.log(response.data.data);
            setProducts(response.data.data);
            setOneProduct(response.data.data);
            success(response.data.message);
            setEdit(false);
            setPreview("");
            setNewProduct({
                nameProduct: "",
                price: 0,
                image: "",
                category_id: 0,
                brand_id: 0,
                stock: 0,
                rate: 5,
            });
        } catch (error) {
            failed("Vui lòng điền đầy đủ thông tin");
        }
    };

    const handleEdit = async () => {
        try {
            if (!selectedMedia) {
                const response = await publicAxios.put(
                    `/api/product/${oneProduct.id}`,
                    { ...oneProduct, image: preview }
                );
                setProducts(response.data.data);
                return;
            }
            const formData = new FormData();
            formData.append("file", selectedMedia);
            formData.append("upload_preset", "project");
            const [uploadMedia] = await Promise.all([
                axios.post(
                    "https://api.cloudinary.com/v1_1/dixzrnjbq/image/upload",
                    formData
                ),
            ]);
            const media = uploadMedia.data.secure_url;
            const response = await publicAxios.put(
                `/api/product/${oneProduct.id}`,
                {
                    ...oneProduct,
                    image: media,
                }
            );
            setProducts(response.data.data);
            success(response.data.message);
            setNewProduct({
                nameProduct: "",
                price: 0,
                image: "",
                brand_id: 0,
                category_id: 0,
                stock: 0,
                rate: 5,
            });
        } catch (error) {
            failed("Sửa thất bại");
        }
    };

    const handleEditProduct = async (item) => {
        setNewProduct({
            ...newProduct,
            productName: item.productName,
            price: item.price,
            category_id: item.category_id,
            brand_id: item.brand_id,
            stock: item.stock,
            rate: item.rate,
        });
        setPreview(item.image);
        setEdit(true);
    };

    const handleDeleteProduct = async (id) => {
        try {
            if (window.confirm("Bạn có chắc muốn xóa sản phẩm này ?")) {
                const response = await publicAxios.delete(`/api/product/${id}`);
                setProducts(response.data.data);
                success(response.data.message);
            }
        } catch (error) {
            failed("Xóa sản phẩm thất bại");
        }
    };

    // const handleSearch = async () => {
    //     try{
    //         const response = await publicAxios.get(`/api/products/search?key=${search}`);
    //         setProducts(response.data);
    //     }catch(error: any){
    //         failed(error.response.data.message);
    //     }
    // }
    const [searchProduct, setSearchProduct] = React.useState("");
    const handleSearch = (e) => {
        setSearchProduct(e.target.value.toLowerCase());
    };

    const filterProduct = () => {
        if (searchProduct === "") {
            return products;
        } else {
            const result = products.filter((item) => {
                return item.nameProduct.toLowerCase().includes(searchProduct);
            });
            return result;
        }
    };
    const render = filterProduct();
    console.log(render);
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 4;
    const endIndex = currentPage * itemsPerPage;
    const startIndex = endIndex - itemsPerPage;
    const displayedProducts = render.slice(startIndex, endIndex);
    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    React.useEffect(() => {
        handleGetCategories();
        handleGetAllBrand();
        handleGetProducts();
        handleGetOneProduct(1);
        handleGetColor();
        document.title = "Admin - Product";
        let value = colors.map((item) => {
            return item.nameColor;
        });
        setOptions(value);
        // console.log(options)
    }, [flag]);

    console.log(options)

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const showModal = () => {
        setIsModalOpen(!isModalOpen);
        setFlag(!flag);
    };
    const handleAddInfor = async () => {
        const response = await publicAxios.post(`/api/product/${id}`);
        setFlag(!flag);
        success(response.data.message);
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

   
    const tagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{
                    marginInlineEnd: 4,
                }}
            >
                {label}
            </Tag>
        );
    };
   const options2 = options.map((item) => {
       return { value: item };
   });
    return (
        <>
            {/* Dashboard */}
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                    {/* Header */}
                    <header className="bg-surface-primary border-bottom pt-6">
                        <div className="container-fluid">
                            <div className="mb-npx">
                                <div className="row align-items-center">
                                    <div className="col-sm-6 col-12 mb-4 mb-sm-0 d-flex">
                                        {/* Title */}
                                        <h1 className="h2 mb-0 ls-tight">
                                            Product
                                        </h1>
                                        <input
                                            onChange={handleSearch}
                                            placeholder="Search the product"
                                            type="text"
                                            className="w-full max-w-[250px] h-[40px] p-[12px] rounded-lg ml-16 border-2 border-blue-600"
                                        ></input>
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
                    <main className="pt-3 bg-surface-secondary">
                        <div className="container-fluid">
                            {/* Card stats */}
                            <div className="row g-6">
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
                            <div className="mt-5 mx-3">
                                <div className="row grid gap-3 ">
                                    <div className="g-col-3 card shadow border-0 ">
                                        <div className="card-header">
                                            <h5 className="mb-0 title">
                                                Add Product
                                            </h5>
                                        </div>
                                        <div className="px-1 ">
                                            <div className="mb-3 ">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label"
                                                >
                                                    Name Product
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name-product"
                                                    aria-describedby="emailHelp"
                                                    name="nameProduct"
                                                    value={
                                                        newProduct.nameProduct
                                                    }
                                                    onChange={handleGetValue}
                                                />
                                            </div>
                                            <div className="mb-3 ">
                                                <label
                                                    htmlFor="exampleInputPassword1"
                                                    className="form-label"
                                                >
                                                    Price Product
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="price"
                                                    name="price"
                                                    value={newProduct.price}
                                                    onChange={handleGetValue}
                                                />
                                            </div>
                                            <div className="mb-3 ">
                                                <label className="form-label">
                                                    Category
                                                </label>
                                                <select
                                                    className="form-select form-select-lg "
                                                    aria-label="Large select example"
                                                    id="category_id"
                                                    name="category_id"
                                                    value={
                                                        newProduct.category_id
                                                    }
                                                    onChange={handleGetValue}
                                                >
                                                    <option>
                                                        -- Loại sản phẩm --
                                                    </option>
                                                    {categories.map(
                                                        (category) => (
                                                            <option
                                                                value={
                                                                    category.category_id
                                                                }
                                                            >
                                                                {
                                                                    category.nameCategory
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="mb-3 ">
                                                <label className="form-label">
                                                    Brand
                                                </label>
                                                <select
                                                    className="form-select form-select-lg "
                                                    aria-label="Large select example"
                                                    id="brand_id"
                                                    name="brand_id"
                                                    value={newProduct.brand_id}
                                                    onChange={handleGetValue}
                                                >
                                                    <option>
                                                        -- Chọn Brand --
                                                    </option>
                                                    {brands.map((brand) => (
                                                        <option
                                                            value={brand.id}
                                                        >
                                                            {brand.nameBrand}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="formFileSm"
                                                    className="form-label"
                                                >
                                                    Image Product
                                                </label>
                                                <input
                                                    className="form-control form-control-sm p-5"
                                                    id="formFileSm"
                                                    type="file"
                                                    name="image"
                                                    value={newProduct.image}
                                                    onChange={changeImage}
                                                    hidden
                                                />
                                                <br />
                                                <img
                                                    id="image"
                                                    src={preview}
                                                    alt=""
                                                    width="100px"
                                                    height="100px"
                                                />
                                            </div>
                                            {/* * */}
                                            <br />
                                            <div className="mb-3 ">
                                                <label
                                                    htmlFor="exampleInputPassword1"
                                                    className="form-label"
                                                >
                                                    Quantity Product
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="stock"
                                                    name="stock"
                                                    value={newProduct.stock}
                                                    onChange={handleGetValue}
                                                />
                                            </div>
                                            <br />
                                            <button
                                                onClick={
                                                    edit
                                                        ? handleEdit
                                                        : handleSave
                                                }
                                                className="btn btn-primary"
                                                id="save"
                                            >
                                                {edit ? "Edit" : "Save"}
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="card g-col-9 shadow border-0 "
                                        id="a"
                                    >
                                        <div className="card-header">
                                            <h5 className="mb-0 title">
                                                All Product
                                            </h5>
                                        </div>
                                        <div
                                            className="table-responsive"
                                            id="b"
                                        >
                                            <table className="table table-hover table-nowrap">
                                                <thead className="thead-light ">
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">
                                                            Image
                                                        </th>
                                                        <th scope="col">
                                                            Name
                                                        </th>
                                                        <th scope="col">
                                                            Price
                                                        </th>
                                                        <th scope="col">
                                                            Quantity
                                                        </th>
                                                        <th scope="col">
                                                            Acction
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {displayedProducts
                                                        .filter((item) =>
                                                            item.nameProduct
                                                                .toLowerCase()
                                                                .includes(
                                                                    searchProduct
                                                                )
                                                        )
                                                        .map((item, index) => (
                                                            <tr
                                                                key={index}
                                                                className=""
                                                            >
                                                                <td>
                                                                    {item.id}
                                                                </td>
                                                                <td>
                                                                    <img
                                                                        src={
                                                                            item.image
                                                                        }
                                                                        alt=""
                                                                        className="w-[100px] max-h-[150px] m-auto"
                                                                    />
                                                                </td>
                                                                <td className="max-w-[200px] text-wrap">
                                                                    {
                                                                        item.nameProduct
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {USDollar.format(
                                                                        item.price
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {item.stock}
                                                                </td>
                                                                <td className="">
                                                                    <Button
                                                                        variant="contained"
                                                                        onClick={() =>
                                                                            handleEditProduct(
                                                                                item
                                                                            )
                                                                        }
                                                                    >
                                                                        Sửa
                                                                    </Button>
                                                                    <br />
                                                                    <br />
                                                                    <Button
                                                                        variant="contained"
                                                                        onClick={() =>
                                                                            handleDeleteProduct(
                                                                                item.id
                                                                            )
                                                                        }
                                                                    >
                                                                        Xóa
                                                                    </Button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div id="changePage"></div>
                                        <Pagination
                                            className="flex m-auto mb-24"
                                            current={currentPage}
                                            onChange={onPageChange}
                                            pageSize={itemsPerPage}
                                            total={render.length}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Modal
                title="Add Information Product"
                open={isModalOpen}
                // onOk={handlaAddInfor}
                onCancel={handleCancel}
            >
                <div>
                    {products.map((item, index) => (
                        <div key={index}>
                            <p>Name: {item.nameProduct}</p>
                            <p>{USDollar.format(item.price)}</p>
                            <p>{item.category_id}</p>
                        </div>
                    ))}
                </div>
                <Select
                    mode="multiple"
                    tagRender={tagRender}
                    defaultValue={["gold", "cyan"]}
                    style={{
                        width: "100%",
                    }}
                    options={options2}
                />
            </Modal>
        </>
    );
}

export default AdminProduct;
