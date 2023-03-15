import { useState } from 'react'

const StatisticLine = (props) => (
  <tr>
    <td>{props.stat}</td>
    <td>{props.count}</td>
  </tr>
);

const Statistics = (props) => {

  const sum = props.good + props.neutral + props.bad
  if(sum === 0){
    return <div>No feedback given</div>
  }

  const average = (props.good - props.bad) / sum
  const positive = (100 * props.good / sum)

  const RoundedAverage = Math.round(average * 10) / 10
  const RoundedPositive= Math.round(positive * 10) / 10

  return(
    <table>
      <tbody>
        <StatisticLine stat="good" count={props.good} />
        <StatisticLine stat="neutral" count={props.neutral} />
        <StatisticLine stat="bad" count ={props.bad} />
        <StatisticLine stat="all" count={sum} />
        <StatisticLine stat="average" count={RoundedAverage} />
        <StatisticLine stat="positive" count={RoundedPositive + ' %'} />
      </tbody>
      </table>
  )
}

const Header = (props) => (
  <h1> {props.header} </h1>

)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  const header1 = 'give feedback'
  const header2 = 'statistics'
  const stat1 = 'good'
  const stat2 = 'neutral'
  const stat3 = 'bad'
  /*const allstats = 'all'
  const average = 'average'
  const positive = 'positive'*/

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    console.log('increasing good..')
    console.log('current good', good)
    const handler = () => {
      const updatedGood = good + 1
      console.log('updated good', updatedGood)
      setGood(updatedGood)
    }
    return handler
  }

  const increaseNeutral = () => {
    console.log('increasing neutral..')
    console.log('current neutral', neutral)
    const handler = () => {
      const updatedNeutral = neutral + 1
      console.log('updated neutral', updatedNeutral)
      setNeutral(updatedNeutral)
    }
    return handler
  }

  const increaseBad = () => {
    console.log('increasing bad..')
    console.log('current bad', bad)
    const handler = () => {
      const updatedBad = bad + 1
      console.log('updated bad', updatedBad)
      setBad(updatedBad)
    }
    return handler
  }


  return (
    <div>
      <Header header={header1} />
      <Button handleClick={increaseGood()} text={stat1} />
      <Button handleClick={increaseNeutral()} text={stat2} />
      <Button handleClick={increaseBad()} text={stat3} />
      <Header header={header2} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App