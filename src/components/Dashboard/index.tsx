import "./style.css";

import React from "react";
import { Title } from "react-admin";

const Dashboard = () => {
  return (
    <div>
      <Title title={"Dashboard"}></Title>
      <h1>Dashboard</h1>
      <div className="admin-cards">
        <div className="admin-card">
          <h3 className="admin-card-title">Admins</h3>
          <div className="admin-card-content">10</div>
        </div>
        <div className="admin-card">
          <h3 className="admin-card-title">Users</h3>
          <div className="admin-card-content">12K</div>
        </div>
        <div className="admin-card">
          <h3 className="admin-card-title">Posts</h3>
          <div className="admin-card-content">120K</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
