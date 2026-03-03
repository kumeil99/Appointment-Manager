import { createContext, useState } from "react";

export const AppointmentContext = createContext();

const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: "Doctor Visit",
      date: "2025-01-20",
      client: "Ali"
    },
    {
      id: 2,
      title: "Project Meeting",
      date: "2025-01-22",
      client: "Kumail"
    }
  ]);

  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  const deleteAppointment = (id) => {
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
