import React from "react";
import Layout from "./../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={"About us - Mangla"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contact-us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <h1>Mangla Agarbati Dhop Bati 🌿🕯️</h1>
            <b><hr /></b>
            <br />
            Welcome to Mangla Agarbati Dhop Bati, where the timeless art of incense-making meets modern craftsmanship to create an enchanting sensory experience.
            <br />
            🕯️ Crafted with Precision and Love 🕯️
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;