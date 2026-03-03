const Navbar = ({ setPage }) => {
  return (
    <div
      style={{
        padding: "10px",
        background: "#1e3a8a",
        color: "#fff",
        display: "flex",
        gap: "10px",
      }}
    >
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("create")}>Add Appointment</button>
    </div>
  );
};

export default Navbar;
