export default function SearchBar() {
  return (
    <>
      <div className="search-container" style={{backgroundColor: "wheat"}}>
        {/* search font awesome icon  */}
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="search for a country" style={{color: "black"}} />
      </div>
    </>
  );
}
