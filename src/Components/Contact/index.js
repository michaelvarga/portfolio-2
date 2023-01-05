import React, { useState, useRef } from "react";
import "./index.scss";
import { TextField, Button, IconButton, Snackbar, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jrw286i",
        "template_qio5s1l",
        form.current,
        "MFKSSiazsIF-6DVJw"
      )
      .then(
        (result) => {
          setSuccess(true);
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log(error.text);
          setFailure(true);
        }
      );
  };

  const inputStyle = {
    "& .MuiInput-underline:before": { borderBottomColor: "#33173B" },
    "& .MuiInput-underline:after": { borderBottomColor: "#3626A7" },
  };

  return (
    <div className="fluid-container min-vh-100 d-flex align-items-center justify-content-center contact">
      <div className="m-5">
        <div className="w-100">
          <h2 className="mb-3">Shoot me a message!</h2>
          <p className="mb-5">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <form className="fluid-container" ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-sm-6">
              <TextField
                name="name"
                value={name}
                label="Your Name"
                type="text"
                variant="standard"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                className="w-100 mb-3"
                InputLabelProps={{ className: "input-labels" }}
                sx={inputStyle}
                required
              />
            </div>
            <div className="col-sm-6">
              <TextField
                name="email"
                value={email}
                label="Email Address"
                type="email"
                variant="standard"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-100 mb-3"
                InputLabelProps={{ className: "input-labels" }}
                sx={inputStyle}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <TextField
              name="message"
              value={message}
              label="Your Message"
              type="text"
              variant="standard"
              placeholder="Hi, we are looking for a developer for a product at Company X. When can you hop on a call to discuss this?"
              multiline
              rows={2}
              onChange={(e) => setMessage(e.target.value)}
              className=" w-100"
              InputLabelProps={{ className: "input-labels" }}
              sx={inputStyle}
              required
            />
            <Button
              variant="outlined"
              endIcon={<SendIcon />}
              className="mt-5 p-3 ps-5 pe-5 w-50 m-auto"
              style={{ color: "#3626A7", borderColor: "#3626A7" }}
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
        >
          <Alert
            onClose={() => setSuccess(false)}
            severity="success"
            variant="filled"
          >
            Email sent successfully
          </Alert>
        </Snackbar>
        <Snackbar
          open={failure}
          autoHideDuration={6000}
          onClose={() => setFailure(false)}
        >
          <Alert
            onClose={() => setFailure(false)}
            severity="error"
            variant="filled"
          >
            Something went wrong!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Contact;
