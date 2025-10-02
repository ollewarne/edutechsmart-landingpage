import SearchBar from "./SearchBar";

function App() {
  const handleSearch = (text) => {
    console.log("Sökterm:", text);
    // här kan du filtrera data eller anropa API
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Edutechsmart</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
