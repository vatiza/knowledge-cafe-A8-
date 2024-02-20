
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmarks'
import Nav from './Components/Nav/Nav'

function App() {
  const [newreadTime, setnewreadTime] = useState(0)

  const markAsBtn = (id, readtime) => {
    const addNewReadTime = newreadTime + readtime;
    setnewreadTime(addNewReadTime);
    // console.log(addNewReadTime);
  }


  return (
    <>
      <Nav></Nav>
      <div className='main-body'>
        <Blogs markAsBtn={markAsBtn}  ></Blogs>
        <Bookmark newreadTime={newreadTime} ></Bookmark>

      </div>
    </>
  );
}

export default App
