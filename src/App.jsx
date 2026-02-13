import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Test from "./pages/test";


function App() {
  const [count, setCount] = useState(0);
  
  return (
    
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>

    
  );
}

export default App;
