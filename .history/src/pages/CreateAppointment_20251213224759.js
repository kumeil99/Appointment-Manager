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

    await addAppointment({
      id: Date.now(),
      title,
      date,
      client,
    });

    setSaving(false);
    navigate("/"); // redirect to Home
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h2 className="text-2xl font-bold mb-4">Add Appointment</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />

        <label>Date</label>
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />

        <label>Client</label>
        <input
          type="text"
          required
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={saving}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {saving ? "Saving..." : "Add Appointment"}
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
