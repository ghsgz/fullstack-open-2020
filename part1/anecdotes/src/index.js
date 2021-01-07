import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

const AnecdoteVote = ({anecdotes, votes}) => {
  let mostVote = 0
  let index = 0
  for (let i = 0; i < votes.length; i++) {
    if (mostVote < votes[i]) {
      mostVote = votes[i]
      index = i
    }
  }
  console.log('mostVote:', mostVote)
  return (
    <div>
      <h1>Anecdote of most vote</h1>
      <p>
        {anecdotes[index]}
      </p>
      <p>
        has {mostVote} votes
      </p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length + 1).join('0').split('').map(parseFloat))
  const copyOfVotes = [...votes]  // operate this array

  const getRandomAnecdotes = () => {
    const len = props.anecdotes.length
    // console.log('length: ', len)
    let randomNum = Math.floor(Math.random() * len)
    setSelected(randomNum)
    console.log('randomNum: ', randomNum)
    // console.log('selected: ', selected)
  }

  const handleVoteClick = () => {
    copyOfVotes[selected]++
    setVotes(copyOfVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>
        has {votes[selected]} votes
      </p>
      <Button text="vote"
        handleClick={handleVoteClick} />
      <Button text="next anecdotes"
        handleClick={getRandomAnecdotes} />
      <AnecdoteVote anecdotes={props.anecdotes}
        votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />,
  document.getElementById("root"))