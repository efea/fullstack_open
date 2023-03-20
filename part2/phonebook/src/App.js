import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Service from "./services/persons"
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  //const [newName, setName] = useState('')
  //const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState("")
  const [personList, setPersonList] = useState(persons)
  const [newPerson, setNewPerson] = useState({ name: "", number: "" })
  const [message, setMessage] = useState(null)

  function AddPerson (event) {
    event.preventDefault()
  
      if (persons.find(person => person.name === newPerson.name) !== undefined) {
        //alert(`${newPerson.name} is already added to phonebook`)
        if(window.confirm(newPerson.name + " is already added to phonebook, replace old number with a new one?")){
          const existingPerson = persons.find(person => person.name === newPerson.name)
          
          console.log("existing person is: ",existingPerson)
          console.log("new person is: ", newPerson)
          
          Service.update(existingPerson.id, newPerson).
          then((personFromDB => {
            console.log("promise from update fulfilled.")
            
            //if od dont match, dont change anything
            //if ids match, replace with the data coming from db.
            const upToDate = persons.map((person) =>
            person.id !== personFromDB.id ? person : personFromDB
            )
            setPersonList(upToDate)
            setPersons(upToDate)
            setMessage("Updated " + newPerson.name)
          }))
          //this is the last place in the promise chain. catch the exception is promise not fullfilled
          .catch((error) => {
            setMessage("Information of " + newPerson.name + "has already been removed from server.")
          })

        } 
      }
      else {
        Service.create(newPerson)
          .then((personFromDB) => {
            setPersons(persons.concat(personFromDB))
            setPersonList(personList.concat(personFromDB))
            setMessage("Added " + newPerson.name)

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

  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, [message]);

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
      <Notification message={message} />
      <Filter filter={filter} FilterPerson={FilterPerson} />
      <PersonForm AddPerson={AddPerson} newPerson={newPerson}
        event_onChange={onChangeHandler} />
      <h2>Numbers</h2>
      <Persons personList={personList} removePerson={removePerson}/>
    </div>
  )
}

export default App