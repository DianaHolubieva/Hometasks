function character(props){
    let {id, name, status, species, gender, img} = props;
    return(
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={img} alt=''/>
        </div>
    )
}

export default character;