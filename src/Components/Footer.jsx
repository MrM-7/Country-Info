import { useContext } from "react";
import { ThemeContext } from "../App";

function Footer() {

    const githubUrl = 'https://github.com/MrM-7';
    const linkedinUrl = 'https://www.linkedin.com/in/mehulRaj-7';

    const { theme } = useContext(ThemeContext)

  return (
    <>
        <footer className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}  text-center mt-6 py-4`}>
            <div className="lg:flex lg:justify-center lg:items-center ">
                <p className="text-lg">© 2024 Mehul Raj Minya</p>
                <span className="text-gray-400 mx-2">|</span>
                <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === "dark" ? "text-blue-400 hover:text-blue-200" : "text-purple-500 hover:text-black"}  `}
                >
                GitHub
                </a>
                <span className="text-gray-400 mx-2">|</span>
                <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === "dark" ? "text-blue-400 hover:text-blue-200" : "text-purple-500 hover:text-black"}  `}
                >
                LinkedIn
                </a>
            </div>
        </footer>
    </>
  )
}

export default Footer
