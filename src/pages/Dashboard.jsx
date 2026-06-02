import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import AnalyticsCards from "../components/dashboard/AnalyticsCards";

import EmployeeChart from "../components/dashboard/EmployeeChart";

import StatusPieChart from "../components/dashboard/StatusPieChart";

import { getAnalytics } from "../api/dashboardApi";

import toast from "react-hot-toast";

const Dashboard = () => {

  const navigate = useNavigate();

  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchAnalytics =
    async () => {
      try {

        const res =
          await getAnalytics();

        setAnalytics(
          res.data
        );

      } catch (error) {

        toast.error(
          error.response?.data
            ?.message ||
            "Failed to load analytics"
        );

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/");
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mt-3">

        <h2>
          Employee Dashboard
        </h2>

        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <AnalyticsCards
        analytics={analytics}
      />

      <div className="row mt-4">

        <div className="col-md-6">

          <EmployeeChart
            data={
              analytics.departmentWise
            }
          />

        </div>

        <div className="col-md-6">

          <StatusPieChart
            active={
              analytics.activeEmployees
            }
            inactive={
              analytics.inactiveEmployees
            }
          />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;