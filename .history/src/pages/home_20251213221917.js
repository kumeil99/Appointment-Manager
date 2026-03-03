import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const Home = () => {
  const { appointments, loading, error, deleteAppointment } =
    useContext(AppointmentContext);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div>
      <h2>Appointments</h2>

      {appointments.length === 0 && <p>No appointments yet.</p>}

      {appointments.map((appt) => (
        <div key={appt.id} className="appointment">
          <h3>{appt.title}</h3>
          <p>{appt.client}</p>
          <p>{appt.date}</p>
          <button onClick={() => deleteAppointment(appt.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
