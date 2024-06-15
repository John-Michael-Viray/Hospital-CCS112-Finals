import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            <button className="toggle-button" onClick={toggleSidebar}>
                <div className={`bar ${isSidebarVisible ? 'bar1' : ''}`}></div>
                <div className={`bar ${isSidebarVisible ? 'bar2' : ''}`}></div>
                <div className={`bar ${isSidebarVisible ? 'bar3' : ''}`}></div>
            </button>
            <nav className={`sidebar bg-primary ${isSidebarVisible ? 'visible' : 'hidden'}`}>
                <div className="sidebar-container">
                    <NavLink to="/doctor/manage/patients" className="sidebar-link">Patients</NavLink>
                    <NavLink to="/doctor/manage/doctors" className="sidebar-link">Doctors</NavLink>
                    <NavLink to="/doctor/manage/appointments" className="sidebar-link">Appointments</NavLink>
                    <NavLink to="/doctor/manage/medicalrecords" className="sidebar-link">Medical Records</NavLink>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
