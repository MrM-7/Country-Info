import { createContext, useEffect, useState } from 'react';
import CountryData from './Components/CountryData';
import InputData from './Components/InputData';
import { useCountryData } from './Hook/useCountryData';
import Footer from './Components/Footer';
import Toggle from './Components/Toggle';


export const ThemeContext = createContext()

function App() {
  const [country, setCountry] = useState('India');
  const [newCountry, setNewCountry] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(false)
  const [theme, setTheme] = useState("dark");


  const {data, newData} = useCountryData(country)
  

  const changeCountry = () => {
    if (newCountry.trim() === '') {
      setAlert(true)
      return
    }

    setCountry(newCountry.trim());
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    newData();

    setNewCountry('');
  };

  const errorFree = (data) => {
    if(data.status !== 404) return true 
    else return false
  }

  useEffect(() => {
    const loader = setTimeout(() => {
                    setIsLoading(false);
                  }, 2000);

    return () => clearTimeout(loader)
  }, [])

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={`w-full min-h-screen ${theme === "dark" ? "bg-gray-900" : "bg-gray-300"} font-cool`}>
          <Toggle />
          <div className="flex flex-col flex-wrap gap-6 items-center " >
            <InputData newCountry={newCountry} setNewCountry={setNewCountry} changeCountry={changeCountry} alert={alert} setAlert={setAlert}/>

            {isLoading ? (
              <div className="animate-spin rounded-full border-t-4 border-gray-300 border-solid h-16 w-16"></div>
            ) : data && errorFree(data) && <CountryData data={data[0]}/>
            || <h1 className='text-red-500 text-2xl text-center'>Please enter a valid country name</h1> }
          </div>

          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
