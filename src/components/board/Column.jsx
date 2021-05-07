import "./Column.scss";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import Button from "@material-ui/core/Button";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }
}

export default class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <div className="ColumnHead">
              <h3 {...provided.dragHandleProps}>{this.props.column.title}</h3>
              <IconButton
                className="Rotate90 PrimaryTextColor"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
            <div className="Column">
              <Droppable droppableId={this.props.column.id} type="task">
                {(provided, snapshot) => (
                  <div
                    className="TaskList"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    <InnerList tasks={this.props.tasks} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                fullWidth="true"
              >
                + New Card
              </Button>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}
