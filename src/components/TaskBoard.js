import React from 'react';
import Colmun from './Column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TaskBoard = ({ data }) => {
    return (
        <DragDropContext>
        <div className='task-board'>
            {data.column0rder.map(columnId => {
                const column = data.comlumns[columnId];
                const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

                return <Column key={column.id} column={column} tasks={tasks} />;
            })}
        </div>
        </DragDropContext>
    );
};

export default TaskBoard;