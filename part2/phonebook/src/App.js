import { useState } from 'react'

const DisplayPerson = (props) => {
  return <div>{props.person.name} {props.person.number}</div>
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personList, setPersonList] = useState(persons)

  const AddPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    };
    if (persons.find(person => person.name === newName) !== undefined) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
      setPersonList(persons.concat(personObject))
      setName("")
      setNumber("")
    }
  }

  const FilterPerson = (event) => {
    const filtStr = event.target.value
    //console.log(filtStr);
    setFilter(filtStr)
    //const someName = persons[0].name.toLowerCase()
    //console.log("first name is,", someName);
    setPersonList(persons.filter(person => person.name.toLowerCase().includes(filtStr)))
  }



  const NameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const NumberChangeHandler = (event) => {
    setNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={filter} onChange={FilterPerson}></input>
      </div>
      <form onSubmit={AddPerson}>
        <div>
          name: <input value={newName} onChange={NameChangeHandler} />
        </div>
        <div>
          number: <input value={newNumber} onChange={NumberChangeHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personList.map((person) => (
          <DisplayPerson key={person.name} person={person} />
        ))}
      </div>
    </div>
  )
}

export default App