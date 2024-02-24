import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { themeContext } from "../hooks/context";



const Navbar = () => {
    const [isMenuCliked, setIsMenuCliked] = useState(false)
    const {setTheme} = useContext(themeContext)

    return (
        <div className="px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%]">
            <div className="flex justify-between items-center container mx-auto">
                <div>
                    <Link className="text-[30px] md:text-[40px] font-bold" to="/">logo</Link>
                </div>
                <ul className="hidden md:flex gap-5">
                    <li><Link to='/' className="font-medium" href="">Home</Link></li>
                    <li><Link to='/about' className="font-medium" href="">About</Link></li>
                    <li><button className="bg-[#FFFFFF] rounded-xl hover:bg-opacity-95 border-2 text-black px-2 active:ring-2" onClick={() => setTheme("#FFFFFF")}>Light</button></li>
                    <li><button className="bg-[#000000] rounded-xl hover:bg-opacity-95 border-2 px-2 text-white active:ring-2" onClick={() => setTheme("#000000")}>Dark</button></li>
                    <li><button className="bg-[#1D4ED8] rounded-xl hover:bg-opacity-95 border-2 px-2 text-white active:ring-2" onClick={() => setTheme("#1D4ED8")}>Blue</button></li>
                </ul>

                <div className="md:hidden">
                    <div className="flex items-center gap-5">
                        <ul className="flex gap-5">
                            <li><button className="bg-[#FFFFFF] rounded-xl hover:bg-opacity-95 border-2 text-black px-2 active:ring-2">Light</button></li>
                            <li><button className="bg-[#000000] rounded-xl hover:bg-opacity-95 border-2 px-2 text-white active:ring-2">Dark</button></li>
                            <li><button className="bg-[#1D4ED8] rounded-xl hover:bg-opacity-95 border-2 px-2 text-white active:ring-2">Blue</button></li>
                        </ul>
                        {
                            isMenuCliked ? (<MdClose onClick={() => setIsMenuCliked(false)} />) : (<FiMenu onClick={() => setIsMenuCliked(true)} />)
                        }
                    </div>
                </div>
            </div>
            <div className={`container ${isMenuCliked ? "block" : "hidden"}`}>
                <ul>
                    <li><Link to='/' className="font-medium" href="">Home</Link></li>
                    <li><Link to='/about' className="font-medium" href="">About</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar