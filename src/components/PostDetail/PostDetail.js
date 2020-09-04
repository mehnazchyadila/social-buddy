import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {id} = useParams();
    const [post , setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    } ,[])
    return (
        <div>
            <h1>This is post details Page {id} </h1>
            <h3> Id : {post.id}</h3>
            <p> Title : {post.title}</p>
            <p> Body : {post.body}</p>
        </div>
    );
};

export default PostDetail;