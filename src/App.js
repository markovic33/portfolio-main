import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="text-black from-gray-900 to-blue-500 bg-no-repeat bg-cover overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Services />
      <Contact />
      <div className=""></div>
    </div>
  );
};

export default App;
