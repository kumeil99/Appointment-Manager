import { useState } from "react";
import Home from "./pages/Home";
import CreateAppointment from "./pages/CreateAppointment";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "create" && <CreateAppointment />}
    </div>
  );
}

export default App;
