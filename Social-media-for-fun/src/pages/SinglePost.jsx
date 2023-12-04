import { useContext, useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { GrLike } from "react-icons/gr";

function SinglePost() {
  const [targetPost, setTargetPost] = useState("")
  const [isClicked, setIsClicked] = useState(false)
  const { allPosts } = useContext(UserContext)
  const { title } = useParams()

  useEffect(() => {
    const filterResult = allPosts.filter(post => {
      return post.title === title
    })
    if (filterResult) {
      setTargetPost(filterResult[0].body)
    }
  }, [title, allPosts])

  return (
    <div className="p-5">
      <h1 className="text-2xl font-medium">{title}</h1>
      <div className="px-5 py-4 text-xl">
        <h3>{targetPost}</h3>
      </div>
      <div className="flex gap-10 py-3">
        <button><GrLike className="text-[20px]"/></button>
        <button className="text-[20px]">Comments</button>
      </div>
    </div>
  )
}

export default SinglePost