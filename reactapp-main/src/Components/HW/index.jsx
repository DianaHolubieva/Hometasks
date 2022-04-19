import React, {useState} from 'react';
import image from './image/image.png';

function Content(props) {
    const {image} = props;
    const [image, setImage] = useState(image);
    const text = {
        span: 'Create an account',
        span: 'Create/login to an existing account to get started',
        span: 'An account is created with your email and a desired password',
    }
    return (
        <div>
            <img src={image}/>
            <p>{text}</p>
        </div>
    );
};

export default Content;