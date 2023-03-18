import axios from "axios";
const personsURL = "http://localhost:3001/persons"
const getAll = () => {
  const request = axios.get(personsURL);
  return request.then((response) => response.data)
}
const create = (newObject) => {
  const request = axios.post(personsURL, newObject)
  return request.then((response) => response.data)
}
const update = (id, newObject) => {
  const request = axios.put(`${personsURL}/${id}`, newObject)
  return request.then((response) => response.data)
}
export default { getAll, create, update }