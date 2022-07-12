import React, {Component} from 'react';

class Post extends Component {


    constructor(props, context) {
        super(props, context);
        this.y = this.props.item;
    }

    render() {
        return (<div>
            {this.y.id} {this.y.title} {this.y.body}
        </div>);
    }
}

export default Post;