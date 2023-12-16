import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from "../redux/bookSlice"
import Book from "../components/Book"

function ShowBooks() {
  const { isLoading, books, error } = useSelector(state => state.booksReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <>
      <div className="flex justify-center mt-10 px-10">
        <table className="border-collapse border border-slate-500 w-full shadow-2xl rounded-3xl">
          <thead>
            <tr className="text-lg">
              <th className="border w-[28%]">Title</th>
              <th className="border w-[28%]">Author</th>
              <th className="border w-[28%]">Publisher/publishedDate</th>
              <th className="border w-[16%]">Actions</th>
            </tr>
          </thead>
          <tbody className="font-medium">
            {
              books && books.map(book => <Book key={book.id} book={book}></Book>)
            }
          </tbody>
        </table>
      </div>
      <div className="text-2xl mt-5 flex justify-center">
        {isLoading && <h2>Data Is Loading ...</h2>}
        {error && <h2>{error}</h2>}
      </div>
    </>
  )
}

export default ShowBooks