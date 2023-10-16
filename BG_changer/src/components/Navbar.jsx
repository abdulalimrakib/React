
const Navbar = ({colorChange}) => {

    return (
        <div className="flex gap-5 px-5 inset-x-10 justify-center bg-gray-300 py-2 rounded-3xl shadow-3xl bottom-12 fixed">
            <button onClick={() => colorChange("red")} className="bg-red-600 text-white font-bold py-1 px-3 rounded-xl shadow-3xl">Red</button>
            <button onClick={() => colorChange("green")} className="bg-green-600 text-white font-bold py-1 px-3 rounded-xl shadow-3xl">Green</button>
            <button onClick={() => colorChange("blue")} className="bg-blue-600 text-white font-bold py-1 px-3 rounded-xl shadow-3xl">Blue</button>
            <button onClick={() => colorChange("gray")} className="bg-gray-600 text-white font-bold py-1 px-3 rounded-xl shadow-3xl">Gray</button>
            <button onClick={() => colorChange("yellow")} className="bg-yellow-600 text-white font-bold py-1 px-3 rounded-xl shadow-3xl">Yellow</button>
        </div>
    );
};

export default Navbar;