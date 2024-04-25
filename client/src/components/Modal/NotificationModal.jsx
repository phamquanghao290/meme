import { notification } from "antd";

const success = (type) => {
    notification.success({
        message: type,
        style: {
            top: 50,
            zIndex: 10000000,
        },
    });
};

const failed = (type) => {
    notification.error({
        message: type,
        style: {
            top: 50,
            position:"sticky",
            zIndex: 9999999999999,
        },
    });
};

export { success, failed };
