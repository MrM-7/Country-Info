/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";


function CountryData({data}) {

    const [width, setWidth] = useState(window.innerWidth)

    const { theme } = useContext(ThemeContext)

    const convertPopulation = (labelValue) => {
        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(labelValue));
    }

    const getLanguages = (languages) => {
      return Object.values(languages);
    }


    useEffect(() => {
      const changeWidth = () => {
        setWidth(window.innerWidth)
      }


      window.addEventListener('resize', changeWidth)


      return () => window.removeEventListener('resize', changeWidth)
    }, [width])


  return (
    <>
    <div className={` p-3 w-4/5 mt-16  ${theme === "dark" ? "lg:border-gradient-green-yellow lg:border-2" : "lg:border-purple-950 lg:border-2"}
    lg:mt-0 lg:w-3/5 `}>        
        <div className="text-center flex justify-center mb-16
        lg:mb-4">
            <img src={data.flags.png} alt={`${data.name.common} flag`}
                className="h-28 relative lg:h-16"
            />
        </div>

        {
          (width <= 1023) ? (
                  <>
                    <div className={`flex w-full flex-col ${theme === "dark" ? "border-gradient-green-yellow" : "border-purple-950"}  border-2 items-center pb-3 mb-10`}>
                      <h1 className={`m-1 ${theme === "dark" ? "text-green-500" : "text-hunterGreen"} text-2xl mb-4`}>Country</h1>
                      <h1 className={`${theme === "dark" ? "text-yellow-500" : "text-tyrianPurple"} m-1 text-xl`}>{data.name?.common}</h1>
                    </div>

                    <div className={`flex w-full flex-col ${theme === "dark" ? "border-gradient-green-yellow" : "border-purple-950"}  border-2 items-center pb-3 mb-10`}>
                      <h1 className={`m-1 ${theme === "dark" ? "text-green-500" : "text-hunterGreen"} text-2xl mb-4`}>Capital</h1>
                      <h1 className={`${theme === "dark" ? "text-yellow-500" : "text-tyrianPurple"} m-1 text-xl`}>{data.capital[0]}</h1>
                    </div>

                    <div className={`flex w-full flex-col ${theme === "dark" ? "border-gradient-green-yellow" : "border-purple-950"}  border-2 items-center pb-3 mb-10`}>
                      <h1 className={`m-1 ${theme === "dark" ? "text-green-500" : "text-hunterGreen"} text-2xl mb-4`}>Region</h1>
                      <h1 className={`${theme === "dark" ? "text-yellow-500" : "text-tyrianPurple"} m-1 text-xl`}>{data.region}</h1>
                    </div>

                    <div className={`flex w-full flex-col ${theme === "dark" ? "border-gradient-green-yellow" : "border-purple-950"}  border-2 items-center pb-3 mb-10`}>
                      <h1 className={`m-1 ${theme === "dark" ? "text-green-500" : "text-hunterGreen"} text-2xl mb-4`}>Subregion</h1>
                      <h1 className={`${theme === "dark" ? "text-yellow-500" : "text-tyrianPurple"} m-1 text-xl`}>{data.subregion}</h1>
                    </div>

                    <div className={`flex w-full flex-col ${theme === "dark" ? "border-gradient-green-yellow" : "border-purple-950"}  border-2 items-center pb-3 mb-10`}>
                      <h1 className={`m-1 ${theme === "dark" ? "text-green-500" : "text-hunterGreen"} text-2xl mb-4`}>Population</h1>
                      <h1 className={`${theme === "dark" ? "text-yellow-500" : "text-tyrianPurple"} m-1 text-xl`}>{convertPopulation(data.population)}</h1>
                    </div>

                    <div className={`flex w-full flex-col ${theme === "dark" ? "border-gradient-green-yellow" : "border-purple-950"}  border-2 items-center pb-3 mb-10`}>
                      <h1 className={`m-1 ${theme === "dark" ? "text-green-500" : "text-hunterGreen"} text-2xl mb-4`}>Currency</h1>
                      <h1 className={`${theme === "dark" ? "text-yellow-500" : "text-tyrianPurple"} m-1 text-xl`}>{data.currencies[Object.keys(data.currencies)[0]].name} {'('} {data.currencies[Object.keys(data.currencies)[0]].symbol} {')'}</h1>
                    </div>

                    <div className={`flex w-full flex-col ${theme === "dark" ? "border-gradient-green-yellow" : "border-purple-950"}  border-2 items-center pb-3 mb-10`}>
                      <h1 className={`m-1 ${theme === "dark" ? "text-green-500" : "text-hunterGreen"} text-2xl mb-4`}>Languages</h1>
                      <h1 className={`${theme === "dark" ? "text-yellow-500" : "text-tyrianPurple"} m-1 text-xl text-center`}>
                        {
                          getLanguages(data.languages).map((language, index, array) => (
                            <span key={index}>{language}{(index + 1 < array.length)? ", " : ""}</span>
                          ))
                        }
                      </h1>
                    </div>
                  </>
          ) : (
            <div className={`${theme === "dark" ? "text-green-500" : "text-hunterGreen"}  p-3 text-2xl grid grid-cols-2`}>
              <div className="text-left">
                  <h1 className="m-1 ">Country</h1> 
                  <h1 className="m-1">Capital</h1>
                  <h1 className="m-1">Region</h1>
                  <h1 className="m-1">Subregion</h1>
                  <h1 className="m-1">Population</h1>
                  <h1 className="m-1">Currency</h1>
                  <h1 className="m-1">Languages</h1>
              </div>

              <div className={`text-right ${theme === "dark" ? "text-yellow-500" : "text-tyrianPurple"} `}>
                  <h1 className=" m-1">{data.name?.common}</h1>
                  <h1 className=" m-1">{data.capital[0]}</h1> 
                  <h1 className=" m-1">{data.region}</h1> 
                  <h1 className="m-1">{data.subregion}</h1> 
                  <h1 className=" m-1">{convertPopulation(data.population)}</h1> 
                  <h1 className=" m-1">{data.currencies[Object.keys(data.currencies)[0]].name} {'('} {data.currencies[Object.keys(data.currencies)[0]].symbol} {')'}</h1> 
                  <h1 className="m-1">
                    {
                      getLanguages(data.languages).map((language, index, array) => (
                        <span key={index}>{language}{(index + 1 < array.length)? ", " : ""}</span>
                      ))
                    }
                  </h1>                  
              </div>    
            </div> 
          )
        }
    </div>
    </>
  )
}

export default CountryData
