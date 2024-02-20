import { useEffect, useState } from 'react';
import './Blogs.css'
import Post from '../Post/Post';
import PropTypes from 'prop-types';


const Blogs = ({ markAsBtn }) => {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])
    return (
        <div>
            <h1>Blog:{blogs.length}</h1>
            {
                blogs.map(post => <Post
                    key={post.id}
                    post={post}
                    markAsBtn={markAsBtn}

                ></Post>)
            }

        </div>
    );
};
Blogs.propTypes = {
    blog: PropTypes.object,
    post: PropTypes.object,
    markAsBtn: PropTypes.func,

}

export default Blogs;