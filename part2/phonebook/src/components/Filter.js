const Filter = ({ filter, FilterPerson }) => {
    return (
        <div>
        filter shown with
        <input value={filter} onChange={FilterPerson}></input>
        </div>  
    )
  }
  
export default Filter;