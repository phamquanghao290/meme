import { notification } from "antd"
const successNoti = (type) => {
    notification.success({
        message: type,
        style: {
            top: 100,
            zIndex: 1000000
        },
    });
}
const failedNoti = (type) => {
    notification.error({
        message: type,
        style: {
            top: 100,
            zIndex: 1000000,
        },
    });
}
export { successNoti, failedNoti }