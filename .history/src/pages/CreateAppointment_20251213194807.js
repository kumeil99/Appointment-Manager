import { useState, useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const CreateAppointment = () => {
  const { addAppointment } = useContext(AppointmentContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [client, setClient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: Date.now(),
      title,
      date,
      client,
    };

    addAppointment(newAppointment);

    // reset form
    setTitle("");
    setDate("");
    setClient("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Appointment</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label><br />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Date</label><br />
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>Client</label><br />
          <input
            type="text"
            required
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </div>

        <button style={{ marginTop: "10px" }}>
          Add Appointment
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
