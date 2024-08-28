import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { AddCate } from "../pages/AddCate";

export const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="add-category" element={<AddCate />} />
  </Routes>
);
