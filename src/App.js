import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default App;
