import React, { Component } from 'react';
import left_arrow from '../left_arrow.png';
import right_arrow from '../right_arrow.png';


class Slider extends Component {
    constructor(props) {
        super(props);
    }
        render(){
            const { next, prev } = this.props;
        return (
            <div>
                <button onClick={prev} path={left_arrow} />
                <button onClick={next} path={right_arrow} />
            </div>
        );
    }
};



export default Slider;