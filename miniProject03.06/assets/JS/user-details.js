fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
    return response.json();
    })
    .then(user =>{
        const userDetails = document.createElement('div');
        userDetails.classList.add('usersDetails');
        for (const element of user) {
                const divUserDetails = document.createElement('div');
                divUserDetails.classList.add('divUserDetails');
                divUserDetails.innerHTML = `${element.id}, ${element.name}, ${element.username}, ${element.email}, ${element.address.street}, ${element.address.suite}, ${element.address.city}, ${element.address.zipcode}`
                userDetails.appendChild(divUserDetails);
                document.body.appendChild(userDetails);
        }
    })