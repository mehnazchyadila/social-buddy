import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {userId  ,id  ,title , body} = props.post;
    
    return (
        <div className="postStyle">
            <h2> UserId : {userId}</h2>
            <h3> Id : {id}</h3>
            <p> Title : {title}</p>
            <p> Body : {body}</p>
            <button><Link to={`/post/${id}`}>Details</Link></button>
            
        </div>
    );
};

export default Post;