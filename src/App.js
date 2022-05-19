import "./App.scss";
import { Authentication, Dashboard } from "./modules";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-section">
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/pixil-dashboard" element={<Dashboard />} />
      </Routes>

      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
