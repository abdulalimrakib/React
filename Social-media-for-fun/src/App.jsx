/* eslint-disable */
import { useEffect, useState } from 'react';
import PostsData from './data/PostsData';
import Posts from './components/Posts';
import { UserContext } from './context/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePost from './pages/SinglePost';

function App() {
  const [allPosts, setAllPosts] = useState([])

  const { isLoading, error, posts } = PostsData("https://jsonplaceholder.typicode.com/posts")
  useEffect(() => {
    if (posts) {
      setAllPosts(posts)
    }
  }, [posts])

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ allPosts, setAllPosts }}>
        {isLoading && <h1>Data is loading !! ....</h1>}
        {error && <h1>error</h1>}
        <Routes>
          <Route path='/' element={<Posts></Posts>}></Route>
          <Route path='/:title' element={<SinglePost></SinglePost>}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
