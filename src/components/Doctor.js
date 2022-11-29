import "../styles/doctor.css";

export default function Doctor(props) {
  return (
    <div className="Doctor">
      <img src={props.image} alt="DoctorImage" className="DoctorImage" />
      <div className="NameAndStory">
        <p>{props.name}</p>
        <p>{props.story}</p>
      </div>
    </div>
  );
}
