import { useQuery } from "react-query";

export const useCountryData = (country) => {
    const fetchData = async () => {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
          const data = await response.json();
          console.log(data);
          return data;
        } catch (error) {
          console.log(error);
          throw error; 
        }
    };

    const { data, refetch } = useQuery(['country', country], fetchData); 

    const newData = () => {
        refetch
    }

    return {data, newData}
}