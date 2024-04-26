import { notification } from "antd"
const successNoti = (type) => {
    notification.success({
        message: type,
        style: {
            top: 100,
            zIndex: 900
        },
    });
}
const failedNoti = (type) => {
    notification.error({
        message: type,
        style: {
            top: 100,
            zIndex: 900,
        },
    });
}
export { successNoti, failedNoti }