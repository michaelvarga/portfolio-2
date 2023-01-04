import React, { useState } from "react";
import "./index.scss";
import { TextField, Button, IconButton } from "@mui/material";
import { Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="fluid-container min-vh-100 d-flex align-items-center justify-content-center contact w-100 border border-secondary">
      <div className="border border-secondary">
        <h2>Shoot me a message!</h2>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <form className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <TextField
              name="name"
              value={name}
              label="Your Name"
              type="text"
              variant="standard"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              name="email"
              value={email}
              label="Email Address"
              type="email"
              variant="standard"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              name="message"
              value={message}
              label="Your Message"
              type="text"
              variant="standard"
              placeholder="Hi, we are looking for a developer for a product at Company X. When can you hop on a call to discuss this?"
              multiline
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </form>
        <div>
          <Button variant="outlined" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
