import Doctor from "../components/Doctor";
import DoctorsInfo from "../DataFiles/DoctorsInfo.json";
import "../styles/doctor.css";

export default function Doctors() {
  return (
    <div className="DoctorList">
      {DoctorsInfo.map((e) => {
        return <Doctor image={e.image} name={e.name} story={e.story} />;
      })}
    </div>
  );
}
