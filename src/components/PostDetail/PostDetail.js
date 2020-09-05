import React, { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import Comments from '../Comment/Comments';


const PostDetail = () => {
    const {id} = useParams();
    const [post , setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    } ,[])
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))

    }, [])
    return (
        <div >
        <div className="postStyle">
            <p className="userId">  {post.title}</p>
            <p>  {post.body}</p>
            
        </div>
         <div className = "comments">
         <h2 className="head">All Comments</h2>

{
                comments.map( comment => <Comments comment={ comment }></Comments>)
            }
         </div>
        </div>
    );
};

export default PostDetail;