import { RiDeleteBin6Line } from "react-icons/ri";
import { TbCameraPlus } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { CiSquareRemove } from "react-icons/ci";
import { GrEdit } from "react-icons/gr";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Modal } from "antd";

import products14 from "../../public/images/product14.png";
// import products15 from "../../../public/images/product15.png";
// import products16 from "../../../public/images/product16.png";
import { Pagination } from "antd";
import axios from "axios";
import { successNoti } from "../utils/noti";
function AdminBanner() {
  const items = [
    {
      label: <a href="https://www.antgroup.com">Sub Hero Section</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">Popular</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Hero Section",
      key: "3",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBanner, setNewBanner] = useState({
    id: "",
    name: "",
    type: ""
  })
  const [flag, setFlag] = useState(false)
  const [preview, setPreview] = useState(null || "");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const handleGetValue = (e) => {
    setNewBanner({ ...newBanner, [e.target.name]: e.target.value });
  }
  const [banner, setBanner] = useState([])
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleGetBanner = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/banner")
    setBanner(result.data)
  }

  useEffect(() => {
    handleGetBanner()
    return () => {
      setFlag(false)
    }
  }, [flag])

  const handleAddMedia = (event) => {
    setSelectedMedia(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setPreview(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    const formData = new FormData();
    formData.append("file", selectedMedia);
    formData.append("upload_preset", "project-md3");
    const [uploadMedia] = await Promise.all([
      axios.post(
        "https://api.cloudinary.com/v1_1/dqujxh3uc/image/upload",
        formData
      ),
    ]);
    const media = uploadMedia.data.secure_url;
    const result = await axios.post("http://localhost:8080/api/v1/banner", {
      ...newBanner,
      image: media
    })
    // setBanner(result.data.data)
    setFlag(true)
    setNewBanner({
      id: "",
      name: "",
      type: ""
    })
    setPreview(null)

    successNoti(result.data.message)
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const showModalEdit = (item) => {
    setIsModalOpenEdit(true);
    setNewBanner(item)
    setPreview(item.image)
  };
  const handleOkEdit = async () => {
    setIsModalOpenEdit(false);
    try {
      if (!selectedMedia) {
        const response = await axios.patch(
          `http://localhost:8080/api/v1/banner/update/${newBanner.id}`,
          newBanner
        );
        setFlag(true)
        setNewBanner({
          id: "",
          name: "",
          type: ""
        })
        setPreview(null || "")
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedMedia);
      formData.append("upload_preset", "project-md3");
      const [uploadMedia] = await Promise.all([
        axios.post(
          "https://api.cloudinary.com/v1_1/dqujxh3uc/image/upload",
          formData
        ),
      ]);
      const media = uploadMedia.data.secure_url;
      const response = await axios.patch(
        `http://localhost:8080/api/v1/banner/update/${newBanner.id}`,
        { ...newBanner, image: media }
      );
      successNoti(response.data.message)
      setFlag(true)
      setNewBanner({
        id: "",
        name: "",
        type: ""
      })
      setPreview(null || "")

    } catch (error) {
      console.log(error)
    }

  };
  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };
  const [isModalOpendelete, setIsModalOpendelete] = useState(false);
  const showModaldelete = () => {
    setIsModalOpendelete(true);
  };
  const handleOkdelete = async (id) => {
    setIsModalOpendelete(false);
    console.log(id)
    const result = await axios.delete(`http://localhost:8080/api/v1/banner/${id}`)
    setFlag(true)
    successNoti(result.data.message)
  };
  const handleCanceldelete = () => {
    setIsModalOpendelete(false);
  };
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
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
                  <div className="col-sm-6 col-12 mb-4 mb-sm-0 flex gap-28 items-center">
                    {/* Title */}
                    <h1 className="text-xl mb-0 ls-tight font-bold">Banner</h1>
                    <Button
                      variant="contained"
                      // onClick={newCate.categoryId ? handleSave : handleAdd}
                      type="primary"
                      onClick={showModal}
                      className="w-full max-w-[200px] h-[40px] p-[12px] rounded-lg ml-16 border-2 border-blue-600 "
                    >
                      Create New Banner
                    </Button>
                    <Modal
                      title="Create New Banner"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    // className="mt-[50px]"
                    >
                      <h2 >Image</h2>
                      <p>Image upload can not over 20MB</p>
                      <div>
                        <div className="p-8 flex gap-2">
                          <input
                            type="file"
                            name="image"
                            id="image"
                            className="hidden"
                            onChange={handleAddMedia}
                          />

                          <label
                            htmlFor="image"
                            className="w-[100px] h-[100px] border-2 border-dashed border-blue-600 rounded-lg flex justify-center items-center "
                          >

                            <img src={preview} alt="" width={75} height={90} />
                          </label>
                          {/* <Button
                            variant="contained"
                            // onClick={newCate.categoryId ? handleSave : handleAdd}
                            type="submit"
                            
                            className=" max-w-[20px] h-[40px]  rounded-lg  border-2 border-blue-600 "
                          >
                           <MdDelete className="text-xl"/>
                          </Button> */}
                        </div>

                        <div>
                          <h3 className="text-md pt-1 pb-3">Name</h3>
                          <input
                            type="text"
                            name="name"
                            className="w-full bg-[#DBDBDB] outline-none border-2 border-black-600 rounded-lg p-2"
                            placeholder="nameBanner"
                            onChange={handleGetValue}
                            value={newBanner.name}
                          />
                        </div>
                        <div>
                          <h3 className="text-md pt-3 pb-3 ">
                            Type
                          </h3>
                          <input
                            type="text"
                            name="type"
                            className="w-full bg-[#DBDBDB] outline-none border-2 border-black-600 rounded-lg p-2"
                            placeholder="Type"
                            onChange={handleGetValue}
                            value={newBanner.type}
                          />
                          {/* <select
                            name=""
                            id=""
                            className="w-full bg-[#DBDBDB] outline-none border-2 border-black-600 rounded-lg p-2"
                          >
                            <option value="">Banner</option>
                            <option value="">Banner</option>
                            <option value="">Banner</option>
                          </select> */}
                        </div>

                      </div>
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
              <div className="card shadow border-0 mb-7 text-xl">
                <div className="card-header text-xl flex gap-[70%]">
                  <h5 className="mb-0">List Banner</h5>

                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space className="text-md cursor-pointer">
                        Type
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover table-nowrap font-bold">
                    <thead className="thead-light text-xl">
                      <tr>
                        <th scope="col">Id </th>
                        <th scope="col">Banner</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-xl" style={{ marginLeft: "100px" }}>
                      {banner?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td scope="col">{index + 1}</td>
                            <td
                              scope="col"
                              className="flex justify-center items-center"
                            >
                              <img
                                src={item.image}
                                className="w-[100px] h-[100px]"
                                alt=""
                              />
                              <p>{item.name}</p>
                            </td>

                            <td scope="col">{item.type}</td>

                            <td scope="col">

                              <Modal
                                title="Edit Banner"
                                open={isModalOpenEdit}
                                onOk={handleOkEdit}
                                onCancel={handleCancelEdit}

                              >
                                <h2>Image</h2>
                                <p>Image upload can not over 20MB</p>
                                <div>
                                  <div className="p-8 flex gap-2">
                                    <input
                                      type="file"
                                      name="image"
                                      id="image"
                                      className="hidden"

                                      onChange={handleAddMedia}
                                    />

                                    <label
                                      htmlFor="image"
                                      className="w-[100px] h-[100px] border-2 border-dashed border-blue-600 rounded-lg flex justify-center items-center "
                                    >

                                      <img src={preview} alt="" width={75} height={90} />
                                    </label>
                                  </div>

                                  <div>
                                    <h3 className="text-md pt-1 pb-3">Name</h3>
                                    <input
                                      type="text"
                                      className="w-full bg-[#DBDBDB] outline-none border-2 border-black-600 rounded-lg p-2"
                                      placeholder="Placeholder"
                                      name="name"
                                      value={newBanner.name}
                                      onChange={handleGetValue}
                                    />
                                  </div>
                                  <div>
                                    <h3 className="text-md pt-3 pb-3 ">
                                      Type
                                    </h3>
                                    <input
                                      type="text"
                                      className="w-full bg-[#DBDBDB] outline-none border-2 border-black-600 rounded-lg p-2"
                                      placeholder="Placeholder"
                                      name="type"
                                      value={newBanner.type}
                                      onChange={handleGetValue}
                                    />
                                  </div>
                                </div>
                              </Modal>

                              <Button variant="danger" onClick={() => showModalEdit(item)}>
                                <i className="fa-regular fa-pen-to-square text-md"></i>
                              </Button>


                              <Modal
                                open={isModalOpendelete}
                                onOk={()=> handleOkdelete(item.id)}
                                onCancel={handleCanceldelete}

                              >
                                <div>
                                  <div className="text-xl bg-[#D64D22] w-[100px] h-[100px] rounded-[50%] m-auto flex items-center">
                                    <RiDeleteBin6Line className="text-white w-[50px] h-[50px] m-auto  " />
                                  </div>
                                  <div className="text-center ">
                                    <h2 className="mt-8">
                                      Are You Sure Want To Remove This Banner ?
                                    </h2>
                                    <p className="mt-2">
                                      This action can not be undo.
                                    </p>
                                  </div>
                                </div>
                              </Modal>

                              <Button variant="danger" onClick={showModaldelete} >
                                <i className="fa-regular fa-trash-can text-md"></i>
                              </Button>

                            </td>
                          </tr>
                        )
                      })}


                    </tbody>
                  </table>
                  <Pagination
                    current={current}
                    onChange={onChange}
                    total={5}
                    className="text-center mt-4"
                  />

                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminBanner;
