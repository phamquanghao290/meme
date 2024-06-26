import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { success, failed } from "../components/Modal/NotificationModal";
import "./admin.css";
import ReactLoading from "react-loading";
import {
  addCategoryAPI,
  deletCategoryIdAPI,
  editCategoryAPI,
  getAllCateAPI,
} from "../apis/category.services";

function AdminCategory() {
    const [status, setStatus] = useState(false);
  const [newCate, setNewCate] = React.useState({
    name_category: "",
  });
  const [categories, setCategories] = React.useState([]);
  const handleGetAllCate = async () => {
    const response = await getAllCateAPI();
    setCategories(response.data);
  };
  React.useEffect(() => {
    document.title = "Danh mục";
    handleGetAllCate();
  }, []);
  const handleAdd = async () => {
    if (!newCate.name_category) {
      failed("Category name cannot be empty");
      return;
    }
    const check = categories.find(
      (item) =>
        item.name_category.toLowerCase() ===
        newCate.name_category.trim().toLowerCase()
    );
    if (check) {
      failed("Category name already exists");
      return;
    }
    try {
      const response = await addCategoryAPI(newCate);
      await handleGetAllCate();
      setCategories(response.data);
      success(response.message);
      setNewCate({ name_category: "" });
    } catch (error) {
      failed(error.response.data.message);
    }
  };
  const handleEdit = (item) => {
    setNewCate(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSave = async () => {
    try {
      const response = await editCategoryAPI(newCate.id, newCate);
      await handleGetAllCate();
      setCategories(response.data);
      success("Update successful");
      setNewCate({ name_category: "" });
    } catch (error) {
      failed("Update failed");
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("You definitely want to delete this category?")) {
      const response = await deletCategoryIdAPI(id);
      setCategories(response.data);
      success(response.message);
    }
    };

    useEffect(() => {
      setTimeout(() => {
        setStatus(true);
      }, 1100);
    }, [status]);
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
                  <div className="col-sm-6 col-12 mb-4 mb-sm-0 flex gap-16 items-center">
                    {/* Title */}
                    <h1 className="text-xl mb-0 ls-tight font-bold">
                      Category
                    </h1>
                    <input
                      onChange={(e) =>
                        setNewCate({
                          ...newCate,
                          name_category: e.target.value,
                        })
                      }
                      value={newCate.name_category}
                      name="nameCategory"
                      placeholder="Category name"
                      type="text"
                      className="w-full max-w-[300px] h-[40px] p-[12px] rounded-lg border-2 border-blue-600"
                    ></input>
                    <Button
                      variant="contained"
                      onClick={newCate.id ? handleSave : handleAdd}
                      className="w-full max-w-[100px] h-[40px] p-[12px] rounded-lg ml-16 border-2 border-blue-600"
                    >
                      {newCate.id ? "Save" : "Add"}
                    </Button>
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
                          <span className="h3 font-bold mb-0">$750.90</span>
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
                          <span className="h3 font-bold mb-0">215</span>
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
                          <span className="h3 font-bold mb-0">1.400</span>
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
                          <span className="h3 font-bold mb-0">95%</span>
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

              {status ? (
                <div className="card shadow border-0 mb-7 text-xl">
                  <div className="card-header text-xl">
                    <h5 className="mb-0">List Category</h5>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap font-bold">
                      <thead className="thead-light text-xl">
                        <tr>
                          <th scope="col">Id </th>
                          <th scope="col">Name Category</th>
                          <th scope="col">Acction</th>
                        </tr>
                      </thead>
                      {/* body */}
                      <tbody
                        className="text-xl"
                        style={{ marginLeft: "100px" }}
                      >
                        {categories?.map((item, index) => (
                          <tr key={index}>
                            <td scope="col">{index + 1}</td>
                            <td scope="col">{item.name_category}</td>
                            <td className="flex gap-8 justify-center">
                              <Button
                                className="w-[80px]"
                                variant="contained"
                                onClick={() => handleEdit(item)}
                              >
                                Edit
                              </Button>
                              <Button
                                className="w-[80px]"
                                variant="contained"
                                onClick={() => handleDelete(Number(item.id))}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <ReactLoading
                  type={"spin"}
                  color={"#525f7f"}
                  height={"5%"}
                  width={"5%"}
                  className="w-[100px] h-[100px] m-auto pt-[100px]"
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminCategory;
