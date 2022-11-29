import { useState } from "react";
import "../styles/contactus.css";

export default function Contact() {
  const [message, setMessage] = useState();
  const handleSubmit = (event) => {
    alert(`Your message has been sent`);
  };

  return (
    <div className="ContactUs">
      <container className="ContactMainContainer">
        <div className="ImmediateAnswers">
          <p>If you need immediate answers, call us at:</p>{" "}
          <span className="number"> 987-654-3210</span>
        </div>
        <p className="SendUsAMessage">
          If you have questions, feel welcome to send us a message
        </p>
        <form className="ContactForm">
          <div className="MessageForm">
            <textarea
              placeholder="Your message here"
              type="text"
              className="Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit} className="MessageButton">
              Send message
            </button>
          </div>
        </form>
      </container>
    </div>
  );
}
