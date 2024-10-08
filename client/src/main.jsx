// external imports
import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// local imports
import App from "./App.jsx";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Adventures from "./pages/Adventures";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Education from "./pages/Education";
import Equipment from "./pages/Equipment";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/adventures", element: <Adventures /> },
      { path: "/contact", element: <Contact /> },
      { path: "/destinations", element: <Destinations /> },
      { path: "/education", element: <Education /> },
      { path: "/equipment", element: <Equipment /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
