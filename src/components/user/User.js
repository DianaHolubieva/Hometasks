function User({item, inform}){
    return(
        <div>
            {item.id} {item.username}
            <button onClick = {() => {inform(item)}}>show All</button>
        </div>
    )
}

export default User;