import React from "react";

const SearchBar = ({
  searchValue,
  handleInputChange,
  handleSearchClick,
  handleKeyPress,
  handleChangeFrom,
  handleChangeTo
}) => {
  return (
    <div className="searchBar-container">
      {/**we are setting searchValue to be the what we type in by calling our method handleInputChange we created in the App.jsx this function sets state of the searchValue by targeting the input prop value */}

      <form>

        <label htmlFor="from">Choose origin</label>
      <select name="cityFrom" id="from" onChange={handleChangeFrom}>
          <option value="PRG">Prague</option>
          <option value="BER">Berlin</option>
          <option value="WAW">Warsaw</option>
          <option value="PED">Pardubice</option>
      </select>
    <br/>
      <label htmlFor="to">Choose destination</label>
      <select name="cityTo" id="to" onChange={handleChangeTo}>
          <option value="VLC">Valencia</option>
          <option value="BCN">Barcelona</option>
          <option value="MAD">Madrid</option>
          <option value="MIL">Milano</option>
          <option value="ATH">Athens</option>
      </select>
      <br/>

      <input type="submit" className="searchBar-button" onClick={handleSearchClick} value="Search"/>
      </form>
    </div>
  );
};

export default SearchBar;
