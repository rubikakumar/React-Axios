import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem(`user_${id}`);
    if (storedData) {
      setUserData(JSON.parse(storedData));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [id]);

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

  if (loading) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <h1>User Profile</h1>
      <h3>Name: {userData.name || "N/A"}</h3>
      <h3>Username: {userData.username || "N/A"}</h3>
      <h3>Email: {userData.email || "N/A"}</h3>
      <h3>Phone: {userData.phone || "N/A"}</h3>
      <h3>Website: {userData.website || "N/A"}</h3>
      <h3>
        Address: {userData.address ? `${userData.address.street}, ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode}` : "N/A"}
      </h3>
      <h3>Company: {userData.company ? userData.company.name : "N/A"}</h3>
    </div>
  );
};

export default UserProfile;
