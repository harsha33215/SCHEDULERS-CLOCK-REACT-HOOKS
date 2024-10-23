import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'
import {useState, useEffect} from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() =>{
        setDate(new Date())
    },1000)
    console.log("timer got started")
    return () => {
      clearInterval(timerId)
      console.log("Clear interval started")
    }
  },[])

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time> {date.toLocaleTimeString()} </Time>
    </ClockContainer>
  )
}

export default Clock
