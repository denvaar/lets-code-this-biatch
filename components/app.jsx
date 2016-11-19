import React, { Component } from 'react';
import pusheenWritingImage from '../writing.png';
import pusheenCoolImage from '../done.png';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nextIndex: 0,
      typing: false,
      items: []
    };
    this.createTodoItem = this.createTodoItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markComplete = this.markComplete.bind(this);
  }

  markComplete(index) {
    let todoItem = this.state.items.find(item => {
      return item.index === index;
    });
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        {...todoItem, completed: !todoItem.completed},
        ...this.state.items.slice(index + 1)
      ]
    });
  }

  removeItem(index) {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  }

  createTodoItem() {
    this.setState({
      items: [
        ...this.state.items,
        {
          index: this.state.nextIndex,
          completed: false,
          text: this.refs.input.value,
          removeItem: this.removeItem,
          markComplete: this.markComplete
        }
      ],
      nextIndex: this.state.nextIndex + 1
    });
    this.refs.input.value = "";
    this.refs.input.focus();
  }

  handleInput() {
    this.setState({
      typing: this.refs.input.value.length > 0
    });
  }


  render() {
    let todoItems = this.state.items.map((item, index) => {
      return (<TodoItem key={index} {...item} />);
    });
   
    let imageToShow = this.state.typing ? pusheenWritingImage : pusheenCoolImage;

    return (
      <div className="center">
        <h3>"Let's Code this Biotch..."</h3>
        <div className="image-container">
          <img className="pusheen-image" src={imageToShow}></img>
        </div>
        <div className="todo-container">
          {todoItems}
        </div>
        <input onKeyUp={this.handleInput} placeholder="Add item to list..." ref="input" className="todo-create"></input>
        <button type="submit" onClick={this.createTodoItem}>Add</button>
      </div>
    );
  }

}


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

