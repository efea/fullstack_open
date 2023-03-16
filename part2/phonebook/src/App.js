import { useState } from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  //const [newName, setName] = useState('')
  //const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personList, setPersonList] = useState(persons)
  const [newPerson, setNewPerson] = useState({name: "", number: ""})

  const AddPerson = (event) => {
    event.preventDefault()
    
    if (persons.find(person => person.name === newPerson.name) !== undefined) {
      alert(`${newPerson.name} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setPersonList(persons.concat(newPerson))
      //setName("")
      //setNumber("")
      setNewPerson({name: "", number: ""})
    }
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const FilterPerson = (event) => {
    const filtStr = event.target.value
    //console.log(filtStr);
    setFilter(filtStr)
    //const someName = persons[0].name.toLowerCase()
    //console.log("first name is,", someName);
    setPersonList(persons.filter(person => person.name.toLowerCase().includes(filtStr)))
  }


/*
  const NameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const NumberChangeHandler = (event) => {
    setNumber(event.target.value)
  }
*/
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} FilterPerson={FilterPerson} />
      <PersonForm AddPerson={AddPerson} newPerson={newPerson}
        event_onChange={onChangeHandler}/>
      <h2>Numbers</h2>
      <Persons personList={personList} />
    </div>
  )
}

export default App