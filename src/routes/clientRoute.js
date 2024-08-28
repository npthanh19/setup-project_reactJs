import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";

export const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="profile" element={<ProductPage />} />
    </Routes>
  );
};
