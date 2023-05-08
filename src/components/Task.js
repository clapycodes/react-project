import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div className='task'
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps} >
                    {task.content}
                    {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index}/>
                    ))}
                </div>
            )}
        </Draggable>
    );
};

export default Task;