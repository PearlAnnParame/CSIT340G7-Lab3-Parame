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

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </div>
  )
}

const Total = ({ part1, part2, part3 }) => {
  return (
    <p>
      Number of units {part1.exercises + part2.exercises + part3.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Industry Elective 1'

  const part1 = {
    name: 'CSIT321 - Applications Development and Emerging Technologies',
    exercises: 3
  }

  const part2 = {
    name: 'CSIT327 - Information Management 2',
    exercises: 3
  }

  const part3 = {
    name: 'CSIT340 - Industry Elective 1',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  )
}

export default App