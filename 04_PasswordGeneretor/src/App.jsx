import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGeneretor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (characters) {
      str += "~!@#$%^&*_";
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, number, characters]);

  useEffect(() => {
    passwordGeneretor();
  }, [length, number, characters]);

  return (
    <div className="bg-gray-700 text-white mx-auto max-w-lg text-center mt-10 rounded-2xl shadow-xl">
      <h1 className="text-[28px] font-medium py-2">Password Generetor</h1>
      <div className="py-2">
        <input
          type="text"
          placeholder="password"
          className="w-[80%] outline-none indent-2 py-1 text-[20px] rounded-l-xl text-gray-700"
          value={password}
        />
        <button className="w-[15%] outline-none py-1 rounded-r-xl bg-yellow-700 font-bold text-[20px]">
          copy
        </button>
      </div>
      <div className="flex gap-8 pl-3 py-3">
        <div>
          <input
            className="cursor-pointer"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-[18px] font-medium pl-2">
            length ({length})
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={number}
            onChange={() => {
              setNumber((prev) => !prev);
            }}
            className="hover:cursor-pointer"
          />
          <label className="text-[18px] font-medium pl-2">number</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={characters}
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
            className="hover:cursor-pointer"
          />
          <label className="text-[18px] font-medium pl-2">characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
