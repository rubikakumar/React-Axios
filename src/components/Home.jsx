import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseFromPlaceholder = await axios.get("https://jsonplaceholder.typicode.com/users");
        const responseFromMockApi = await axios.get("https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData");
        const combinedData = [
          ...responseFromPlaceholder.data.map(user => ({ ...user, source: 'jsonplaceholder' })), 
          ...responseFromMockApi.data.map(user => ({ ...user, source: 'mockapi' }))
        ];
        
        setUserData(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id, source) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        if (source === 'mockapi') {
          await axios.delete(`https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData/${id}`);
          alert("User deleted successfully!");
        } else if (source === 'jsonplaceholder') {
          alert("User deleted successfully!");
        }
        setUserData((prevData) => prevData.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete the user.");
      }
    }
  };

  return (
    <div className="container h-100">
      <h6 className="h6 text-end py-2">
        <span className="bg-warning px-2 rounded">
          Total User Profiles: {userData.length || 0}
        </span>
      </h6>
      <h1 className="h1 text-center text-light mb-5">
        <span className="px-5 border border-white">User Profiles</span>
      </h1>
      {loading ? (
        <h3 className="text-white text-center my-5">Loading...</h3>
      ) : userData.length === 0 ? (
        <h3 className="text-white text-center my-5">
          There are no user profiles.
          <br /> Add a new user to see profiles!
        </h3>
      ) : (
        <div className="row d-flex justify-content-center h-100">
          {userData.map((item) => (
            <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
              <div className="card text-center h-100">
                <div className="card-header">
                  <h5 className="card-title">{item.name}</h5>
                </div>
                <div className="card-body">
                  <img
                    src="../Images/dummy_profile_img1.jpg" 
                    className="img-fluid"
                    alt="profileImg"
                  />
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate(`/userProfile/${item.id}`)}
                  >
                    View Profile
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(item.id, item.source)} 
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
