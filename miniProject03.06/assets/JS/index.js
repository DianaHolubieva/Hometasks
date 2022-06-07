fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        const wraper = document.createElement('div');
        wraper.classList.add('wraper');
        for (const user of users) {
            const userCard = document.createElement('div');
            userCard.classList.add('user');
            userCard.innerHTML = `${user.name}, ${user.id}`;
            const butt = document.createElement('button');
            butt.innerHTML = `<a href="user-details.html">more inf </a>`
            butt.onclick = function (){
                localStorage.setItem('currUser', JSON.stringify(user));
            }

            wraper.appendChild(userCard);
            wraper.appendChild(butt);
        } document.body.appendChild(wraper);
    });












