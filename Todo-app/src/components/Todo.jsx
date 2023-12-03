/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaCheck, FaHandPointRight, FaTimes } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiLoaderCircle } from "react-icons/bi";


function Todo(props) {
    const { title, id, completed } = props.todo
    return (
        <div className="p-5 bg-blue-800 text-white rounded-2xl shadow-2xl relative hover:scale-105 duration-200">
            <div className="flex gap-3">
                <span className="text-[20px] font-bold flex justify-center pt-2"><FaHandPointRight /></span>
                <h2 className="text-[20px] font-medium drop-shadow-md">{title}</h2>
            </div>
            <div className="leading-5 py-5">
                <div className="py-3">
                    <span className="text-[40px] font-medium absolute bottom-3 left-3">{completed ? <FaCheck className="text-green-500 shadow-2xl" /> : <BiLoaderCircle className="text-white shadow-2xl" />}</span>
                </div>
                <div className="absolute bottom-3 right-3">
                    <button className="text-[40px] text-red-600"><RiDeleteBin6Fill className="shadow-2xl"></RiDeleteBin6Fill></button>
                </div>
            </div>
        </div>
    )
}

export default Todo