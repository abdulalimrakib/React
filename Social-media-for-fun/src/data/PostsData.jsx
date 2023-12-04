/* eslint-disable */
import { useEffect } from "react"
import { useState } from "react"


function PostsData(url) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState("")

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Can't load Post .....")
                }
                return res.json();
            })
            .then(data => {
                setPosts(data)
                setIsLoading(false)
            })
            .catch(e => {
                setError(e.message)
                setIsLoading(false)
            })
    }, [url])


    return { isLoading, error, posts }
}

export default PostsData