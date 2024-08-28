import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ClientRoutes } from "./routes/clientRoute";
import {  AdminRoutes } from "./routes/adminRoute";

function App(props) {
  return (
    <Routes>
      <Route path="/*" element={<ClientRoutes />} />
      <Route path="admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
