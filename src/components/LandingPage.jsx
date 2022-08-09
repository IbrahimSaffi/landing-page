import React, { useState } from 'react'

let flag = "counter-running"
export default function LandingPage(props) {
    let endDate = props.obj.date.split("T")[0].split("-")
    let endTime = props.obj.date.split("T")[1].split(":")
    let currDate = props.date.split("T")[0].split("-")
    let currTime = props.date.split("T")[1].split(":")
    let currHours = currTime[0]
    let minutesDifference = endTime[1]-currTime[1]
    let currSeconds =new Date().toLocaleTimeString().split(":")
    currSeconds = currSeconds[currSeconds.length-1].split(" ")[0]
    let hoursDifference = endTime[0]-currHours
    let difference = ((((((endDate[0]-currDate[0])*365+(endDate[1]-currDate[1])*30+(endDate[2]-currDate[2]))*24 + hoursDifference)*60)+ minutesDifference)*60)+(60-currSeconds)
    let seconds = difference%60
    let totalMinutesLeft = (difference-(difference%60))/60
    let minutes = totalMinutesLeft%60
    let totalHoursLeft = (totalMinutesLeft -(totalMinutesLeft%60))/60
    let hours = totalHoursLeft%24
    let days = (totalHoursLeft-(totalHoursLeft%24))/24
    if(difference<=0){
        props.stopTimer()
    }
    
 return (
    <div className='landing-page' >
        <img className='landing-background' src={props.img} alt="" />
    <div className='landing-card' >
     <h1 className='wheat'>{props.obj.mainHeadline}</h1>
     <h1>{props.obj.secondHeadline}</h1>
     <h1 className='wheat'>{props.obj.subtext}</h1>
     <div className='date-time' >
        <div className='date-time-container' >
            <h1 className='date-time-val'>{days}</h1>
        <p>Days</p>
        </div>
        <div className='date-time-container' >
        <h1 className='date-time-val'>{hours}</h1>
        <p>Hours</p>
        </div>
        <div className='date-time-container' >
        <h1 className='date-time-val'>{minutes}</h1>
        <p>Minutes</p>
        </div>
        <div className='date-time-container' >
        <h1 className='date-time-val'>{props.res===""?seconds:0}</h1>
        <p>Seconds</p>
        </div>
     </div>
     <button>
        <h2>
        {props.obj.buttonText}

        </h2>
        </button>
    </div>
        </div>
  )
}
