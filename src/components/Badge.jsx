import "./Badge.scss";
import React from "react";

export default (props) => (
  <div
    className="Badge"
    style={{
      backgroundColor: props.color || "#dc8383",
    }}
  >
    {props.number}
  </div>
);
