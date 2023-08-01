import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Shard/Navbar";
import Footer from "./Shard/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="md:min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
