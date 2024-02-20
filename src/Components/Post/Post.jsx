import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Post.css';

const Post = (props) => {
    const { name, userpic, registered, posttitle, readtime, picture } = props.post;
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
                        <p>{readtime} min read <button> <FontAwesomeIcon icon={faBookmark} /> </button> </p>
                    </div>
                </div>
                <h3 className='post-title'>{posttitle}</h3>
                <p className='post-tag'>#beginners  #programming</p>
                <button className='markasbtn'>Mark As Read</button>
            </div>

        </>

    );
};

export default Post;