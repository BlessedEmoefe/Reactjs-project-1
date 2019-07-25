import React from 'react'
import  todoItemsStyles from "../styles/todoItems.module.css"

const TodoItems = (props)=> {
  //destructuring props items
  const {individualItem, handleRemoveOneItem} = props
  return (
    // <h2>I render individual items</h2>
    
        <div className={todoItemsStyles.todoItems}>
          {individualItem}
          <button className={todoItemsStyles.removeButton} onClick={(e)=> {
            handleRemoveOneItem(individualItem)
          }}>Remove</button>
          
         
          
        </div>
      
  )
}
export default TodoItems;