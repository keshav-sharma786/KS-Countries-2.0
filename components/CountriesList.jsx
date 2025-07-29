import { useEffect, useState } from "react";

import CountryCard from "./CountryCard";

export default function CountriesList(props) {
  
  const {query} = props;
  // console.log(countriesData);
  const [countriesData, setCountriesData] = useState([]);
  // so here we will use the useEffect hook.
  // inside the useEffect hook we basically pass a callback function and an empty array
  useEffect(() => {
    // the code inside the callback of the useEffect will run one time only.
    // our component will be re rendered but our code will run single time only.
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population').then((res) => {
    return res.json();
  }).then((countriesData) => {
    console.log(countriesData);
    
    setCountriesData(countriesData);
  })
  }, []);
  
  

  // for implementing the search functionality, we will simply use the filter method of the javascript.
  // using useState react hook.
  
  // by default the empty string is present in the all other strings.
  
  
    return (
    <>
    {/* <input type="text" onChange={(e) => setQuery(e.target.value.toLowerCase())} /> */}
    <div className="countries-container" style={{backgroundColor: "#231D15"}}>
      {countriesData.filter((country) =>
      country.name.common.toLowerCase().includes(query))
      .map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        )
      })}
    </div>
    </>
  )
}
