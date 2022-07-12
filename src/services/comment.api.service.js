export class CommentApiService {
    url = 'https://jsonplaceholder.typicode.com/comments';

    getComments() {
        return fetch(this.url)
            .then(value => value.json());
    }

    getComment(id) {
        return fetch(this.url + '/' + id)
            .then(value => value.json());
    }


}