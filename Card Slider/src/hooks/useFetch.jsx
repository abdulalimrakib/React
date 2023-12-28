/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import { fetchApi } from "../api"

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchApi(url)
            .then(res => {
                setIsLoading(false)
                setData(res)
            })
            .catch(res => {
                setIsLoading(false)
                setError(res)
            })
    }, [url])


    return { isLoading, data, error }
}

export default useFetch