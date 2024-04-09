import React, { useState } from "react";
import { Slider, Switch } from "antd";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./product.scss";
import anh1 from "../../../public/images/product13.png";

function ProductWomen() {
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        getItem("Dress Style", "1", <MailOutlined />, [
            getItem("Classic", "11"),
            getItem("Casual", "12"),
            getItem("Business", "13"),
            getItem("Sport", "14"),
        ]),
        getItem("Size", "2", <AppstoreOutlined />, [
            getItem(
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        marginBottom: "10px",
                        marginTop: "10px",
                        width: "100%",
                    }}
                >
                    <p>XS</p>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p>XL</p>
                    <p>XXL</p>
                </div>
            ),
            "21",
        ]),
        getItem("Price", "3", <SettingOutlined />, [
            getItem(<Slider range defaultValue={[20, 50]} />, "31"),
        ]),
    ];

    const getLevelKeys = (items1) => {
        const key = {};
        const func = (items2, level = 1) => {
            items2.forEach((item) => {
                if (item.key) {
                    key[item.key] = level;
                }
                if (item.children) {
                    return func(item.children, level + 1);
                }
            });
        };
        func(items1);
        return key;
    };
    const levelKeys = getLevelKeys(items);

    const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
    const onOpenChange = (openKeys) => {
        const currentOpenKey = openKeys.find(
            (key) => stateOpenKeys.indexOf(key) === -1
        );
        // open
        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex(
                    (key) => levelKeys[key] === levelKeys[currentOpenKey]
                );
            setStateOpenKeys(
                openKeys
                    // remove repeat key
                    .filter((_, index) => index !== repeatIndex)
                    // remove current level all child
                    .filter(
                        (key) => levelKeys[key] <= levelKeys[currentOpenKey]
                    )
            );
        } else {
            // close
            setStateOpenKeys(openKeys);
        }
    };
    return (
        <div style={{ marginTop: "50px" }}>
            <div className="Product">
                <div className="ProductWomen">
                    <p>Fillter</p>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["231"]}
                        openKeys={stateOpenKeys}
                        onOpenChange={onOpenChange}
                        style={{
                            width: 256,
                        }}
                        items={items}
                    />
                </div>
                <div className="Product_Women_Layout">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                height: "30px",
                                backgroundColor: "#8A33FD",
                                width: "7px",
                                borderRadius: "5px",
                                marginTop: "5px",
                            }}
                        ></div>
                        <p
                            style={{
                                marginLeft: "10px",
                                fontWeight: "bold",
                                fontSize: "20px",
                            }}
                        >
                            Women's Clothing
                        </p>
                    </div>
                    <br />
                    <br />
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        }}
                        className="Product_Women_grid"
                    >
                        <div className="Product_Women_item">
                            <img src={anh1} alt="" />
                            <br />
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                className="Product_Women_info"
                            >
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                </div>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8A33FD",
                                        color: "white",
                                        width: "100px",
                                        height: "30px",
                                        borderRadius: "7px",
                                        border: "none",
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="Product_Women_item">
                            <img src={anh1} alt="" />
                            <br />
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                className="Product_Women_info"
                            >
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                </div>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8A33FD",
                                        color: "white",
                                        width: "100px",
                                        height: "30px",
                                        borderRadius: "7px",
                                        border: "none",
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="Product_Women_item">
                            <img src={anh1} alt="" />
                            <br />
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                className="Product_Women_info"
                            >
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                </div>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8A33FD",
                                        color: "white",
                                        width: "100px",
                                        height: "30px",
                                        borderRadius: "7px",
                                        border: "none",
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="Product_Women_item">
                            <img src={anh1} alt="" />
                            <br />
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                className="Product_Women_info"
                            >
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                </div>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8A33FD",
                                        color: "white",
                                        width: "100px",
                                        height: "30px",
                                        borderRadius: "7px",
                                        border: "none",
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="Product_Women_item">
                            <img src={anh1} alt="" />
                            <br />
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                className="Product_Women_info"
                            >
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                </div>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8A33FD",
                                        color: "white",
                                        width: "100px",
                                        height: "30px",
                                        borderRadius: "7px",
                                        border: "none",
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="Product_Women_item">
                            <img src={anh1} alt="" />
                            <br />
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                className="Product_Women_info"
                            >
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                </div>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8A33FD",
                                        color: "white",
                                        width: "100px",
                                        height: "30px",
                                        borderRadius: "7px",
                                        border: "none",
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="Product_Women_item">
                            <img src={anh1} alt="" />
                            <br />
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                className="Product_Women_info"
                            >
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                </div>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8A33FD",
                                        color: "white",
                                        width: "100px",
                                        height: "30px",
                                        borderRadius: "7px",
                                        border: "none",
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="Product_Women_item">
                            <img src={anh1} alt="" />
                            <br />
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                className="Product_Women_info"
                            >
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                </div>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8A33FD",
                                        color: "white",
                                        width: "100px",
                                        height: "30px",
                                        borderRadius: "7px",
                                        border: "none",
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Product_Content">
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#8A33FD",
                            width: "7px",
                            height: "30px",
                            borderRadius: "7px",
                        }}
                    ></div>
                    <h2>Clothing for Women Online in India</h2>
                    <br />
                </div>
                <br />
                <div>
                    <h4>
                        Reexplore Women's Clothing Collection Online at Euphoria
                    </h4>
                    <br />
                    <p>
                        Women's Clothing – Are you searching for the best
                        website to buy Clothing for Women online in India? Well,
                        your search for the coolest and most stylish womens
                        clothing ends here. From trendy Casual Womens Wear
                        Online shopping to premium quality cotton women's
                        apparel, Euphoria has closet of Women Collection covered
                        with the latest and best designs of Women's Clothing
                        Online.
                    </p>
                    <br />
                    <p>
                        Our collection of clothes for women will make you the
                        trendsetter with an iconic resemblance of choice in
                        Womens Wear.
                    </p>
                    <br />
                    <h4>
                        One-Stop Destination to Shop Every Clothing for Women:
                        Euphoria
                    </h4>
                    <br />
                    <p>
                        Today, Clothing for Women is gaining more popularity
                        above all. This is because gone are the days when women
                        were used to carrying uncomfortable fashion. Today, a
                        lady looks prettier when she is in Casual Womens Wear
                        which is a comfortable outfit. Concerning this, Euphoria
                        has a big fat range of Stylish Women's Clothing that
                        would make her the winner wherever she goes.
                    </p>
                    <br />
                    <p>
                        Our collection of clothes for women will make you the
                        trendsetter with an iconic resemblance of choice in
                        Womens Wear. It is quite evident to say that there are
                        very few Womens Clothing online stores where you can buy
                        Western Wear for Women comprising the premium material
                        and elegant design that you are always seeking for.
                        Basically,
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductWomen;
