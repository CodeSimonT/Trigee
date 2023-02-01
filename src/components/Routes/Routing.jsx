import { WhoAreWe, Mission, History, Vision, Donate, Home } from "./index";
import { Route, Routes, Navigate } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/Trigee/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/WhoAreWe" element={<WhoAreWe />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Vision" element={<Vision />} />
        <Route path="/History" element={<History />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </div>
  );
};

export default Routing;
