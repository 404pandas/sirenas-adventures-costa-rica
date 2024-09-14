import { useState } from "react";
import { Outlet } from "react-router-dom";
import "flowbite";

import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/MEFooter/MEFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
