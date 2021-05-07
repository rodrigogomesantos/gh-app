import "./Task.scss";

import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Task(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          className="Task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          aria-roledescription="Press space bar to lift the task"
        >
          <div>
            <p className="TaskDescription">{props.task.content}</p>
            <div className="TaskInfo">
              <img
                src={
                  `${process.env.PUBLIC_URL}/assets/img/users/` +
                  props.task.authorImg
                }
                alt={props.task.author}
              />
              <p>{props.task.author}</p>
              <p>16 days ago</p>
            </div>
          </div>
          <div className="Footer">
            <IconButton
              className="Rotate90 PrimaryTextColor"
              aria-label="display more actions"
              aria-controls="long-menu"
              aria-haspopup="true"
              edge="end"
              color="inherit"
              onClick={handleClick}
            >
              <MoreIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Duplicate</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
          </div>
        </div>
      )}
    </Draggable>
  );
}
