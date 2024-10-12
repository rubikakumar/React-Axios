import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const SingleUserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [singleUserData, setSingleUserData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.updatedUserData) {
      setSingleUserData(location.state.updatedUserData);
      setLoading(false);
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
          setSingleUserData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id, location.state]);

  return (
    <div className="container h-100 py-5">
      <div className="row h-100 d-flex justify-content-center align-items-center">
        <div className="col-12 text-center">
          {loading ? (
            <div className="py-5 text-light">Loading...</div>
          ) : (
            <div className="card h-100">
              <div className="row mx-0">
                <div className="col-md-12 col-lg-4 p-3">
                  <img
                    src="../Images/dummy_profile_img.jpg" 
                    className="img-fluid rounded"
                    alt="Profile"
                  />
                </div>
                <div className="col-md-12 col-lg-8">
                  <div className="card-body">
                    <h3 className="card-title mb-3 bg-info py-1">Personal Info</h3>
                    <p className="card-text mb-2"><b>Name:</b> {singleUserData.name}</p>
                    <p className="card-text mb-2"><b>User Name:</b> {singleUserData.username}</p>
                    <p className="card-text mb-2"><b>Email ID:</b> {singleUserData.email}</p>
                    <p className="card-text mb-2"><b>Phone Number:</b> {singleUserData.phone}</p>
                    <p className="card-text mb-2"><b>Website:</b> {singleUserData.website}</p>
                    <p className="card-text mb-2"><b>Company:</b> {singleUserData.company?.name || "N/A"}</p>
                    <p className="card-text mb-2"><b>Street:</b> {singleUserData.address?.street || "N/A"}</p>
                    <p className="card-text mb-2"><b>Suite:</b> {singleUserData.address?.suite || "N/A"}</p>
                    <p className="card-text mb-2"><b>City:</b> {singleUserData.address?.city || "N/A"}</p>
                    <p className="card-text mb-2"><b>Zipcode:</b> {singleUserData.address?.zipcode || "N/A"}</p>
                  </div>
                </div>
              </div>
              <div className="card-footer text-end">
                <button className="btn btn-warning me-2" onClick={() => navigate(`/editUser/${id}`, { state: { updatedUserData: singleUserData } })}>
                  Edit
                </button>
              </div>
            </div>
          )}
          <button className="btn btn-secondary mt-5" onClick={() => navigate('/')}>
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleUserProfile;
