import { useEffect, useState } from "react"
import { themeContext } from "./hooks/context"
import Index from "./routes/Index"

function App() {
  const [theme, setTheme] = useState("#FFFFFF")

  useEffect(() => {
    document.querySelector('html').classList.remove("bg-[]", "bg-[#FFFFFF]", "bg-[#000000]", "bg-[#1D4ED8]", "text-white", "text-black");
    document.querySelector('html').classList.add(`bg-[${theme}]`, theme === "#FFFFFF" ? "text-black" : "text-white");
  }, [theme])

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <Index />
    </themeContext.Provider>
  )
}

export default App
