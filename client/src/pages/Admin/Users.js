// Users.js
import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users from the backend API
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("/api/v1/auth/users");
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            <div className="row">
              {users.map((user) => (
                <div key={user._id} className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body ">
                      <h5 className="card-title">{user.name}</h5>
                      <p className="card-text">Email: {user.email}</p>
                      <p className="card-text">Phone Number: {user.phone}</p>
                      {/* Add other user details to display */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
