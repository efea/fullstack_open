
const PersonForm = ({ AddPerson, newPerson, event_onChange}) =>
{
    return(
    <form onSubmit={AddPerson}>
    <div>
        name:{""} 
        <input name="name" 
        value={newPerson.name} 
        onChange={event_onChange} />
    </div>
    <div>
        number:{""} 
        <input name="number" 
        value={newPerson.number} 
        onChange={event_onChange}/>
    </div>
    <div>
    <button type="submit">add</button>
    </div>
    </form>
    )
}

export default PersonForm;