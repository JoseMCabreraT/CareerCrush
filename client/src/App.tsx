import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container pt-5">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
