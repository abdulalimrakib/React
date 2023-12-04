/* eslint-disable */
import { useEffect } from "react"
import { useState } from "react"


function CommentData(url) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [comments, setComments] = useState("")

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Can't load Comments .....")
                }
                return res.json();
            })
            .then(data => {
                setComments(data)
                setIsLoading(false)
            })
            .catch(e => {
                setError(e.message)
                setIsLoading(false)
            })
    }, [url])


    return {isLoading, error, comments}
}

export default CommentData