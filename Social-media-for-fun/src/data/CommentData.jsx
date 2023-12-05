/* eslint-disable */
import { useEffect } from "react"
import { useState } from "react"


function CommentData(url) {
    const [isLoadingCom, setIsLoadingCom] = useState(true)
    const [errorCom, setErrorCom] = useState(null)
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
                setIsLoadingCom(false)
            })
            .catch(e => {
                setErrorCom(e.message)
                setIsLoadingCom(false)
            })
    }, [url])


    return {isLoadingCom, errorCom, comments}
}

export default CommentData