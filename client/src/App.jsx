import { Outlet } from "react-router-dom";
import "flowbite";

import "./index.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/MEFooter/MEFooter";
// hello UNIVERSE!
function App() {
  return (
    <div className="bg-dark-blue text-tan font-sans leading-tight">
      <Header />
      <Nav />
      <Outlet className="container mx-auto px-4 py-8" />
      <Footer />
    </div>
  );
}

export default App;
