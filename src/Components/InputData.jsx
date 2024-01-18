/* eslint-disable react/prop-types */

import { useRef } from "react"


function InputData({newCountry, setNewCountry, changeCountry, alert, setAlert}) {


  const input = useRef(null)

  if(alert && input.current){
    input.current.style.outlineColor = 'red'
    input.current.style.outlineWidth = '5px'

    setTimeout(() => {
      input.current.style.outlineColor = 'none'
      input.current.style.outlineWidth = '0'
      
      setAlert(false)
    }, 2000);
  }

  return (
    <>
      <h1 className="lg:text-3xl text-gray-300 mt-20 
         lg:mt-12 
      ">Enter Country Name</h1>
          <input
            type="text"
            value={newCountry}
            className="p-2 outline-none capitalize rounded-md text-blue-500
            focus:outline-blue-500 transition-all duration-150 ease-in
            text-xl"
            style={alert ? {outlineColor: "red", outlineWidth: "2px"} : {}}
            onChange={(e) => setNewCountry(e.target.value)}
            ref={input}
            placeholder="E.g., United States"
          />
          <button
            className=" text-gray-300 border-2 rounded-md px-3 py-2 hover:bg-gray-300 hover:text-black transition-all duration-500
            lg:text-xl lg:mb-5 sm:text-sm"
            onClick={changeCountry}
          >
            Search
          </button>
    </>
  )
}

export default InputData
