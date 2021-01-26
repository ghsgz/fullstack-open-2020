import React from "react";

const Persons = ({filteredPersons}) => {
  return (
    <div>
      {filteredPersons.map((element) => (
        <div key={element.name}>
          {element.name} {element.number}
        </div>
      ))}
    </div>
  );
}

export default Persons