import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import "../Styles/Contact.css"

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwBQwsBz19-rThPGAdQxfz5AguXtyGHW52MDsvKobT0JlDTcd4ZoHKTw9rPCHpOKbWX/exec";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Message", message);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        setMsg("Message sent successfully");
        setTimeout(function () {
          setMsg("");
        }, 5000);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.error("Error!", error.message));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <Layout title={"Contact us"}>
      <div className="Contact-container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Lucknow</div>
              <div className="text-two">UttarPradesh</div>
            </div>

            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+91 8005367606</div>
              
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">pranjalchaurasiya8574@gmail.com</div>
              </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              Ask your queries; we are happy to help you
              <br />
              In return, your smile is our achievement.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  name="Message"
                  id="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
            <div id="msg">{msg}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
