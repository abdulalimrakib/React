import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../layout/Navbar"
import Home from "../pages/Home"
import Error from './../pages/Error';
import AddBook from "../pages/AddBook";
import ShowBooks from './../pages/ShowBooks';

function Index() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/show-books" element={<ShowBooks />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index