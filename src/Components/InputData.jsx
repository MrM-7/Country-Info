/* eslint-disable react/prop-types */


function InputData({newCountry, setNewCountry, changeCountry}) {
  return (
    <>
      <h1 className="lg:text-4xl text-gray-300 mt-20 sm:text-3xl
         lg:mt-12 
      ">Enter Country Name</h1>
          <input
            type="text"
            value={newCountry}
            className="p-2 outline-none capitalize rounded-md text-blue-500
            focus:outline-blue-500 transition-all duration-150 ease-in
            lg:text-2xl sm:text-xl"
            onChange={(e) => setNewCountry(e.target.value)}
          />
          <button
            className=" text-gray-300 border-2 rounded-md px-3 py-2 hover:bg-gray-300 hover:text-black transition-all duration-500
            lg:text-2xl lg:mb-5 sm:text-sm"
            onClick={changeCountry}
          >
            Search
          </button>
    </>
  )
}

export default InputData
