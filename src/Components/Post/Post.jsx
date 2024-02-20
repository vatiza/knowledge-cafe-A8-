import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Post.css';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Post = ({ post, markAsBtn, manageBookmark }) => {
    // eslint-disable-next-line react/prop-types
    const { name, userpic, id, registered, posttitle, readtime, picture } = post;
    const notifyBookmark = () => toast.success('Successfully added bookmark!');
    const notifyRead = () => toast.success('Thanks to Read !');

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
                        <p>{readtime} min read <button onClick={() => {
                            manageBookmark(post)
                            notifyBookmark()
                        }}> <FontAwesomeIcon icon={faBookmark} /> </button> </p>
                    </div>
                </div>
                <h3 className='post-title'>{posttitle}</h3>
                <p className='post-tag'>#beginners  #programming</p>
                <button
                    onClick={() => {
                        markAsBtn(id, readtime)
                        notifyRead()

                    }}
                    className='markasbtn'>Mark As Read</button>
                <Toaster />
            </div>


        </>

    );
};
Post.PropTypes = {
    manageBookmark: PropTypes.func,
    post: PropTypes.object,
    markAsBtn: PropTypes.func,
}

export default Post;