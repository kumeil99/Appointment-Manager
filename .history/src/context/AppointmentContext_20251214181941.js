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

  useEffect(() => {
    getAppointments()
      .then((data) => setAppointments(data))
      .catch(() => setError("Failed to load appointments"))
      .finally(() => setLoading(false));
  }, []);

  const addAppointment = async (appointment) => {
    const saved = await createAppointment(appointment);
    setAppointments((prev) => [...prev, saved]);
  };

  const deleteAppointment = async (id) => {
    await deleteAppointmentById(id);
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AppointmentContext.Provider
      value={{ appointments, addAppointment, deleteAppointment, loading, error }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;
