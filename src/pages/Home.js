import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const Home = () => {
  const { appointments, loading, error, deleteAppointment } =
    useContext(AppointmentContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
  <div className="container">
    <h2>Appointments</h2>
    <h4>Total: {appointments.length}</h4>

    {appointments.map((a) => (
      <div key={a.id} className="appointment">
        <strong>{a.title}</strong>
        <div>{a.client}</div>
        <div>{a.date}</div>
        <button onClick={() => deleteAppointment(a.id)}>Delete</button>
      </div>
    ))}
  </div>
);

};

export default Home;
