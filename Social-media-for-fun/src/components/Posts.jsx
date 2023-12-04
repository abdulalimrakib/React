import { useContext } from 'react'
import Post from './Post'
import { UserContext } from '../context/UserContext'

function Posts() {
    const { allPosts } = useContext(UserContext)
    return (
        <div>
            {
                allPosts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}

export default Posts