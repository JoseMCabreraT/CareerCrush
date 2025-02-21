import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container pt-5">
        <Outlet />
      </main>
      <footer className="text-center py-3">
        <p>Neff, Cabrera, Angulo, Moriasi ©</p>
      </footer>
    </div>
  );
}

export default App;
