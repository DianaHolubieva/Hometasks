function Character(props){
    let {name, desc, img} = props;
    return(
        <div>
        <h2>{name}</h2>
        <p>{desc}</p>
         <img src={img} alt=''/>
        </div>
    )
}

export default Character;