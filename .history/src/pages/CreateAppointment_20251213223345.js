import { useState, useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const CreateAppointment = () => {
  const { addAppointment } = useContext(AppointmentContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [client, setClient] = useState("");
  const [saving, setSaving] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setSaving(true);

  await addAppointment({
    id: Date.now(),
    title,
    date,
    client,
  });

  setSaving(false);
  navigate("./");
};


  return (
    <div className="container">
      <h2>Add Appointment</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Date</label>
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Client</label>
        <input
          type="text"
          required
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
