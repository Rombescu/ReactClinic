import { Link } from "react-router-dom";
import "../index.css";

export default function Header() {
  return (
    <container className="HeaderContainer">
      <container className="LeftContainer">
        <div className="Icon">
          <img
            className="IconImage"
            src="https://media.istockphoto.com/id/1004243378/vector/caduceus-health-symbol-asclepiuss-wand-icon-black-color-illustration-flat-style-simple-image.jpg?s=612x612&w=0&k=20&c=Mymt2MH3jtAIhYXUBfbm75l0bJfQdYTd6FBeaWa4vXU="
          />
          <a>Clinic of Wonders</a>
        </div>
        <div className="Appointment">
          <img
            className="AppointmentImage"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-clipboard-512.png"
          />
          <a>Make an appointment</a>
        </div>
      </container>
      <container className="Navigation">
        <Link to="/services" className="ServicesLink">
          Services
        </Link>
        <Link to="/departments" className="DepartmentsLink">
          Departments
        </Link>
        <Link to="/contactus" className="ContactUsLink">
          Contact us
        </Link>
      </container>
    </container>
  );
}
