import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import './App.css';
import CountriesList from "./components/CountriesList";

const App = () => {
    return (
        <>
        <Header />
        {/* here we will put the searchBar and the search-filter-container inside the div only */}
        <main style={{
            backgroundColor:"#231D15",
        }}>
        <div className="search-filter-container">
        <SearchBar />
        <SelectMenu />
        </div>
        <CountriesList />
        </main>
        </>
    )
}

export default App;
