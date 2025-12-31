import { Helmet } from "react-helmet-async";

export const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 ">
        Welcome to the Attendance System Dashboard
      </p>
    </>
  );
};
