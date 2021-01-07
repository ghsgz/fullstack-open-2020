import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({name}) => <h1>{name}</h1>

const Button = ({buttons}) => {
  return (
    <button onClick={ buttons.handler }>
      {buttons.text}
    </button>
  )
}
const Content = ({buttons}) => {
  return (
    <div>
    <Button buttons={buttons[0]} />
    <Button buttons={buttons[1]} />
    <Button buttons={buttons[2]} />
    </div>
  )
}

const Statistics = ({ footer, buttons }) => {
  if (buttons[0].value === 0 && buttons[1].value === 0 && buttons[2].value === 0) {
    console.log("value: ", buttons[0].value, buttons[1].value, buttons[2].value)
    return (
      <div>
        <Header name={footer.name} />
        <p>{ footer.placeholder }</p>
      </div>
    )
  }

  // 将内容渲染成表格
  return (
    <div>
      <Header name={footer.name} />
      <table>
        <tr>
          <td>{buttons[0].text}</td>
          <td>{buttons[0].value}</td>
        </tr>
        <tr>
          <td>{buttons[1].text}</td>
          <td>{buttons[1].value}</td>
        </tr>
        <tr>
          <td>{buttons[2].text}</td>
          <td>{buttons[2].value}</td>
        </tr>
        <tr>
          <td>{footer.average}</td>
          <td>{footer.getAverage(buttons)}</td>
        </tr>
        <tr>
          <td>{footer.positive}</td>
          <td>{footer.getPositive(buttons)}</td>
        </tr>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const unicafe = {
    headerName: "give feedback",
    buttons: [
      {
        text: "good",
        value: good,
        handler: () => setGood(good+1)
      },
      {
        text: "neutral",
        value: neutral,
        handler: () => setNeutral(neutral+1)
      },
      {
        text: "bad",
        value: bad,
        handler: () => setBad(bad+1)
      }
    ],
    footer: {
      name: "Statistics",
      placeholder: "No feedback given",
      average: "average",
      positive: "positive",
      getAverage: (values) => (values[0].value*1) + (values[1].value*0) + (values[2].value*-1),
      getPositive: (values) => values[0].value / (values[0].value + values[1].value + values[2].value)
      }
    }

  return (
    <div>
      <Header name={unicafe.headerName} />
      <Content buttons={unicafe.buttons} />
      <Statistics footer={unicafe.footer}
        buttons={unicafe.buttons} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))