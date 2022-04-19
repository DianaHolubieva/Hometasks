import React, { Component } from 'react';
import UsersListItem1 from './UsersListItem1';


const usersDB = [
  { id: 1, name: 'Anna', surname: 'Gil', imgSrc: 'https://lyricstranslate.com/files/styles/large/public/anna-semenovich-322639l.jpg?itok=a86Parvv' },
  { id: 2, name: 'Stefan', surname:'Wolf', imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafigTZt3XQKZzFWZ2dBmsZaKD3QxTC7KJKg&usqp=CAU' },
  { id: 3, name: 'William', surname:'Blanco', imgSrc:'https://pbs.twimg.com/profile_images/1002362614582673408/XpDkcI3I_400x400.jpg' },
  { id: 4, name: 'Liam', surname:'Santos', imgSrc:'https://www.liampayneofficial.com/wp-content/uploads/2021/08/sunshine.jpg' },
  { id: 5, name: 'Aurora', surname:'Diez', imgSrc:'https://zvuch.com/img/collections/316449_large.jpg' },
];

class UsersList1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersDB.map((u) => ({
        ...u,
      })),
    };
  }

  mapUsers = (u, index) => {
    const { id } = u;
    const del = () => {
      const users2 = [...this.state.users];
      users2.splice(index, 1);
      this.setState({ users: users2 });
    };

    return <UsersListItem1 key={id} user={u} deleteHandler={del} />;
  };
  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUsers)}</ul>;
  }
}

export default UsersList1;