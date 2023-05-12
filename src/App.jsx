import React from "react";
import Hero from "./components/Hero";
import "./App.css";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Plans from "./components/Plans";
import Testemonials from "./components/Testemonials";
import Join from "./components/Join";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testemonials />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
