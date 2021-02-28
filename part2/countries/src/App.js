import {useEffect, useState} from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  // # Get data
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response);
      setCountries(response.data);
      console.log("Countries array:",  {countries});
    });
  }, []);

  // # Filter data to render search result
  const result = showAll
    ? countries
    : countries.filter((country) =>
        new RegExp(keyword, "i").test(country.name)
      );

  return (
    <div>
      <Filter
        keyword={keyword}
        setKeyword={setKeyword}
        setShowAll={setShowAll}
      />
      <Countries
        data={result}
        showAll={showAll}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </div>
  );
}

export default App;
