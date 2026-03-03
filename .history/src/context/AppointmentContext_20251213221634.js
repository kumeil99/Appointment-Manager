import { createContext, useEffect, useState } from "react";
import {
  getAppointments,
  createAppointment,
  deleteAppointmentById,
} from "../services/appointmentService";

export const AppointmentContext = createContext();

const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments().then((data) => setAppointments(data)
);
  }, []);

  const addAppointment = async (appointment) => {
    const saved = await createAppointment(appointment);
    setAppointments((prev) => [...prev, saved]);
  };

  const deleteAppointment = async (id) => {
    await deleteAppointmentById(id);
    setAppointments((prev) =>
      prev.filter((appt) => appt.id !== id)
    );
  };

  return (
    <AppointmentContext.Provider
      value={{ appointments, addAppointment, deleteAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;
