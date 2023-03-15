const Header = ({ coursename }) => <h1>{coursename}</h1>

//const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Total = ({ parts }) => {
  const sum = parts.reduce((accumulator, curVal) => {
    return accumulator + curVal.exercises;
  }, 0);

  //console.log("total is", sum);

  return <div><b>total of {sum} exercises</b></div>;
};

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

const Courses = ({ courses }) => {
  return (
    <div>
        {courses.map(course =>
            <Course key={course.id} course={course} />
        )}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

/*
      <Header key={course.id} coursename={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Part key={part.id} name={part.name} exercises={part.exercises} />

*/

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Test course',
      id: 3,
      parts:[
        {
          name: 'Quarter stack',
          exercises: 6,
          id: 1,
        },
        {
          name: '1/8 of a stack',
          exercises: 125,
          id: 2,
        }
      ]
    }
  ]
  return <Courses courses={courses} />
}

export default App