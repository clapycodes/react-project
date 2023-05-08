import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Column = ({ column, tasks }) => {
    return (
      <div className="column">
        <h3>{column.title}</h3>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <div
              className="task-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map(task => <Task key={task.id} task={task} />)}
              {provided.placeholder}
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index}/>
              ))}
            </div>
          )}
        </Droppable>
      </div>
    );
  };

export default Column;