import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const jsonData = localStorage.getItem("userLogin");
  const parsedData = jsonData ? JSON.parse(jsonData) : null;

  return parsedData?.role === 1 ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
