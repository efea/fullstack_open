import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"

const App = () => {
  const [persons, setPersons] = useState([])
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
      /*setPersons(persons.concat(newPerson))
      setPersonList(persons.concat(newPerson))
      //setName("")
      //setNumber("")
      setNewPerson({name: "", number: ""})*/
      axios
      .post("http://localhost:3001/persons", newPerson)
      .then((response) => {
        setPersons(persons.concat(newPerson));
        setPersonList(personList.concat(newPerson));
      });
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

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersonList(response.data)
        setPersons(response.data);
      })
  }, [])

  console.log("render", personList.length , "persons");
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