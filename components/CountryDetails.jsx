import React, { useEffect, useState } from "react";

import './CountryDetails.css';

export default function CountryDetails() {
  // basically I want to fetch the name from the url parameters
  const countryName = new URLSearchParams(location.search).get('name');
  console.log(countryName);
  // now after getting the country name from the url, by using country name we have to fetch the individual country by sending a network request to the api using fetch
  // for fetching we will basically use the useEffect hook.
  // for showing the country data we will basically use the useState Hook.
  const[countryData, setCountryData] = useState(null);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((resObj) => {
      return resObj.json();
    }).then(([data]) => {
      // we basically have countryData as an array of object.
      // console.log(countryData[0].flags.png);
      console.log(data);
      setCountryData({
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population,
        region: data.region,
        subregion: data.subregion,
        capital: data.capital,
        flag: data.flags.svg,
        tld: data.tld,
        currencies: Object.values(data.currencies).map((currency) => currency.name).join(', '),
        languages: Object.values(data.languages).join(', '),
      })
    })
  }, []);
  return countryData == null ?(
    'loading....'
  
   ) : (
    
    // so before showing the country details let us show our header 
    // header component to be shown befor each country detail
    <>
    
    <header className="header-container" style={{backgroundColor: "#98694D"}}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">KS Countries Info</a>
          </h2>
          <p className="theme-changer">
            <i className="fa-regular fa-moon" />
            &nbsp;&nbsp;Dark Mode
          </p>
          <i className="fa-solid fa-sun" id="light" />
        </div>
      </header>
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name}`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name" />
              </p>
              <p>
                <b>Population: {countryData.population.toLocaleString('en-In')}</b>
                <span className="population" />
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region" />
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region" />
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital" />
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain" />
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies" />
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages" />
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

