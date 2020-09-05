import React from 'react';
import './Comments.css'

const Comments = (props) => {
    return (
        <div className= "comment">      
            <h3 className = "commenter"> {props.comment.name} : </h3>
            <p> {props.comment.body}</p>
        </div>
    );
};

export default Comments;