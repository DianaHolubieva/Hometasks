export class PostApiService {
    url = 'https://jsonplaceholder.typicode.com/posts';

    getPosts() {
        return fetch(this.url)
            .then(value => value.json());
    }

    getPost(id) {
        return fetch(this.url + '/' + id)
            .then(value => value.json());
    }


}