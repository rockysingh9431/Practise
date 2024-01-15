const SearchBox = ({ onSearch, searchText, setSearchText }) => {
  const onChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center p-5 mb-2 shadow-lg">
        <input
        data-testid="search-input"
          type="text"
          className="focus:bg-green-100 w-96 h-8 mr-1 pl-1 border border-green-900 rounded-lg"
          placeholder="search"
          value={searchText}
          onChange={onChange}
        />

        <button
        data-testid="search-btn"
          className="bg-purple-800 rounded-md text-white px-2"
          type="button"
          style={{ marginLeft: "5px" }}
          onClick={onSearch}
        >
          Search
        </button>

        {/* <input
          type="text"
          className="w-96 h-8 mr-1 pl-1"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
        <input
          type="text"
          className="w-96 h-8 mr-1 pl-1"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }} 
        />*/}
      </div>
    </>
  );
};
export default SearchBox;
