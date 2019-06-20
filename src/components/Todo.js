import React, { Component } from  'react'
import TodoItems from "./TodoItems" 
import Header from "./Header.js"
class Todo extends Component{
    render(){
        const todoItems =["waker up","brush your teeth","bath","gym","eat"]
        return(
            <div><Header title="My Todo Title" />
            <h1>Welcome to my todo App</h1>
            <TodoItems />
            <ul>  
        {todoItems.map(items=> <TodoItems individualItem = {items}/>)}
             </ul>
            </div>
        )
    }
}
export default Todo;