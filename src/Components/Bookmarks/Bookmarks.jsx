import BookmarkTitles from '../BookmarkTitles/BookmarkTitles';
import './Bookmarks.css'
import PropTypes from 'prop-types';

const Bookmark = ({ newreadTime, bookmarksTitles }) => {
    // console.log(bookmarksTitles);
    return (
        <>
            <div className="bookmark-time-container">
                <h1>Spent time on read: {newreadTime}</h1>
                <h2 className='selected-items'>Bookmarked Blogs: {bookmarksTitles.length}</h2>
                <div className='bookmark-title-section'>
                    {
                        bookmarksTitles.map((bookmark, id) => <BookmarkTitles key={id}
                            bookmark={bookmark}></BookmarkTitles>)
                    }


                </div>
            </div>


        </>
    );
};
Bookmark.propTypes = {
    bookmarksTitles: PropTypes.array,
    newreadTime: PropTypes.number
}
export default Bookmark;