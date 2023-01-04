import React, { useState } from "react";
import "./index.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="fluid-container min-vh-100 d-flex align-items-center justify-content-center contact w-100">
      <div className="w-50">
        <h2>Shoot me a message!</h2>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <div>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Shoot</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
