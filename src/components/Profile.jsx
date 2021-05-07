import "./Profile.scss";
import DefaultUser from "./../assets/img/user.jpg";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default (props) => (
  <div className="Profile">
    <div className="Photo">
      <img
        src={
          props.img
            ? `${process.env.PUBLIC_URL}/assets/img/users/` + props.img
            : DefaultUser
        }
        alt={props.name}
      />

      <div style={{ position: "absolute" }}>
        <CircularProgressbar
          className="Progrees"
          value={40}
          textForPercentage={null}
          strokeWidth={5}
        />
      </div>
    </div>
    <div className="Name">
      <h2>{props.name}</h2>
      <h4>{props.subtitle}</h4>
    </div>
  </div>
);
