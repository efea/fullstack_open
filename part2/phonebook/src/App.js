import { useState } from 'react'

const DisplayName = (props) => {
  return <div>{props.person.name}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const AddName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    };
    if(persons.find(person => person.name === newName) !== undefined )
    {
      alert(`${newName} is already added to phonebook`)
    }
    else
    {
      setPersons(persons.concat(nameObject))
      setNewName("")
    }
  };

  const NameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={AddName}>
        <div>
          name: <input value={newName} onChange={NameChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <DisplayName key={person.name} person={person} />
        ))}
      </div>
    </div>
  )
}

export default App