const Header = (props) => {
  return (
    <h1>
      {props.coursename}
    </h1>
  )
}

const Part = (props) => {
  //console.log(props)
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
}

/*
const Content = (props) => {
  //console.log(props.parts[0].ExerciseNumber)
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].ExerciseNumber}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].ExerciseNumber}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].ExerciseNumber}/>

    </div>
  );

}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total[0].ExerciseNumber + props.total[1].ExerciseNumber + props.total[2].ExerciseNumber}
    </p>
  )
}
*/

const Content = (props) => {
  //console.log(props.parts[0].ExerciseNumber)
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>

    </div>
  );

}



const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
    </p>
  )
}

const App = () => {
/*const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const CourseParts = [
    {
      name: "Fundamentals of React",
      ExerciseNumber: 10,
    },
    {
      name: "Using props to pass data",
      ExerciseNumber: 7,
    },
    {
      name: "State of a component",
      ExerciseNumber: 14,
    }
  ]*/

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={course.parts}/>
      <Total total={course.parts} />
    </div>
  )
}

export default App 