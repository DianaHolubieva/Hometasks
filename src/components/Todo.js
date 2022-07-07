import {useEffect, useState} from 'react';
import Todos from "./Todos";
import {Link} from "react-router-dom";

export default function Todo({todo}){
    return (<div>
        {todo.title} - <span> <Link to={todo.id.toString()}>todo </Link></span>
    </div>)

}