/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ThemeContext } from "../App";


export default function Toggle() {

  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex items-center justify-end pr-10 text-lg pt-4">
      <button
        onClick={toggleTheme}
        className={`  px-4 py-1  ${theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-400"} rounded-full `}
      >
        {theme === "dark" ? (
          <i className="ri-sun-fill text-gray-200"></i>
        ) : (
          <i className="ri-moon-fill text-black"></i>
        )}
      </button>
    </div>
  );
}