import {useEffect, useState} from "@types/react";
import Post from "./Post";

export default function Posts ({id}){

    let[posts, setPosts] = useState([]);

    useEffect(() => {
        if (id) {
            fetch('https://jsonplaceholder.typicode.com/comments/' + id + '/posts')
                .then(value => value.json())
                .then(value => {
                    console.log(value)

                })
        }else {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(value => {
                    console.log(value)

                })
        }
    }, [id])

    return(
        <div>
            {
                posts.map(value => <Post post={value} key={value.id}/> )
            }
        </div>
    )
}