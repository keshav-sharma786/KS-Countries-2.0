import { Link } from "react-router";

export default function CountryCard(props) {
  //   console.log(props);
  // deconstructing country's name from the props object
  const { name } = props;
  // deconstructing country's name also from the props object
  const { flag } = props;
  const { population } = props;
  const { region } = props;
  const { capital } = props;
  return (
    <>
      <Link to={`/${name}`} className="country-card" state={{data}}>
        {/* so above here name.common will be undefined early */}
        <img src={flag} alt="flag" />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>
            {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </Link>
    </>
  );
}
