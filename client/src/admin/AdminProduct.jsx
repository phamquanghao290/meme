import React, { useEffect } from "react";
import { Button } from "@mui/material";
import publicAxios from "../config/PublicAxios";
import { success, failed } from "../components/Modal/NotificationModal";
import axios from "axios";
import { Pagination } from "antd";
import ReactLoading from "react-loading";
import "./admin.css";
import { useState } from "react";
import {
  addProductsAPI,
  deleteProductsAPI,
  getProductsAPI,
  putProductsAPI,
} from "../apis/products.services";
import { getAllCateAPI } from "../apis/category.services";
import { getAllBrandAPI } from "../apis/brand.services";
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
  const [searchProduct, setSearchProduct] = React.useState("");
  const [edit, setEdit] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
  const [options, setOptions] = useState([]);
  const [status, setStatus] = useState(false);

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
    const response = await getAllCateAPI();
    setCategories(response.data);
  };
  const handleGetAllBrand = async () => {
    const response = await getAllBrandAPI();
    setBrands(response.data);
  };
  const handleGetProducts = async () => {
    const response = await getProductsAPI();
    setProducts(response.data);
  };
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
    if (newProduct.nameProduct == "") {
      return failed("Product name cannot be blank");
    }
    if (newProduct.price == "") {
      return failed("Product price cannot be blank");
    }
    if (newProduct.category_id == "") {
      return failed("Product category cannot be blank");
    }
    if (newProduct.brand_id == "") {
      return failed("Product brand cannot be blank");
    }
    if (!selectedMedia) {
      return failed("Product image cannot be blank");
    }
    if (newProduct.stock == "") {
      return failed("Product stock cannot be blank");
    }
    const check = products.find(
      (item) =>
        item.name_product.toLowerCase() ===
        newProduct.nameProduct.trim().toLowerCase()
    );
    if (check) {
      failed("Name Products Already Exist");
      return;
    }
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
      const response = await addProductsAPI({
        ...newProduct,
        image: media,
      });
      setProducts(response.data);
      success(response.message);
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
      failed("add error");
    }
  };

  const handleEdit = async () => {
    try {
      if (!selectedMedia) {
        const response = await putProductsAPI(newProduct.id, {
          ...newProduct,
          image: preview,
        });
        setProducts(response.data);
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
      const response = await putProductsAPI(newProduct.id, {
        ...newProduct,
        image: media,
      });
      setFlag(true);
      setProducts(response.data);
      success(response.message);
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
      failed("Repair failed");
    }
  };
  const handleEditProduct = async (item) => {
    setNewProduct({
      ...newProduct,
      id: item.id,
      nameProduct: item.name_product,
      price: item.price,
      category_id: item.category.id,
      brand_id: item.brand.id,
      stock: item.stock,
    });
    setPreview(item.image);
    setEdit(true);
  };
  const handleDeleteProduct = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this product?")) {
        const response = await deleteProductsAPI(id);
        setProducts(response.data);
        success(response.message);
      }
    } catch (error) {
      failed("Delete failed product");
    }
  };

  const handleSearch = async (e) => {
    const search = e.target.value.toLowerCase();
    try {
      const response = await publicAxios.get(
        `/api/product/search?key=${search}`
      );
      setProducts(response.data);
    } catch (error) {
      failed(error.response.data.message);
    }
  };

  const renderProducts = () => {
    if (searchProduct === "") {
      return products;
    } else {
      return products?.filter((item) => item);
    }
  };

  const render = renderProducts();
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
    document.title = "Admin - Product";
  }, [flag]);

  useEffect(() => {
    setTimeout(() => {
      setStatus(true);
    }, 1100);
  }, [status]);
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
                    <h1 className="h2 mb-0 ls-tight">Product</h1>
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
          <main className="pt-3 bg-surface-secondary ">
            <div className="container-fluid">
              {/* Card stats */}

              <div className="mt-5 mx-3">
                <div className="row grid gap-3 ">
                  <div className="g-col-3 card shadow border-0 ">
                    <div className="card-header">
                      <h5 className="mb-0 title">Add Product</h5>
                    </div>
                    <div className="px-1 ">
                      <div className="mb-3 ">
                        <label htmlFor="name" className="form-label">
                          Name Product
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name-product"
                          aria-describedby="emailHelp"
                          name="nameProduct"
                          value={newProduct.nameProduct}
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
                        <label className="form-label">Category</label>
                        <select
                          className="form-select form-select-lg cursor-pointer "
                          aria-label="Large select example"
                          id="category_id"
                          name="category_id"
                          value={newProduct.category_id}
                          onChange={handleGetValue}
                        >
                          <option>--Product type--</option>
                          {categories.map((category) => (
                            <option value={category.id}>
                              {category.name_category}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3 ">
                        <label className="form-label">Brand</label>
                        <select
                          className="form-select form-select-lg cursor-pointer"
                          aria-label="Large select example"
                          id="brand_id"
                          name="brand_id"
                          value={newProduct.brand_id}
                          onChange={handleGetValue}
                        >
                          <option>-- Select Brand --</option>
                          {brands.map((brand) => (
                            <option value={brand.id}>{brand.name_brand}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="formFileSm"
                          className="form-label cursor-pointer"
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
                        onClick={edit ? handleEdit : handleSave}
                        className="btn btn-primary"
                        id="save"
                      >
                        {edit ? "Edit" : "Save"}
                      </button>
                    </div>
                  </div>
                  <div className="card g-col-9 shadow border-0 " id="a">
                    <div className="card-header">
                      <h5 className="mb-0 title">All Product</h5>
                    </div>
                    {status ? (
                      <div className="table-responsive" id="b">
                        <table className="table table-hover table-nowrap">
                          <thead className="thead-light ">
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Image</th>
                              <th scope="col">Name</th>
                              <th scope="col">Price</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Acction</th>
                            </tr>
                          </thead>
                          <tbody>
                            {displayedProducts
                              .filter((item) =>
                                item.name_product
                                  .toLowerCase()
                                  .includes(searchProduct)
                              )
                              .map((item, index) => (
                                <tr key={index} className="">
                                  <td>{item.id}</td>
                                  <td>
                                    <img
                                      src={item.image}
                                      alt=""
                                      className="w-[100px] max-h-[150px] m-auto"
                                    />
                                  </td>
                                  <td className="max-w-[200px] text-wrap">
                                    {item.name_product}
                                  </td>
                                  <td>{USDollar.format(item.price)}</td>
                                  <td>{item.stock}</td>
                                  <td className="">
                                    <Button
                                      className="w-[100px]"
                                      variant="contained"
                                      onClick={() => handleEditProduct(item)}
                                    >
                                      Edit
                                    </Button>
                                    <br />
                                    <br />
                                    <Button
                                      className="w-[100px]"
                                      variant="contained"
                                      onClick={() =>
                                        handleDeleteProduct(item.id)
                                      }
                                    >
                                      Delete
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <ReactLoading
                        type={"spin"}
                        color={"#525f7f"}
                        height={"8%"}
                        width={"8%"}
                        className=" m-auto "
                      />
                    )}
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
    </>
  );
}

export default AdminProduct;
