import React, { Component } from  'react'
import TodoItems from "./TodoItems" 
import Header from "./Header.js"
class Todo extends Component{
    state={
        todoItems:["waker up","brush your teeth","bath","gym","eat"],
        newTodo:""
    }
    handleChange=e=>{
        this.setState({newTodo:e.target.value})
       
    }
    handleSubmit=(e)=>{
e.preventDefault()
this.setState(()=>{
   let todoItems = this.state.todoItems.concat(this.state.newTodo)
    return{
       todoItems,
       newTodo:""
    }
})
console.log(this.state.todoItems)
    }
    render(){
        return(
            <div><Header title="My Todo Title" />
            <h1>Welcome to my todo App</h1>
            <TodoItems />
            <ul>  
        {this.state.todoItems.map(items=> <TodoItems individualItem = {items}/>)}
             </ul>
             <form onSubmit={this.handleSubmit}>
                 <label htmlfor="">Todo Items</label><br/>
                 <input type="text" name="todo-items" 
                 onChange={this.handleChange} 
                 value={this.state.newTodo}/>
                 <br/>
                 <button>Submit</button>
             </form>
            </div>
        )
    }
    
}
export default Todo;