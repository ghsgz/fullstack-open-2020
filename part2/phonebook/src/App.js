import React, { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterArgs, setFilterArgs] = useState("");
  const [showAll, setShowAll] = useState(true);

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
