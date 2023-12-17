import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { editData } from "../redux/bookSlice";


function Edit() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [id, setId] = useState(location.state.id)
    const [bookTitle, setBookTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.authors)
    const [bookPublisher, setBookPublisher] = useState(location.state.publisher)
    const [date, setDate] = useState(location.state.publishedDate)



    useEffect(() => {
        setId(location.state.id)
    }, [location.state.id])

    const submitHandle = (e) => {
        e.preventDefault()
        dispatch(editData({ id, bookTitle, author, bookPublisher, date }))
        navigate("/show-books", { replace: true })
    }

    return (
        <>
            <div className="flex justify-center">
                <form action="" className="my-10" onSubmit={submitHandle}>
                    <div className="grid grid-cols-5 gap-5 w-full my-2 mx-5">
                        <label htmlFor="title" className="text-lg font-bold py-1">Title: </label>
                        <input type="text" name="title" className="text-lg font-bold font-mono text-gray-700 indent-3 py-1 col-span-4" value={bookTitle} onChange={e => setBookTitle(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-5 gap-5 w-full my-2 mx-5">
                        <label htmlFor="authors" className="text-lg font-bold py-1">Authors: </label>
                        <input type="text" name="authors" className="text-lg font-bold font-mono text-gray-700 indent-3 py-1 col-span-4" value={author} onChange={e => setAuthor(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-5 gap-5 w-full my-2 mx-5">
                        <label htmlFor="publisher" className="text-lg font-bold py-1">Publisher: </label>
                        <input type="text" name="publisher" className="text-lg font-bold font-mono text-gray-700 indent-3 py-1 col-span-4" value={bookPublisher} onChange={e => setBookPublisher(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-5 gap-5 w-full my-2 mx-5">
                        <label htmlFor="publishedDate" className="text-lg font-bold py-1">Published Date: </label>
                        <input type="date" name="publishedDate" className="text-lg font-bold font-mono text-gray-600 indent-3 py-1 col-span-4" value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className="flex justify-center my-10">
                        <button type="submit" className="text-lg font-bold px-3 py-1 bg-green-500 rounded-2xl shadow-2xl">Update Book</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit