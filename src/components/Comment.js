import React, {Component} from 'react';

class Comment extends Component {


    constructor(props, context) {
        super(props, context);
        this.x = this.props.item;
    }

    render() {
        return (<div>
            {this.x.id} {this.x.name}
        </div>);
    }
}

export default Comment;