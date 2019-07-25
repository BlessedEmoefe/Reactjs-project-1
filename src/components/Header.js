import React from "react"
import {NavLink} from "react-router-dom"
import "../App.css"
import headerStyles from '../styles/header.module.css'



const Header=(props)=>{
    // console.log(headerStyles, 'gggggggg')
    return(
        <div className={headerStyles.headerContainer}>
        <h2>{props.title}</h2>
        <ul>
            <li><NavLink activeClassName="am-active" to="/"  exact>Todo App </NavLink></li>
            <li><NavLink activeClassName="am-active" to="/likesApp" >Likes App </NavLink></li>
            <li> <NavLink activeClassName="am-active" to="/localStorage" >Local Storage </NavLink></li>
        </ul>
        {props.name}
        
        
       

        </div>
    )
}
export default Header;