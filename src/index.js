import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Todo from "./components/Todo"
import TodoItems from "./components/TodoItems"
import Likes from "./components/Likes"
import LocalStorage from "./components/LocalStorage"

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);
