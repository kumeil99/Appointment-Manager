import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const Home = () => {
  const { appointments, deleteAppointment } = useContext(AppointmentContext);

  return (
    <div className="container">
      <h2>Appointments</h2>

      {appointments.map((appt) => (
        <div className="card" key={appt.id}>
          <h3>{appt.title}</h3>
          <p><strong>Date:</strong> {appt.date}</p>
          <p><strong>Client:</strong> {appt.client}</p>

          <button
            className="delete-btn"
            onClick={() => deleteAppointment(appt.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
