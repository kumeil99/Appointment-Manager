import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const Home = () => {
  const { appointments, loading, error, deleteAppointment } =
    useContext(AppointmentContext);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error)
    return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto max-w-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>

      {appointments.length === 0 && <p>No appointments yet.</p>}

      {appointments.map((appt) => (
        <div
          key={appt.id}
          className="border p-4 rounded mb-4 flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold">{appt.title}</h3>
            <p>{appt.client}</p>
            <p>{appt.date}</p>
          </div>
          <button
            onClick={() => deleteAppointment(appt.id)}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
