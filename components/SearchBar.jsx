export default function SearchBar(props) {
  const {setQuery} = props;
  return (
    <>
      <div className="search-container" style={{backgroundColor: "#98694D", border: "3px solid #553d3a"}}>
        {/* search font awesome icon  */}
        <i className="fa-solid fa-magnifying-glass" />
        <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" placeholder="search for a country" style={{color: "black"}} />
      </div>
    </>
  );
}
