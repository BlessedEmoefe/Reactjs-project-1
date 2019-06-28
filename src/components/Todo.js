import React, { Component } from "react";
import TodoItems from "./TodoItems";
import Header from "./Header.js";
// import LocalStorage from "./LocalStorage";

class Todo extends Component {
  state = {
    todoItems: [],
    newTodo: ""
  };
  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };
  
  
  handleSubmit = e => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        todoItems: [...prevState.todoItems, this.state.newTodo],
        newTodo: ""
      };
    });
    console.log(this.state.todoItems);
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems);
      localStorage.setItem("todoItems", jsonState)
    }

  }
  componentDidMount(){
    const itemsFromLocalStorage = localStorage.getItem("todoItems")
    const todoItems=JSON.parse(itemsFromLocalStorage)
    

    if(todoItems){
      this.setState(()=>({
        todoItems //since the key and the value are the same you write only one "todoItems"
      })) 
    }
  }


  render() {

    return (
      <div>
        <Header title="My Todo Title" />
        <h1>Welcome to my todo App</h1>
        <TodoItems />
        <ul>
          {this.state.todoItems.map(items => (
            <TodoItems individualItem={items} />
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlfor="">Todo Items</label>
          <br />
          <input
            type="text"
            name="todo-items"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Todo;
