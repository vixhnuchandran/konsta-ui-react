import { Searchbar } from "konsta/react"

const SearchBarComp = () => {
  return (
    <div className="pr-4">
      <Searchbar
        inputStyle={{
          borderRadius: "2rem",
          height: "43px",
          fontSize: "18px",
          backgroundColor: "#f3f4f6",
        }}
        placeholder="Search settings"
        // onInput={handleSearch}
        // value={searchQuery}
        // onClear={handleClear}
      />
    </div>
  )
}

export default SearchBarComp
