import React from "react";

const Filter = ({filterArgs, setFilterArgs, setShowAll}) => {

  // filter contracts
  const handleFilterChange = (event) => {
    console.log(`event.tg.value: ${event.target.value}`);
    // TODO: TypeError: setShowAll is not a function
    setShowAll(false);
    setFilterArgs(event.target.value);
  };

  return (
    <form>
      <div>
        filter shown with
        <input value={filterArgs} onChange={handleFilterChange} />
      </div>
    </form>
  );
};

export default Filter;
