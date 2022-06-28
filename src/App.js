import Users from "./components/users/Users";
import {useState} from "react";
import {getPostComments} from "./services";

export default function App() {

  let [comments, setComments] = useState([]);

  const getPostId = (id) => {
    getPostComments(id).then(({data}) => setComments([...data]));

  }
  return (<div>

    <h1>posts of choosen User</h1>
    {comments.map(value => <div>{value.body}</div>)

    }


    {<Users />
      /*getUserId={getUserId}/>*/}


  </div>);
}