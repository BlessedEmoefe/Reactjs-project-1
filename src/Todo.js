import React, { Component } from  'react'
import Header from "./Header.js"
class Todo extends Component{
    render(){
        return(
            <div><Header />
            <h1>Welcome to my todo App</h1>
            </div>
        )
    }
}
export default Todo;