// This file will later talk to Laravel backend

export const getAppointments = () => {
  return Promise.resolve([
    {
      id: 1,
      title: "Doctor Visit",
      date: "2025-01-20",
      client: "Ali",
    },
    {
      id: 2,
      title: "Project Meeting",
      date: "2025-01-22",
      client: "Kumail",
    },
  ]);
};

export const createAppointment = (appointment) => {
  return Promise.resolve(appointment);
};

export const deleteAppointmentById = (id) => {
  return Promise.resolve(id);
};
