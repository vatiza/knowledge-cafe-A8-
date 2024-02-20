import './BookmarkTitles.css'
import PropTypes from 'prop-types';
const BookmarkTitles = (bookmark) => {
    // console.log(bookmarksTitles);
    const { posttitle } = bookmark.bookmark;
    console.log(posttitle)
    return (
        <div className='bookmark-section'>
           
            <h3>{posttitle}</h3>
        </div>
    );
};

BookmarkTitles.propTypes = {
    bookmarksTitles: PropTypes.object
}
export default BookmarkTitles;