const post = JSON.parse(localStorage.getItem('post'));
post.classList.add('post');
post.innerHTML = `${post.id}, ${post.id}`;

const postCont = document.createElement('div');

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
.then(response => {
    return response.json();
})
.then(mess => {
    const mesCont = document.createElement('div');
    mesCont.classList.add('mesCont');
    for(const mes of mess){
        const someMes = document.createElement('div');
        someMes.innerHTML = `${mes.id}, ${mes.name}, ${mes.email}`;
        mesCont.append(mes);
    }
    document.body.appendChild(mesCont);
})