//Todo
import React, {Component} from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import todoStyles from "../styles/todo.module.css"


class Todo extends Component {
  state = {
   todoItems: [],
   //display and add to array
   newTodo: '',
  }

  componentDidUpdate (prevProps, prevState){
     if(prevState.todoItems.length !== this.state.todoItems.length){
       const jsonState = JSON.stringify(this.state.todoItems)
       localStorage.setItem('todoItems', jsonState)
     }
  }

  componentDidMount(){
     const itemsFromLocalStorage = localStorage.getItem("todoItems")
     const todoItems = JSON.parse(itemsFromLocalStorage)

     if(todoItems){
      this.setState(()=>({
        todoItems
       }))
    }
     
  }

  handleRemoveOneItem = (itemToBeRemoved) => {
      this.setState((prevState) => ({
        todoItems: prevState.todoItems.filter(todoItem =>todoItem !== itemToBeRemoved)
      }))
  }
    
  handleRemoveAllItems = () => {
    console.log('removeAllItems')
  }

                                                            
  handleChange = (e) =>{
  this.setState({newTodo:e.target.value})
 }

  handleSubmit = (e) =>{

    const duplicateItem = this.state.todoItems.filter(todoItem=>{
      if(isNaN(todoItem)){
        return todoItem.toUpperCase() === this.state.newTodo.toUpperCase();
      }else{
        return todoItem ===this.state.newTodo;
      }
    });


    if(this.state.newTodo && duplicateItem.length===0){
      
      this.setState((prevState)=>{
        return {
          todoItems: [...prevState.todoItems, this.state.newTodo],
          newTodo: ''
        }
      })
    }


    
    e.preventDefault()
    console.log(this.state.newTodo)
  }

  RemoveAllItems=()=>{
    this.setState(prevState=>({
      todoItems:[]
    }))
  }

  render(){
   const {todoItems,newTodo}=this.state
    return (
      <div className={todoStyles.container}>
      <Header style={{border:"1px solid "}} title='GOLDEN GOALS'/>
      
      <h1 className={todoStyles.title}>WELCOME HERE</h1>


       <div className={todoStyles.wrapper}>
        <div className={todoStyles.forms}>
        <form onSubmit={this.handleSubmit}>
          {/* <h3><label>Todo Items</label></h3><br/> */}
          <input type="text" value={this.state.newTodo} onChange={this.handleChange} placeholder="Write Down Your Goals"/><br/>
          <button>Submit</button>
          
        </form>
        </div>

        <div className={todoStyles.cover}>
        <button className={todoStyles.removeAllButton} onClick={this.RemoveAllItems} style={{display: todoItems.length !==0?" block" :"none"}}>Remove All</button>
        
        {todoItems.map(item=>(<TodoItems key={item} handleRemoveOneItem={this.handleRemoveOneItem} individualItem={item}/>) )}
        </div>

        </div>
      </div>
    )
  }
}
export default Todo;