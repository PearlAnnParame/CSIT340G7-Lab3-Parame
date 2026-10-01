const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises} units
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      Number of units {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = 'Industry Elective 1'

  const parts = [
    {
      name: 'CSIT321 - Applications Development and Emerging Technologies',
      exercises: 3
    },
    {
      name: 'CSIT327 - Information Management 2',
      exercises: 3
    },
    {
      name: 'CSIT340 - Industry Elective 1',
      exercises: 3
    }
  ]

  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total parts={parts} />
    </div>
  )
}

export default App