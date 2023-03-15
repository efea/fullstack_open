/*
      <Header key={course.id} coursename={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Part key={part.id} name={part.name} exercises={part.exercises} />

*/

import Courses from "./components/Courses"

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