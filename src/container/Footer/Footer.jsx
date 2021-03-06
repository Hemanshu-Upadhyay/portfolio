import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import Axios from "axios";
import FileDownload from "js-file-download";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [download, setdownload] = useState(false);
  const [error, setError] = useState(false);

  const downloadResume = (e) => {
    setdownload(true);
    e.preventDefault();
    Axios({
      url: "https://resumeserver.herokuapp.com/downloadResume",
      method: "GET",
      responseType: "blob",
    })
      .then((res) => {
        console.log(res.data);
        FileDownload(res.data, "Hemanshu_Upadhyay_Resume.pdf");
        setdownload(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };
    if (formData.username === "") {
      alert("Please fill the name field");
      setLoading(false);
    }
    if (formData.email === "") {
      alert("Please fill the email field");
      setLoading(false);
    }
    if (formData.message === "") {
      alert("Please fill the messege field");
      setLoading(false);
    } else {
      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:upadhyayhri@gmail.com" className="p-text">
            upadhyayhri@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 9574798183" className="p-text">
            +91 9574798183
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a onClick={downloadResume} className="p-text">
            {download && !error
              ? "Downloading..."
              : "Download Resume" && error
              ? "Sorry an Error occured Please try again later"
              : "Download Resume"}
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch! I'll connect With You soon ;)
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
