import React from "react";
import publicAxios from "../config/PublicAxios";
import { success, failed } from "../components/Modal/NotificationModal";
import { Button } from "@mui/material";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";
import "./admin.css";

function AdminUser() {
    const [dataUser, setDataUser] = React.useState([]);
    const handleGetUsers = async () => {
        const response = await publicAxios.get("/api/user");
        setDataUser(response.data);
    };
    const listUser = dataUser.filter((user)=> user.role === 0);
    const handleChangeStatus = async (user) => {
        if (user.status === 1) {
            user.status = 0;
        } else {
            user.status = 1;
        }
        await publicAxios.patch(`/api/user/status/${user.id}`, user);
        success("Thay đổi trạng thái thành công");
        handleGetUsers();
    };


    React.useEffect(() => {
        handleGetUsers();
        document.title = "Admin - User";
    }, []);
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
                                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                        {/* Title */}
                                        <h1 className="h2 mb-0 ls-tight">
                                            List User
                                        </h1>
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
                                <div className="card-header">
                                    <h5 className="mb-0">List User</h5>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Id </th>
                                                <th scope="col">Account</th>
                                                <th scope="col">
                                                    Phone Number
                                                </th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Acction</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listUser?.map(
                                                (user, index) => (
                                                    <tr key={index}>
                                                        <th scope="col">
                                                            {user.id}
                                                        </th>
                                                        <th scope="col">
                                                            {user.name}
                                                        </th>
                                                        <th scope="col">
                                                            {user.phone}
                                                        </th>
                                                        <th scope="col">
                                                            {user.status == 1
                                                                ? "Lock"
                                                                : "Normal"}
                                                        </th>
                                                        <th scope="col">
                                                            {/* <Button variant="contained" onClick={() => handleChangeStatus(user)}>{user.status == 1 ? "Open" : "Lock"}</Button> */}
                                                            <Switch
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
                                                            />
                                                        </th>
                                                    </tr>
                                                )
                                            )}
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

export default AdminUser;
