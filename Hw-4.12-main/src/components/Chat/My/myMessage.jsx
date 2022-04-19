import React from 'react';

function myMessage(props) {
  const {
    message,
  } = props;

  return (
    <li>
    <span>{message}</span>
    </li>
  );
}

export default myMessage;