const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <p>
        {part1} {exercises1} units
      </p>
      <p>
        {part2} {exercises2} units
      </p>
      <p>
        {part3} {exercises3} units
      </p>
    </div>
  )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <p>
      Number of units {exercises1 + exercises2 + exercises3}
    </p>
  )
}

const App = () => {
  const course = 'Industry Elective 1'
  const part1 = 'CSIT321 - Applications Development and Emerging Technologies'
  const exercises1 = 3
  const part2 = 'CSIT327 - Information Management 2'
  const exercises2 = 3
  const part3 = 'CSIT340 - Industry Elective 1'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App