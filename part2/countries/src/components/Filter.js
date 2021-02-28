import React from 'react';

const Filter = ({ keyword, setKeyword, setShowAll }) => {
  const handleFilterChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setKeyword(value);
    setShowAll(value === '' ? true : false);
  };

  return (
    <form>
      <div>
        Search countries: 
        <input value={keyword} onChange={handleFilterChange} />
      </div>
    </form>
  );
};

export default Filter;