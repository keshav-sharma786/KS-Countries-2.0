import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";
import { useState } from "react";

import './App.css';
import { Outlet } from "react-router";

const App = () => {
    const [query, setQuery] = useState('');
    return (
        <>
        <Header />
        <Outlet />
        {/* here we will put the searchBar and the search-filter-container inside the div only */}
        <main style={{
            backgroundColor:"#231D15",
            minHeight: "100vh"
        }}>
        <div className="search-filter-container">
        <SearchBar setQuery={setQuery}/>
        <SelectMenu />
        </div>
        <CountriesList query={query}/>
        
        </main>
        </>
    )
}

export default App;
