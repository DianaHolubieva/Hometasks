import React from 'react';
import styles from './UsersListItem1.module.css';

function UsersListItem1(props) {
  const {
    user: { name, surname, imgSrc },
    deleteHandler,
  } = props;

  return (
    <li>
      <div>{name} {surname}</div>
      <div>
        <img src={(imgSrc)} />
      </div>
      <button onClick={deleteHandler}>Del</button>
    </li>
  );
}

export default UsersListItem1;