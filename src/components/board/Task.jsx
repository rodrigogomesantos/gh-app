import "./Task.scss";

import React from "react";
import { Draggable } from "react-beautiful-dnd";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
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
              <p className="TaskDescription">{this.props.task.content}</p>
              <div className="TaskInfo">
                <img
                  src={
                    `${process.env.PUBLIC_URL}/assets/img/users/` +
                    this.props.task.authorImg
                  }
                  alt={this.props.task.author}
                />
                <p>{this.props.task.author}</p>
                <p>16 days ago</p>
              </div>
            </div>
            <div className="Footer">
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
        )}
      </Draggable>
    );
  }
}
