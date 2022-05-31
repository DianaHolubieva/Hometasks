// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(asw => { return asw.json(); })
    .then(cards => {const divForCards = document.createElement('div');
    for (const card of cards){
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.innerHTML = `<h1>${card.id}</h1>
                             <title>${card.title}</title>
                             <p>${card.body}</p>`;
        divForCards.appendChild(divCard);
    }});


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(asw => {return asw.json();})
    .then(comments => {const divForComments = document.createElement('div');
    for (const comment of comments){
        let divComment = document.createElement('div');
        divComment.classList.add('comment');
        divComment.innerHTML = `<p>${comment.id}</p>
                                <p>${comment.name}</p>
                                <p>${comment.email}</p>
                                <p>${comment.body}</p>`;
        divForComments.appendChild(divComment);
    }});
