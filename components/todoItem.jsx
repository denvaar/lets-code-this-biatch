import React from 'react';

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <p className={props.completed ? "strike" : ""} 
         onClick={()=>{return props.markComplete(props.index)}}>
        {props.text}
      </p>
    </div>
  );  
}
export default TodoItem;
