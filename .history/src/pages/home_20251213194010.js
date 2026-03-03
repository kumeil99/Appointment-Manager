import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const Home = () => {
  const { appointments, deleteAppointment } = useContext(AppointmentContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Appointments</h2>

      {appointments.map((appt) => (
        <div
          key={appt.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{appt.title}</h3>
          <p>Date: {appt.date}</p>
          <p>Client: {appt.client}</p>

          <button onClick={() => deleteAppointment(appt.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
