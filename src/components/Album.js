import {useEffect, useState} from 'react';
import Todos from "./Todos";
import {Link} from "react-router-dom";

export default function Album({album}){
    return (<div>
        {album.title} - <span> <Link to={album.id.toString()}>todo </Link></span>
    </div>)

}