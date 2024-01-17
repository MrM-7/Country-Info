import { useEffect, useState } from 'react';
import CountryData from './Components/CountryData';
import InputData from './Components/InputData';
import { useCountryData } from './Hook/useCountryData';
import Footer from './Components/Footer';

function App() {
  const [country, setCountry] = useState('India');
  const [newCountry, setNewCountry] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  const {data, newData} = useCountryData(country)
  

  const changeCountry = () => {
    if (newCountry === '') {
      alert('Enter Country Name!!');
      return;
    }

    setCountry(newCountry);
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
      <div className="w-full min-h-screen bg-gray-900 font-cool">
        <div className="flex flex-col flex-wrap gap-6 items-center ">
          <InputData newCountry={newCountry} setNewCountry={setNewCountry} changeCountry={changeCountry}/>

          {isLoading ? (
            <div className="animate-spin rounded-full border-t-4 border-gray-300 border-solid h-16 w-16"></div>
          ) : data && errorFree(data) && <CountryData data={data[0]}/>
          || <h1 className='text-red-500 text-2xl'>Incorrect Country Name</h1> }
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
