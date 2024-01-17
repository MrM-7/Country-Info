
function Footer() {

    const githubUrl = 'https://github.com/MrM-7';
    const linkedinUrl = 'https://www.linkedin.com/in/mehulRaj-7';

  return (
    <>
        <footer className="bg-gray-800 text-white text-center mt-6 py-4">
            <div className="flex justify-center items-center">
                <p className="text-lg">© 2024 Mehul Raj Minya</p>
                <span className="text-gray-400 mx-2">|</span>
                <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200"
                >
                GitHub
                </a>
                <span className="text-gray-400 mx-2">|</span>
                <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200"
                >
                LinkedIn
                </a>
            </div>
        </footer>
    </>
  )
}

export default Footer
