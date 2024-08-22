import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Login } from "./components/Login";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
          <Route path="about" element={<About />} />
          <Route path="Testimonials" element={<Testimonials />} />
          <Route path="Team" element={<Team />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        

    
    </>
  )
);

export default router;
