import React from "react";
import BackgroundLogo from "./components/background-logo.jsx";
import Layout from "./components/layout.jsx";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Features from "./components/features.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <div>
      <Layout>
        <Navbar />

        <Hero />

        <Features />

        <Footer />
      </Layout>
    </div>
  );
};

export default App;
