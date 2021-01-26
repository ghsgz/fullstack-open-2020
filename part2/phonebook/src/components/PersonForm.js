import React from "react";

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  // add new contract
  const addContract = (event) => {
    event.preventDefault();
    console.log("event:", event.target);

    if (containsElement(newName, persons)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const person = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(person));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  /**
   *
   * @param {string} name {newName}
   * @param {array} array {persons}
   */
  const containsElement = (name, array) => {
    for (const item of array) {
      if (item.name === name) {
        console.log(`${item.name} === ${name}`);
        return true;
      }
    }
    console.log(`${name} is unique`);
    return false;
  };

  return (
    <form onSubmit={addContract}>
      <div>
        name:
        <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm