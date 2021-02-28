import React, { useEffect, useState } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterArgs, setFilterArgs] = useState("");
  const [showAll, setShowAll] = useState(true);

  // # Use axios to get phonebook data
  useEffect( () => {
    console.log("useEffect start");
    axios
      .get("http://localhost:3001/persons")
      .then( response => {
        console.log("fulfilled");
        console.log(response.data);
        setPersons(response.data);
      })
  });

  const filteredPersons = showAll
    ? persons
    : persons.filter((person) => new RegExp(filterArgs, "i").test(person.name));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterArgs={filterArgs}
        setFilterArgs={setFilterArgs}
        showAll={showAll}
        setShowAll={setShowAll}
      />

      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
