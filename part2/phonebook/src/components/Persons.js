import DisplayPerson from "./DisplayPerson"

const Persons = ({ personList }) => {
    return(
        <div>
            {personList.map((person) => (
                <DisplayPerson key={person.name} person={person} />
            ))}
        </div>
    )
}

export default Persons