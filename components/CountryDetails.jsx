import React, { useEffect, useState } from "react";

import './CountryDetails.css';
import { Link, useParams } from "react-router";

export default function CountryDetails() {
  // basically I want to fetch the name from the url parameters
  // for implementing the dynamic routing we basically have to use the useParams hook provided by the react-router dom.
  const params = useParams();
  
  const countryName = params.country;
  // console.log(countryName);
  // now after getting the country name from the url, by using country name we have to fetch the individual country by sending a network request to the api using fetch
  // for fetching we will basically use the useEffect hook.
  // for showing the country data we will basically use the useState Hook.
  const[countryData, setCountryData] = useState(null);
  // making a state basically for the country not found
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((resObj) => {
      return resObj.json();
    }).then(([data]) => {
      // we basically have countryData as an array of object.
      // console.log(countryData[0].flags.png);
      // console.log(data);
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
        borders: [],
      })
      
      if(!data.borders) {
        data.borders = [];
      }

      Promise.all(data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) =>
          // here we will basically get the array of promises
          // in case of the array of the promises we can basically use the Promise.all() method.
          borderCountry.name.common);
      })).then((borders) => {
        setCountryData((prevState) => ({...prevState, borders}))
      })

    }).catch((err) => {
      setNotFound(true);
    })
  }, [countryName]);
  if(notFound) {
    return (
      <div>Country Not Found</div>
    )
  }
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
        <span className="back-button" onClick={() => history.back()}>
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
                <b>Capital: {countryData.capital.join(' ')}</b>
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
            {countryData.borders.length !== 0 && <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {
                countryData.borders.map((border) => {
                  return <Link style={{border: "2px solid white"}} key={border} to={`/${border}`}>{border}</Link>
                })
              }
            </div>}
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

