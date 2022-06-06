const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        const wraper = document.createElement('div');
        wraper.classList.add('wraper');
        for (const user of users) {
            const userCard = document.createElement('div');
            userCard.classList.add('user');
            const butt = document.createElement('button');
            butt.innerHTML = `<a href="user-details.html">Click me</a>`
            userCard.innerHTML = `
                    <div>${user.id}, ${user.name}<div>
                    `;

            wraper.appendChild(userCard);
            wraper.appendChild(butt);
            document.body.appendChild(wraper);
        }
    });












