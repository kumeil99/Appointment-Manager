import { useState, useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";
import { useNavigate } from "react-router-dom";

const CreateAppointment = () => {
  const { addAppointment } = useContext(AppointmentContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [client, setClient] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    await addAppointment({ title, date, client });

    navigate("/");
  };

  return (
  <div className="container">
    <h2>Add Appointment</h2>

    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        placeholder="Client"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />

      <button disabled={saving}>
        {saving ? "Saving..." : "Add Appointment"}
      </button>
    </form>
  </div>
);
};

export default CreateAppointment;
