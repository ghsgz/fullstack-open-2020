import React from "react";

const CountryDetail = ({ data }) => {
  return (
    <div>
      {data.map((country) => (
        <div key={country.name}>
          <h2>{country.name}</h2>
          captial: {country.capital} <br />
          population: {country.population} <br />
          <h3>Languages</h3>
          <ul key={`${country.name}-Languages`}>
            {country.languages.map((language) => (
              <li key={language.iso639_1}>{language.name}</li>
            ))}
          </ul>
          <img src={country.flag} alt={`${country}'s flag`} />
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;