const API_URL = "http://127.0.0.1:8000/api/appointments";

export const getAppointments = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const createAppointment = async (appointment) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment),
  });

  if (!res.ok) throw new Error("Failed to create");
  return res.json();
};

export const deleteAppointmentById = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
