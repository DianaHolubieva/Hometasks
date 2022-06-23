import {useEffect, useState} from "react";
import {User} from "../index";

function Users(){

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, []);

    const infoUser = (item) => {
        setUser(item);
    };

    return(<div>
        <p>user info</p>
        users.map((user, index)=><User
            key={index}
            item={user}
            infoUser={infoUser}
        />)
        <div>{user.username} {user.id} </div>}
        <div>{user.name}{user.email}{user.website}{user.address.street}</div>
    </div>);

}

export default Users;