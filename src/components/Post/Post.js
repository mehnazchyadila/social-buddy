import React from 'react';
import './Post.css'
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const {userId  ,id  ,title , body} = props.post;
    const history = useHistory();
    const handleClick = (postId) => {
        const url = `/post/${postId}`;
        history.push(url);
    }
    return (
        <div className="postStyle">
            <p className="userId"> {title}</p>
            
            <div className="style">
            <button className="button" onClick = {() => handleClick(id)}>See More</button>
            {/* <button className="button"><Link to={`/post/${id}`}>Details</Link></button> */}
            <p className="id">  {id}</p>
            </div>

            
        </div>
    );
};

export default Post;