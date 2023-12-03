/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()


function Data(url) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Data Not Found !! ....")
                } else {
                    return res.json()
                }
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(e => {
                setError(e.message)
                setIsLoading(false)
            })
    }, [url])
    
    return { isLoading, error, data }
}

export default Data