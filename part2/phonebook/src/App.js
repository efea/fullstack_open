import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Service from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  //const [newName, setName] = useState('')
  //const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState("")
  const [personList, setPersonList] = useState(persons)
  const [newPerson, setNewPerson] = useState({ name: "", number: "" })

  const AddPerson = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newPerson.name) !== undefined) {
      alert(`${newPerson.name} is already added to phonebook`)
    }
    else {
      Service.create(newPerson)
        .then((personFromDB) => {
          setPersons(persons.concat(personFromDB))
          setPersonList(personList.concat(personFromDB))
        })
    }
    setNewPerson({ name: "", number: "" })
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const FilterPerson = (event) => {
    const filtStr = event.target.value
    setFilter(filtStr)
    setPersonList(persons.filter(person => person.name.toLowerCase().includes(filtStr)))
  }

  //get everything from db to render.
  useEffect(() => {
    console.log('effect')
    Service.getAll()
      .then((allFromDB) => {
        console.log('promise fulfilled')
        setPersons(allFromDB)
        setPersonList(allFromDB)
      })
  }, [])

  const removePerson = (id, name) => {
    if(window.confirm("remove " + name + " from the db?")){
      Service.remove(id).
      then((response => {
        const uptodate = persons.filter((person) => person.id !== id)
        setPersons(uptodate)
        setPersonList(uptodate)
      }))
    }
  }

  console.log("render", personList.length, "persons");
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} FilterPerson={FilterPerson} />
      <PersonForm AddPerson={AddPerson} newPerson={newPerson}
        event_onChange={onChangeHandler} />
      <h2>Numbers</h2>
      <Persons personList={personList} removePerson={removePerson}/>
    </div>
  )
}

export default App