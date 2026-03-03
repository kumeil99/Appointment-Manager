// src/services/appointmentService.js
let appointments = [
  { id: 1, title: "Doctor Visit", date: "2025-01-20", client: "Ali" },
  { id: 2, title: "Project Meeting", date: "2025-01-22", client: "Kumail" },
];

// simulate network delay
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getAppointments = async () => {
  await delay(300); // simulate fetch delay
  return [...appointments];
};

export const createAppointment = async (appointment) => {
  await delay(300);
  appointments.push(appointment);
  return appointment;
};

export const deleteAppointmentById = async (id) => {
  await delay(300);
  appointments = appointments.filter((a) => a.id !== id);
  return id;
};
