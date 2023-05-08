import React from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
const TaskBoard = ({ data }) => {
    const [boardData, setBoardData] = useState(data);
    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;
      
        if (!destination) {
          return;
        }
      
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
      
        const column = boardData.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
      
        const newColumn = {
          ...column,
          taskIds: newTaskIds,
        };
      
        const newBoardData = {
          ...boardData,
          columns: {
            ...boardData.columns,
            [newColumn.id]: newColumn,
          },
        };
      
        setBoardData(newBoardData);
      };
    return (
        <DragDropContext>
        <div className='task-board'>
            {data.column0rder.map(columnId => {
                const column = data.columns[columnId];
                const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

                return <Column key={column.id} column={column} tasks={tasks} />;
            })}
        </div>
        </DragDropContext>
    );
};

export default TaskBoard;