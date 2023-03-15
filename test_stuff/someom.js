const Header = ({ coursename }) => <h1>{coursename}</h1>

//const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ partName, exercises }) => {
  return (
    <p>
      {partName} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} partName={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Test for adding extra part,part",
        exercises:23,
        id: 4
      }
    ],
  };

  return <Course course={course} />
};

export default App;
