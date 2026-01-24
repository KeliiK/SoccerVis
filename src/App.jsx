import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
