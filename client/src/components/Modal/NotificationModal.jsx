import { notification } from "antd";

const success = (type) => {
    notification.success({
        message: type,
        style: {
            top: 50,
        },
    });
};

const failed = (type) => {
    notification.error({
        message: type,
        style: {
            top: 50,
        },
    });
};

export { success, failed };
