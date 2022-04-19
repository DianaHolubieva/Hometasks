import React from 'react';
import userMessage from "./components/Chat/User/userMessage";
import myMessage from "./components/Chat/My/myMessage";

const App = () => {
  <>
  <userMessage name={'John'} message={'Does someone have docs?'} />
  <myMessage message={'Yes)'} />
  <myMessage message={'Good Day!'}/>
  <userMessage name={'Tom'} message={'I am curious too'}/>
  <myMessage message={'I share you this'}/>
  </>
};



export default App;
