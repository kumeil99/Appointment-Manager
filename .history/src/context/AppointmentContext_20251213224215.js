import { createContext, useEffect, useState } from "react";
import {
  getAppointments,
  createAppointment,
  deleteAppointmentById,
} from "../services/appointmentService";

export const AppointmentContext = createContext();

const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch appointments on app load
  useEffect(() => {
    getAppointments()
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load appointments");
        setLoading(false);
      });
  }, []);


const createAppointment = async (appointment) => {
  const res = await fetch("http://localhost:8000/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment),
  });
  return res.json(); // <- important
};


  // Add appointment
  const addAppointment = async (appointment) => {
    const saved = await createAppointment(appointment);
    setAppointments((prev) => [...prev, saved]);
  };

  

  // Delete appointment
  const deleteAppointment = async (id) => {
    await deleteAppointmentById(id);
    setAppointments((prev) =>
      prev.filter((appt) => appt.id !== id)
    );
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        deleteAppointment,
        loading,
        error,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;
