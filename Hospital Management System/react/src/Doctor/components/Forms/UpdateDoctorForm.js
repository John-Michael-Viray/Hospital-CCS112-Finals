import React, { useState } from 'react';

const UpdateDoctorForm = ({ doctor, update, onClose }) => {
    const { first_name, last_name, specialization, license_number, phone, email } = doctor;
    const [formData, setFormData] = useState({ first_name, last_name, specialization, license_number, phone, email });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if the operation is successful, if not then don't close the modal.
        if(await update(doctor.id, formData)) {
            onClose();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="rounded bg-light p-4">
            <div className="mb-3">
                <label htmlFor="first_name" className="form-label">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Last Name:</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="specialization" className="form-label">Specialization:</label>
                <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="license_number" className="form-label">License Number:</label>
                <input
                    type="text"
                    id="license_number"
                    name="license_number"
                    value={formData.license_number}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <button type="submit" className="btn btn-success">Update</button>
        </form>
    );
};

export default UpdateDoctorForm;
