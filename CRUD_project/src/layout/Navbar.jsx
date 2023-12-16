import { Link } from "react-router-dom"


function Navbar() {
    return (
        <nav className="px-5 py-3 flex justify-center"> 
            <ul className=" flex gap-5 text-xl font-bold bg-green-400 px-10 py-3 rounded-2xl shadow-2xl ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-book">Add Book</Link></li>
                <li><Link to="/show-books">Show Books</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar