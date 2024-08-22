import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team"; // Check file name casing
import { Contact } from "./components/contact";
import { Login } from "./components/Login"; // Adjusted for named export
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import ForgotPassword from "./components/ForgotPassword";  // Import ForgotPassword component

import JsonData from "./data/data.json";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Header data={JsonData.Header} />
        <About data={JsonData.About} />
        <Testimonials data={JsonData.Testimonials} />
        <Team data={JsonData.Team} />
        <Contact data={JsonData.Contact} />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />, // Ensure correct export
  },
  {
    path: "/forgot-password", // Adding a route for Forgot Password
    element: <ForgotPassword />, // Make sure the ForgotPassword component is imported correctly
  }
]);

const App = () => {

  return <RouterProvider router={router} />;
};

export default App;
