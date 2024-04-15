import React from "react";
import { Button } from "@mui/material";
import publicAxios from "../config/PublicAxios";
import { success, failed } from "../components/Modal/NotificationModal";
import "./admin.css";

function AdminColorSize() {
    const [newColor, setNewColor] = React.useState({nameColor: ""})
    const [colors, setColors] = React.useState([])
    const [newSize, setNewSize] = React.useState({nameSize: ""})
    const [sizes, setSizes] = React.useState([])
    const [flag, setFlag] = React.useState(false)

    const handleGetAllColor = async () => {
        const response = await publicAxios.get("/api/color")
        setColors(response.data)
    }

    const handleGetAllSize = async () => {
        const response = await publicAxios.get("/api/size")
        setSizes(response.data)
    }

    const handleGetValueColor = (e) => {
        setNewColor({nameColor: e.target.value})
    }

    const handleGetValueSize = (e) => {
        setNewSize({nameSize: e.target.value})
    }

    const handleAddSize = async () => {
        const response = await publicAxios.post("/api/size", newSize)
        setFlag(!flag)
        setNewSize({nameSize: ""})
        success("Thêm thành công")
    }

    const handleDeleteSize = async (id) => {
        const response = await publicAxios.delete(`/api/size/${id}`)
        setFlag(!flag)
        success("Xóa thành công")
    }

    const handleAddColor = async () => {
        const response = await publicAxios.post("/api/color", newColor)
        setFlag(!flag)
        setNewColor({nameColor: ""})
        success("Thêm thành công")
    }

    const handleDeleteColor = async (id) => {
        const response = await publicAxios.delete(`/api/color/${id}`)
        setFlag(!flag)
        success("Xóa thành công")
    }
        
    React.useEffect(() => {
        document.title = "Size and Color"
        handleGetAllColor()
        handleGetAllSize()
    }, [flag])
    
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
                                            Size and Color
                                        </h1>
                                        {/* <input
                                            onChange={(e) =>
                                                setNewCate({
                                                    ...newCate,
                                                    nameCategory:
                                                        e.target.value,
                                                })
                                            }
                                            value={newCate.nameCategory}
                                            name="nameCategory"
                                            placeholder="Category name"
                                            type="text"
                                            className="w-full max-w-[300px] h-[40px] p-[12px] rounded-lg border-2 border-blue-600"
                                        ></input>
                                        <Button
                                            variant="contained"
                                            onClick={
                                                newCate.id
                                                    ? handleSave
                                                    : handleAdd
                                            }
                                            className="w-full max-w-[100px] h-[40px] p-[12px] rounded-lg ml-16 border-2 border-blue-600"
                                        >
                                            {newCate.id
                                                ? "Lưu"
                                                : "Thêm"}
                                        </Button> */}
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
                            <div className="mt-5 mx-3">
                                <div className="row grid gap-3">
                                    <div className="g-col-6 card shadow border-0">
                                        <div className="card-header">
                                            <h5 className=" text-lg font-bold">
                                                Add Size
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <label htmlFor="name" className="form-label text-lg">
                                                Name size
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nameSize"
                                                    placeholder="Enter name size"
                                                    name="nameSize"
                                                    onChange={handleGetValueSize}
                                                    value={newSize.nameSize}
                                                />
                                                <Button variant="contained" onClick={handleAddSize}>Add</Button>
                                            </div><br />
                                            {
                                                sizes.map((size, index) => (
                                                    <div className="flex justify-between items-start" key={index}>
                                                        <p className="text-lg font-bold border border-black px-4 py-[5px] rounded-md mb-5">{size.nameSize}</p>
                                                        <Button className="h-10" variant="contained" onClick={() => handleDeleteSize(Number(size.sizeId))}>Delete</Button>
                                                    </div>
                                                ))
                                            }
                                            
                                        </div>
                                    </div>
                                    <div className="g-col-6 card shadow border-0">
                                        <div className="card-header">
                                            <h5 className=" text-lg font-bold">
                                                Add Color
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <label htmlFor="name" className="form-label text-lg">
                                                Name Color
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nameColor"
                                                    placeholder="Enter name Color"
                                                    name="nameColor"
                                                    onChange={handleGetValueColor}
                                                    value={newColor.nameColor}
                                                />
                                                <Button variant="contained" onClick={handleAddColor}>Add</Button>
                                            </div><br />
                                            {
                                                colors.map((color, index) => (
                                                    <div className="flex justify-between items-start" key={index}>
                                                        <p style={{ backgroundColor: color.nameColor, width: '80px', height: '40px'}}  className="text-lg font-bold rounded-md mb-5"></p>
                                                        <Button className="h-10" variant="contained" onClick={() => handleDeleteColor(Number(color.colorId))}>Delete</Button>
                                                    </div>
                                                ))
                                            }
                                        </div>
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

export default AdminColorSize;
