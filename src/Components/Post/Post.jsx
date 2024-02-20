import './Post.css';

const Post = (props) => {
    const { name, id, userpic, registered, readtime, picture } = props.post;
    console.log(props)
    return (
        <>
            <div className="post-container">
                <img className='post-photo' src={picture} alt="" />
                <div className='user-container'>
                    <div>
                        <img className='user-pic' src={userpic} alt="" />
                        <span className='name'>{name}</span>
                        <p className='post-date'>{registered}</p>
                    </div>
                    <div>
                        <p>{readtime} min read </p>
                    </div>
                </div>



            </div>

        </>

    );
};

export default Post;