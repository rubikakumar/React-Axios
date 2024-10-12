import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("User data updated successfully!");
    navigate(`/userProfile/${id}`, {
      state: { updatedUserData: userData },
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Edit User</h1>
      {loading ? (
        <h3 className="text-center">Loading...</h3>
      ) : (
        <>
          <div className="card p-4 shadow">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={userData.name || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={userData.username || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={userData.email || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={userData.phone || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Website</label>
                  <input
                    type="text"
                    className="form-control"
                    name="website"
                    value={userData.website || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={userData.company?.name || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Street</label>
                  <input
                    type="text"
                    className="form-control"
                    name="street"
                    value={userData.address?.street || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Suite</label>
                  <input
                    type="text"
                    className="form-control"
                    name="suite"
                    value={userData.address?.suite || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={userData.address?.city || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Zipcode</label>
                  <input
                    type="text"
                    className="form-control"
                    name="zipcode"
                    value={userData.address?.zipcode || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "150px", height: "40px", fontSize: "16px", padding: "5px" }}
                >
                  Update User
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mt-1"
                  onClick={() => navigate("/")}
                  style={{
                    width: "150px",
                    height: "40px",
                    fontSize: "16px",
                    padding: "5px",
                    marginLeft: "20px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn btn-info"
              onClick={() => navigate("/")}
              style={{ width: "200px", height: "40px", fontSize: "16px" }}
            >
              Go Back to Home
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EditUser;
