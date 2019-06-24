import React, { Component } from "react"

class Likes extends Component{
    state = {
        likes: 0
    }
    increaseLikes=()=>{
        this.setState(prevState=>{
            return{
                likes: prevState.likes + 1,
            }
        })
    }
    decreaseLikes=()=>{
        this.setState((prevState)=>{
return{
    likes:prevState.likes -1
}
        })
    }
    resetLikes=()=>{
        this.setState({likes : 0})
    }
    render(){
        return(
            <div>
                {this.props.}
                <h1>Welcome to my Likes Apps</h1>
                <h3>Likes:{this.state.likes}</h3>
                <button onClick={this.increaseLikes}>Like</button>
                <button onClick={this.decreaseLikes}>Unlike</button>
                <button onClick={this.resetLikes}>Reset</button>
            </div>
        )
    }
}
export default Likes;