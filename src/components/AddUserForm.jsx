import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData`, data);
            alert(`New User Data Created Successfully!`);
            navigate("/"); 
        } catch (err) {
            console.error(err);
            alert("Error creating user data. Please try again.");
        }
    };

    const handleGoBack = () => {
        navigate("/"); 
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <form onSubmit={handleCreate} className="bg-light shadow-sm rounded p-4 col-lg-8 col-md-10">
                    <h1 className="text-center text-primary mb-4">Create User Form</h1>
                    <div className="row">
                        <div className="mb-3 col-sm-12 col-lg-6">
                            <label htmlFor="name" className="form-label"><b>Name:</b></label>
                            <input type="text" className="form-control" name="name" id="name" value={data.name} onChange={handleChange} placeholder="e.g. Rubika Kumar" required />
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-6">
                            <label htmlFor="userName" className="form-label"><b>User Name:</b></label>
                            <input type="text" className="form-control" name="userName" id="userName" value={data.userName} onChange={handleChange} placeholder="e.g. Indhu" required />
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-6">
                            <label htmlFor="email" className="form-label"><b>Email ID:</b></label>
                            <input type="email" className="form-control" name="email" id="email" value={data.email} onChange={handleChange} placeholder="e.g. sample@gmail.com" required />
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-6">
                            <label htmlFor="phoneNumber" className="form-label"><b>Phone Number:</b></label>
                            <input type="tel" className="form-control" name="phoneNumber" id="phoneNumber" value={data.phoneNumber} onChange={handleChange} placeholder="e.g. 4678894326" required />
                        </div>
                        <div className="col-12 mb-3">
                            <h5><b>Address:</b></h5>
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-4">
                            <label htmlFor="doorNo" className="form-label"><b>Door No:</b></label>
                            <input type="text" className="form-control" name="addressDoorNo" id="doorNo" value={data.addressDoorNo} onChange={handleChange} placeholder="e.g. Apt/Suite 421" required />
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-8">
                            <label htmlFor="street" className="form-label"><b>Street:</b></label>
                            <input type="text" className="form-control" name="addressStreet" id="street" value={data.addressStreet} onChange={handleChange} placeholder="e.g. Bharathiyar street" required />
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-5">
                            <label htmlFor="city" className="form-label"><b>City:</b></label>
                            <input type="text" className="form-control" name="addressCity" id="city" value={data.addressCity} onChange={handleChange} placeholder="e.g. Chennai" required />
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-4">
                            <label htmlFor="state" className="form-label"><b>State:</b></label>
                            <input type="text" className="form-control" name="addressState" id="state" value={data.addressState} onChange={handleChange} placeholder="e.g. Tamil Nadu" required />
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-3">
                            <label htmlFor="zipCode" className="form-label"><b>Zip Code:</b></label>
                            <input type="text" className="form-control" name="addressZipCode" id="zipCode" value={data.addressZipCode} onChange={handleChange} placeholder="e.g. 600017" required />
                        </div>
                        <div className="col-12 mb-3">
                            <h5><b>Company:</b></h5>
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-6">
                            <label htmlFor="companyName" className="form-label"><b>Company Name:</b></label>
                            <input type="text" className="form-control" name="companyName" id="companyName" value={data.companyName} onChange={handleChange} placeholder="e.g. XYZ Pvt Ltd" required />
                        </div>
                        <div className="mb-3 col-sm-12 col-lg-6">
                            <label htmlFor="companyDescription" className="form-label"><b>Company Description:</b></label>
                            <textarea className="form-control" name="companyDescription" id="companyDescription" value={data.companyDescription} onChange={handleChange} placeholder="e.g. Leading software solutions provider" required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Add User</button>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <button onClick={handleGoBack} className="btn btn-secondary">Go Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default AddUserForm;
