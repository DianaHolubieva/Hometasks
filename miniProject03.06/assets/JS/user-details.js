const user = JSON.parse(localStorage.getItem('currUser'));
const userCont = document.createElement('div');
userCont.classList.add('userCont')
user.innerHTML = `${user.name}, ${user.id}, ${user.username}, ${user.email}, ${user.address.street},${user.address.suite} ${user.address.city}, ${user.address.zipcode}, ${user.address.geo.lat} , ${user.address.geo.lat}, ${user.address.geo.lng}, ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}, ${user.phone}, ${user.website}`;

const butt = document.createElement('button');
butt.innerHTML = 'posts of user';
butt.onclick = function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => {
            return response.json();
        })
        .then(posts => {
            const postsCont = document.createElement('div');
            postsCont.classList.add('postsCont');
            for (const post of posts) {
                const postCont = document.createElement('div');
                postCont.classList.add('postCont');
                postCont.innerHTML = `${post.id}, ${post.name}, ${post.username}, ${post.email}, ${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}`;
                const buttPost = document.createElement('button');
                buttPost.innerHTML = `<a href="post-details.html">Details of this post</a>`;
                buttPost.onclick = function () {
                    localStorage.setItem('post', JSON.stringify(post));
                }
                userCont.append(postCont, buttPost);
                postsCont.append(postCont);
            }
            document.body.append(postsCont);
        })
}

userCont.append(postCont);
document.body.append(userCont);


