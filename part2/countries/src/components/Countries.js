import React from 'react';

import CountryDetail from './CountryDetail';

const Countries = ({ data, showAll, showDetails, setShowDetails}) => {
  const len = data.length;

  const handleShowBtnClick = () => {
    setShowDetails(!showDetails);
  }

  if (len > 10 && !showAll) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (len > 1 && len < 10) {
    return (
      <div>
        {data.map((country) => (
          <div key={country.name}>
            {country.name}
            {/* TODO: make a button to show details for most countries */}
            <button name="show" onClick={handleShowBtnClick} />
          </div>
        ))}
      </div>
    );
  }

  // TODO: display captical weather
  if (len === 1) {
    return (<CountryDetail data={data} />);
  }

  return <div></div>;
};

export default Countries;