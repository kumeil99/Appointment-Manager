const Navbar = ({ setPage }) => {
  return (
    <div className="navbar">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("create")}>Add Appointment</button>
    </div>
  );
};

export default Navbar;
