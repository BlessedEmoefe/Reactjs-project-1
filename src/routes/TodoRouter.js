import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Todo from "../components/Todo"
import Likes from "../components/Likes"
import LocalStorage from '../components/LocalStorage';
import NotFoundPage from "../components/NotFoundPage"

const TodoRouter =()=>(
    <BrowserRouter>
    <Switch>
    <Route path="/" component={Todo} exact="true"/>
    <Route path="/likesApp" component={Likes} />
    <Route path="/localStorage" component={LocalStorage}/>
    <Route component={NotFoundPage} />
    </Switch>
    </BrowserRouter>
)
export default TodoRouter;