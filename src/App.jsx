
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmarks'
import Nav from './Components/Nav/Nav'

function App() {
  const [newreadTime, setnewreadTime] = useState(0)
  const [bookmarksTitles, setbookmarksTitles] = useState([]);

  const markAsBtn = (id, readtime) => {
    const addNewReadTime = newreadTime + readtime;
    setnewreadTime(addNewReadTime);
    const reminBookmarks = bookmarksTitles.filter(bookmark => bookmark.id !== id);
    setbookmarksTitles(reminBookmarks);
    // console.log(addNewReadTime);
  }
  const manageBookmark = (post) => {
    const newBookmarks = [...bookmarksTitles, post];
    setbookmarksTitles(newBookmarks);


  }


  return (
    <>
      <Nav></Nav>
      <div className='main-body'>
        <Blogs markAsBtn={markAsBtn} manageBookmark={manageBookmark}  ></Blogs>
        <Bookmark newreadTime={newreadTime} bookmarksTitles={bookmarksTitles} ></Bookmark>

      </div>
    </>
  );
}

export default App
