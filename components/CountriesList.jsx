import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  console.log(countriesData);

  // const array = [
  //   <CountryCard />,
  //   <CountryCard />,
  //   <CountryCard />,
  //   <CountryCard />,
  // ];

  const array = countriesData.map((country) => {
    // console.log(country);
    // we will also pass the props inside this CountryCard.
    return <CountryCard
     // using a new key also.
     // key is basically used by the react behind the scenes for improving the performance
     key={country.name.common}
     name={country.name.common} 
     flag={country.flags.svg} 
     population={country.population}
     region={country.region} 
     capital={country.capital?.[0]}
     />;
  });

  console.log(array);

  return (
    <div className="countries-container">
      {/* now here we have to render the multiple elements in the react */}
      {array}
    </div>
  );
}
