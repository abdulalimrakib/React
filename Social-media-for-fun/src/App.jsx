/* eslint-disable */
import { useEffect, useState } from 'react';
import PostsData from './data/PostsData';
import Posts from './components/Posts';
import { UserContext } from './context/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePost from './pages/SinglePost';
import Comments from './components/comments';
import CommentData from './data/CommentData';

function App() {
  const [allPosts, setAllPosts] = useState([])
  const [allComments, setAllComments] = useState([])

  const { isLoading, error, posts } = PostsData("https://jsonplaceholder.typicode.com/posts")
  const { isLoadingCom, errorCom, comments } = CommentData("https://jsonplaceholder.typicode.com/comments")
  useEffect(() => {
    if (posts) {
      setAllPosts(posts)
    }
  }, [posts])

  useEffect(() => {
    if (comments) {
      setAllComments(comments)
    }
  }, [comments])

  console.log(allComments);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ allPosts, setAllPosts, allComments, setAllComments, isLoadingCom, errorCom}}>
        {isLoading && <h1>Data is loading !! ....</h1>}
        {error && <h1>error</h1>}
        <Routes>
          <Route path='/' element={<Posts></Posts>}></Route>
          <Route path='/:title' element={<SinglePost></SinglePost>}></Route>
          <Route path='/title/:id' element={<Comments></Comments>}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default (App)
