import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Admin components
import AdminLayout from './Admin/components/AdminLayout';
import AdminPatient from './Admin/components/Patient';
import AdminDoctor from './Admin/components/Doctor';
import AdminAppointment from './Admin/components/Appointment';
import AdminMedicalRecord from './Admin/components/MedicalRecord';
import RegisterForm from './Admin/components/RegisterForm';
import LoginForm from './Admin/components/LoginForm';

// Patient components
import PatientLayout from './Patient/components/PatientLayout';
import PatientPatient from './Patient/components/Patient';
import PatientDoctor from './Patient/components/Doctor';
import PatientAppointment from './Patient/components/Appointment';
import PatientMedicalRecord from './Patient/components/MedicalRecord';

// Doctor components
import DoctorLayout from './Doctor/components/DoctorLayout';
import DoctorPatient from './Doctor/components/Patient';
import DoctorDoctor from './Doctor/components/Doctor';
import DoctorAppointment from './Doctor/components/Appointment';
import DoctorMedicalRecord from './Doctor/components/MedicalRecord';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminPatient />} />
                        <Route path="home" element={<AdminPatient />} />
                        <Route path="manage/patients" element={<AdminPatient />} />
                        <Route path="manage/doctors" element={<AdminDoctor />} />
                        <Route path="manage/appointments" element={<AdminAppointment />} />
                        <Route path="manage/medicalrecords" element={<AdminMedicalRecord />} />
                        <Route path="register" element={<RegisterForm />} />
                        <Route path="login" element={<LoginForm />} />
                    </Route>
                </Routes>
                <Routes>
                    {/* Patient Routes */}
                    <Route path="/patient" element={<PatientLayout />}>
                        <Route index element={<PatientPatient />} />
                        <Route path="home" element={<PatientPatient />} />
                        <Route path="manage/patients" element={<PatientPatient />} />
                        <Route path="manage/doctors" element={<PatientDoctor />} />
                        <Route path="manage/appointments" element={<PatientAppointment />} />
                        <Route path="manage/medicalrecords" element={<PatientMedicalRecord />} />
                    </Route>
                </Routes>
                <Routes>
                    {/* Doctor Routes */}
                    <Route path="/doctor" element={<DoctorLayout />}>
                        <Route index element={<DoctorPatient />} />
                        <Route path="home" element={<DoctorPatient />} />
                        <Route path="manage/patients" element={<DoctorPatient />} />
                        <Route path="manage/doctors" element={<DoctorDoctor />} />
                        <Route path="manage/appointments" element={<DoctorAppointment />} />
                        <Route path="manage/medicalrecords" element={<DoctorMedicalRecord />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
