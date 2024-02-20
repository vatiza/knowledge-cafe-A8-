
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmark'
import Nav from './Components/Nav/Nav'

function App() {

  const markAsBtn = (id, readtime) => {
    console.log('clicked', id);
    console.log('time', readtime);
  }


  return (
    <>
      <Nav></Nav>
      <div className='main-body'>
        <Blogs markAsBtn={markAsBtn}  ></Blogs>
        <Bookmark  ></Bookmark>

      </div>
    </>
  );
};

export default App
