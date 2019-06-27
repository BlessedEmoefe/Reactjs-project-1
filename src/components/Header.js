import React, { Component } from "react"
const Header=(props)=>{
    return(
        <div>
        <h2>{props.title}</h2>
        {props.name}
        </div>
    )
}
export default Header;