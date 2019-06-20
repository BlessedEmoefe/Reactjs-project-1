import React, { Component } from "react"
const TodoItems=(props)=>{
    return (
        <div>
        {/* <h2>I render individual todo items</h2> */}
        <li>{props.individualItem}</li>
        </div>
    )
}
export default TodoItems