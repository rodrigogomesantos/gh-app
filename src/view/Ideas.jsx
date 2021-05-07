import "./Ideas.scss";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Board from "../components/board/Board.jsx";

const users = [
  { name: "Jake", img: "1517421713742.jfif" },
  { name: "Jake", img: "1586463745239.jfif" },
  { name: "Jake", img: "1605012366704.jfif" },
];

const colorPalette = ["#FFAEBC", "#A0E7E5", "#B4F8C8", "#FBE7C6"];

export default (props) => (
  <div>
    <div className="Head">
      <h1>
        <FontAwesomeIcon
          icon={faLightbulb}
          style={{ fontSize: 20, marginBottom: 3 }}
        />{" "}
        Ideas
      </h1>
      <div className="RightGroup">
        <div className="BordUsers">
          {users.map(function (d, idx) {
            return (
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/users/` + d.img}
                alt={d.name}
              />
            );
          })}
        </div>
        <p className="SecundaryTextColor">+125 others</p>
        <IconButton
          className="Rotate90 PrimaryTextColor"
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
    </div>
    <Board></Board>
  </div>
);
