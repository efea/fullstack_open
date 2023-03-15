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

export default Courses