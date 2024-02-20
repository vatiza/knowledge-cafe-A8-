import './Bookmarks.css'
import PropTypes from 'prop-types';

const Bookmark = ({ newreadTime }) => {
    console.log(newreadTime);
    return (
        <>
            <div className="bookmark-time-container">
                <h1>Spent time on read: {newreadTime}</h1>
            </div>
            <div className='bookmark-title-section'>

            </div>

        </>
    );
};
Bookmark.propTypes = {
    // bookmarks: PropTypes.array,
    newreadTime: PropTypes.number
}
export default Bookmark;