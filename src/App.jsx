import { RouterProvider } from 'react-router-dom';
import { router } from '../router';
import React from "react";
import { useState,useEffect } from "react";
import Home from "./components/home";
import Preloader from "./components/preloader/index";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
  <div>
  {loading ? (
    <Preloader />
  ) : (
    <Home />,
  < RouterProvider router={router} />
  )}
    </div>
)}
export default App;
