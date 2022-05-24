import "./App.scss";
import { Authentication, Dashboard } from "./modules";
import { Routes, Route } from "react-router-dom";
import { Usecontext } from "./context/usecontext";

function App() {
  return (
    <div className="main-section">
      
      <Usecontext>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/pixil/:id" element={<Dashboard />} />
        </Routes>
      </Usecontext>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
