import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const Home = () => {
  const { appointments, loading, error, deleteAppointment } =
    useContext(AppointmentContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Appointments</h2>
      <h4
      {appointments.map((a) => (
        <div key={a.id}>
          <strong>{a.title}</strong> – {a.client} – {a.date}
          <button onClick={() => deleteAppointment(a.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
