
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmarks'
import Nav from './Components/Nav/Nav'

function App() {
  const [newreadTime, setnewreadTime] = useState(0)
  const [bookmarks, setbookmarks] = useState([]);

  const markAsBtn = (id, readtime) => {
    const addNewReadTime = newreadTime + readtime;
    setnewreadTime(addNewReadTime);
    // console.log(addNewReadTime);
  }
  const manageBookmark = (post) => {
    // const newBookmarks = [...bookmarks]
    console.log(post);
  }


  return (
    <>
      <Nav></Nav>
      <div className='main-body'>
        <Blogs markAsBtn={markAsBtn} manageBookmark={manageBookmark}  ></Blogs>
        <Bookmark newreadTime={newreadTime} ></Bookmark>

      </div>
    </>
  );
}

export default App
