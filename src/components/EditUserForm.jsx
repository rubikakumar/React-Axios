import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUserForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: "",
        phoneNumber: "",
        addressDoorNo: "",
        addressStreet: "",
        addressCity: "",
        addressState: "",
        addressZipCode: "",
        website: "",
        companyName: "",
        companyDescription: "",
    });
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(res.data);
            } catch (err) {
                console.error("Error fetching user data:", err);
                alert("Failed to fetch user data");
            }
        };
        fetchUser();
    }, [id]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
            alert(`User Data Updated Successfully!`);
            navigate(`/userProfile/${id}`, { state: { updatedUser: user } });
        } catch (err) {
            console.error(err);
            alert("Failed to update user data.");
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Edit User Profile</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userName"
                        name="userName"
                        value={user.userName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update User</button>
            </form>
        </div>
    );
};

export default EditUserForm;
