import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  const notify = () => {
    toast.success("Thanks for contacting us!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_3yszh3p", "template_z0okukb", form.current, {
        publicKey: "eQ4PlTR9ewmPn4GAK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="container-contact">
      <h1>Need any help!</h1>
      <p>
        Got a question or feedback? Reach out to us; we&apos;re here to help.
      </p>
      <div id="content">
        <div id="form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Josh Brolin"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="josh@brolin.com"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Message</label>
            <textarea
              placeholder="Enter your message here"
              rows={7}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div>
              <button id="btn" onClick={notify} type="submit" value="Send">
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
        <div id="banner">
          <div id="wrap">
            <Image
              id="taj"
              src=""
              width={1000}
              height={1000}
              alt="Picture of The Taj Mahal"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
