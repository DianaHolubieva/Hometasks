import React from 'react';

function userMessage(props) {
  const {
    user: { name, surname, imgSrc },
    message,
  } = props;

  return (
    <li>
        <div>{name}</div>
        <span>{message}</span>
    </li>
  );
}

export default userMessage;