import { NavLink } from "react-router-dom";
import medical from "../images/medical.png";
import "../styles/headerlinks.css";
import "../styles/header.css";
import Appointment from "./Appointment";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClick = () => setShow(!show);
  const handleSubmit = (date) => {
    alert(`Appointment set`);
  };

  return (
    <container className="HeaderContainer">
      <container className="LeftContainer">
        <div className="Icon">
          <NavLink to="/home">
            <img className="IconImage" src={medical} />
          </NavLink>
          <NavLink to="/home" className="IconText">
            Clinic of Wonders
          </NavLink>
        </div>
        <div className="Appointment">
          <img
            className="AppointmentImage"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-clipboard-512.png"
          />
          <div className="AppointmentTab">
            <button className="AppointmentButton" onClick={handleClick}>
              Make an appointment
            </button>
            {show ? (
              <div className="AppointmentButtonTab">
                <Appointment />
                <button
                  className="AppointmentButton"
                  onClick={() => {
                    handleClick();
                    handleSubmit();
                  }}
                >
                  Set Appointment
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </container>
      <container className="Navigation">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "ActiveLink" : "HomeLink")}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "ActiveLink" : "ServicesLink"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive ? "ActiveLink" : "DoctorsLink"
          }
        >
          Doctors
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "ActiveLink" : "ContactLink"
          }
        >
          Contact
        </NavLink>
      </container>
    </container>
  );
}
