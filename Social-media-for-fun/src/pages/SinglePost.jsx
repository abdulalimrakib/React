import { useContext, useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { GrLike } from "react-icons/gr";

function SinglePost() {
  const [targetPost, setTargetPost] = useState(null)
  const [comments, setComments] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const [color, setColor] = useState("black")

  const { allComments } = useContext(UserContext)
  const { allPosts } = useContext(UserContext)
  const { title } = useParams()

  useEffect(() => {
    const filterResult = allPosts && allPosts.filter(post => post.title === title)
    if (filterResult.length > 0) {
      setTargetPost(filterResult[0])
    } else {
      setTargetPost(null)
    }
  }, [title, allPosts])
  useEffect(() => {
    const filterResult = allComments && allComments.filter(com => com.postId === targetPost.id)
    if (filterResult.length > 0) {
      setComments(filterResult)
    } else {
      setComments(null)
    }
  }, [allComments])

  useEffect(() => {
    if (isClicked) {
      setColor("blue")
    }
    else {
      setColor("black")
    }
  }, [isClicked])


  if (targetPost === null || comments === null) {
    return <div>Loading or Post Not Found</div>;
  }

  return (
    <div className="p-5">
      {console.log(comments)}
      <h1 className="text-2xl font-medium">{title}</h1>
      <div className="px-5 py-4 text-xl">
        <h3>{targetPost.body}</h3>
      </div>
      <div className="flex gap-10 py-3">
        <button onClick={() => setIsClicked(!isClicked)}><GrLike className="text-[20px]" style={{ color: `${color}` }} /></button>
      </div>
      <div>
        <h1>Comments: </h1>
        {
          comments && comments.map(comment => <div key={comment.id}><h2>{comment.name}</h2><p>{comment.body}</p></div>)
        }
      </div>
    </div>
  )
}

export default SinglePost
