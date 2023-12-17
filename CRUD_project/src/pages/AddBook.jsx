import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import { addData } from "../redux/bookSlice";


function AddBook() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [id, setId] = useState("")
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [bookPublisher, setBookPublisher] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    setId(uuidv4())
  }, [])

  const submitHandle = (e) => {
    e.preventDefault()
    const book = {
      id: id,
      volumeInfo: {
        title: bookTitle,
        authors: [author],
        publisher: bookPublisher,
        publishedDate: date
      }
    }
    dispatch(addData(book))
    navigate("/show-books", { replace: true })
  }

  return (
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
          <button type="submit" className="text-lg font-bold px-3 py-1 bg-green-500 rounded-2xl shadow-2xl">Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default AddBook