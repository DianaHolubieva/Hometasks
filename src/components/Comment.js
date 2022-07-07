import {useEffect, useState} from 'react';
import Todos from "./Todos";
import {Link} from "react-router-dom";

export default function Comment({comment}){
    return (<div>
        {comment.title} - <span> <Link to={comment.id.toString()}>todo </Link></span>
    </div>)

}