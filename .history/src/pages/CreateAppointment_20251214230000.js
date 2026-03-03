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
