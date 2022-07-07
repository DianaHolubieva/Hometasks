import {  useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Post from "../components/Post";

export default function Posts(){
    let {id} = useParams();

    return (<div>
        <Posts id={id}/>
    </div>)
}