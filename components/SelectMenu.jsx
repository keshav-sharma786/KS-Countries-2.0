export default function SelectMenu({setQuery}) {
  return (
    <select className="filter-by-region" onChange={(e) => setQuery(e.target.value.toLowerCase())} style={{backgroundColor: "#98694D", border: "3px solid #553d3a"}}>
      <option hidden="">Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}