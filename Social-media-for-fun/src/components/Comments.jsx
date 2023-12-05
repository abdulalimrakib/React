import { useEffect, useState } from "react"
import CommentData from "../data/CommentData"
import Comment from "./Comment"
import { useParams } from "react-router-dom"

function Comments() {
    const { id } = useParams()
    const [allComments, setAllComments] = useState([])
    const [filterComments, setFilterComments] = useState([])

    const { isLoading, error, comments } = CommentData("https://jsonplaceholder.typicode.com/comments")
    useEffect(() => {
        if (comments) {
            setAllComments(comments)
        }
    }, [comments])

    useEffect(() => {
        const filterResult = allComments.filter(comment => comment.id === id)
        if (filterResult) {
            setFilterComments(filterResult)
        }
    }, [id, allComments])

    return (
        <div>
            {isLoading && <h1>Data is loading !! ....</h1>}
            {error && <h1>error</h1>}
            {
                filterComments && filterComments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}

export default Comments