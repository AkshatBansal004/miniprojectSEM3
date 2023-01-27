import "./TripStyles.css";
import Trip from "./Trip";
function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p4>{props.text}</p4>
    </div>
  );
}
export default TripData;
