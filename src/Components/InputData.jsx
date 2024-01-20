/* eslint-disable react/prop-types */

import { useContext, useRef } from "react"
import { ThemeContext } from "../App"


function InputData({newCountry, setNewCountry, changeCountry, alert, setAlert}) {

  const { theme } = useContext(ThemeContext)

  const input = useRef(null)

  if(alert){
    input.current.focus()
    setAlert(false)
  }

  return (
    <>
      <h1 className={`lg:text-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"}  sm:text-2xl font-bold
      `}>Enter Country Name</h1>
          <input
            type="text"
            value={newCountry}
            className={`p-2 outline-none capitalize rounded-md ${theme === "dark" ?  "text-white bg-black outline-gray-300 " : "text-black-500 outline-black"} 
            focus:outline-blue-500 transition-all duration-150 ease-in
            text-xl sm:w-1/2 `}
            onChange={(e) => setNewCountry(e.target.value)}
            ref={input}
            placeholder="E.g., United States"
          />
          <button
            className={`  border-2 rounded-md px-3 py-2  ${theme === "dark" ?  "text-gray-300 hover:bg-gray-300 hover:text-black" : "bg-gray-200 text-black  hover:bg-gray-900 hover:text-white border-black "}  transition-all duration-500
            lg:text-xl lg:mb-5 sm:text-lg`}
            onClick={changeCountry}
          >
            Search
          </button>
    </>
  )
}

export default InputData
