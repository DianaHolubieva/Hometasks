fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
    return response.json();
    })
    .then(user => {
        const userDetails = document.createElement('div');
        userDetails.classList.add('usersDetails');
        for (const element of user) {
            const divUserDetails = document.createElement('div');
            divUserDetails.classList.add('divUserDetails');
            divUserDetails.innerHTML = `${element.id}, ${element.name}, ${element.username}, ${element.email}, ${element.address.street}, ${element.address.suite}, ${element.address.city}, ${element.address.zipcode}`;
            const buttPost = document.createElement('button');
            // buttPost.addEventListener('click', () => {
            //     fetch('https://jsonplaceholder.typicode.com/users/${user.id}/posts')
            //         .then(response => {
            //             return response.json();
            //         })
            //         .then(posts => {
            //             const divPosts = document.createElement('div');
            //             divPosts.classList.add('divPosts');
            //             for (const post of posts) {
            //                 const divPost = document.createElement('div');
            //                 divPost.classList.add('divUserDetails');
            //                 divPost.innerHTML = `<div>${post.title}</div>`;
            //                 divPosts.appendChild(divPost);
            //                 document.body.appendChild(divPosts);
            //
            //             }
            buttPost.innerHTML = `<a href="post-details.html">post of current user</a>`
            userDetails.appendChild(divUserDetails);
            userDetails.appendChild(buttPost);
            document.body.appendChild(userDetails);
        }
    });


