import React from "react";

export default function CountryDetails() {
  return (
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </span>
        <div className="country-details">
          <img src="/" alt="" className="glitter" />
          <div className="details-text-container">
            <h1 />
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name" />
              </p>
              <p>
                <b>Population: </b>
                <span className="population" />
              </p>
              <p>
                <b>Region: </b>
                <span className="region" />
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region" />
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital" />
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain" />
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies" />
              </p>
              <p>
                <b>Languages: </b>
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
  );
}
