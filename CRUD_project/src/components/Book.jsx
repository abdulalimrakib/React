/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/bookSlice";
import { Link } from "react-router-dom";


function Book({ book }) {
    const {id} = book
    const { title, authors, publisher, publishedDate } = book.volumeInfo
    const dispatch = useDispatch()

    const [bookTitle, setBookTitle] = useState()
    const [author, setAuthor] = useState()
    const [bookPublisher, setBookPublisher] = useState()
    const [date, setDate] = useState()

    useEffect(() => {
        setBookTitle(title)
        setAuthor(authors)
        setBookPublisher(publisher)
        setDate(publishedDate)
    }, [title, authors, publisher, publishedDate])

    const deleteHandle = (id) => {
        dispatch(deleteData(id))
    }

    return (
        <tr>
            <td className="border px-3">{bookTitle}</td>
            <td className="border px-3">{author}</td>
            <td className="border px-3">
                <div>
                    <h2>Publisher: {bookPublisher}</h2>
                    <h2>Published date: {date}</h2>
                </div>
            </td>
            <td className="border px-5">
                <div className="flex justify-between">
                    <Link to="/edit-book" state={{id, title, authors, publisher, publishedDate }}><button className="px-4 font-bold text-black bg-yellow-300 rounded-2xl py-1 shadow-2xl hover:scale-105 duration-200">Edit</button></Link>
                    <button className="px-4 font-bold text-white bg-red-600 rounded-2xl py-1 shadow-2xl hover:scale-105 duration-200" onClick={() => { deleteHandle(book.id) }}>Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default Book