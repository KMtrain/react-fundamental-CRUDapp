import React from 'react';
import classes from "./PostItem.module.css"
import MyButton from './UI/button/MyButton';

function PostItem(props) {

    return (
        <div className={classes.post}>
            <div className="post_content">
                <strong>{props.number} {props.post_info.title} is prog language</strong>
                <div>{props.post_info.body}</div>
            </div>
            <MyButton onClick={() => props.remove(props.post_info)}>Delete</MyButton>
        </div>
    )
}

export default PostItem;
