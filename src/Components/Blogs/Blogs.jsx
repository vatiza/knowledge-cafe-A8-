import { useEffect, useState } from 'react';
import './Blogs.css'
import Post from '../Post/Post';


const Blogs = () => {
    const [Blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <h1>Blog:{Blogs.length}</h1>
            {
                Blogs.map(post => <Post 
                    key={post.id}
                    post={post}
                    
                    ></Post>)
            }

        </div>
    );
};

export default Blogs;