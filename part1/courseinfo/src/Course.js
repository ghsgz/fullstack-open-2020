import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  )
}

const Header = ({ header }) => {
  return (
    <h1>{header}</h1>
  )
}

const Content = ({ content }) => {
  return (
    <div>
      {content.map(element =>
      (<Part key={element.id}
        name={element.name} exercises={element.exercises} />)
      )}
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ content }) => {
  return (
    <div>
      <b>
        total of {content.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.exercises,
        0)} exercises
      </b>
    </div>
  )
}

export default Course