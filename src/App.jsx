
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmark'
import Nav from './Components/Nav/Nav'

function App() {


  return (
    <>
      <Nav></Nav>
      <div className='main-body'>
        <Blogs  ></Blogs>
        <Bookmark  ></Bookmark>

      </div>
    </>
  )
}

export default App
