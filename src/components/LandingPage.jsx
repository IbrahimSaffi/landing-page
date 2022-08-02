import React from 'react'

export default function LandingPage(props) {
    let endDate = props.obj.date.split("T")[0].split("-")
    let endTime = props.obj.date.split("T")[1].split(":")
    let currDate = props.date.split("/")
    let currTime = props.time.split(":")
    let days = (endDate[0]-currDate[2])*365+(endDate[1]-currDate[0])*30+(endDate[2]-currDate[1])
    let currHours = currTime[0]
    if(days<10){
        days = `0${days}`
    }
    if(currTime[2].endsWith("PM")){
        currHours+=12
    }
    let hours = endTime[0]-currHours
    if(hours<0){
        hours+=24
    }
    if(hours<10){
        hours = `0${hours}`
    }
    let minutes = endTime[1]-currTime[1]
    if(minutes<0){
        minutes+=60
    }
    if(minutes<10){
        minutes = `0${minutes}`
    }
    let seconds = 60 - currTime[2].split(" ")[0]
    if(seconds<10){
        seconds = `0${seconds}`
    }
    days = days-1
    hours=hours-1
    minutes = minutes-1
    if(hours<0){
        hours =0
    }
    if(days<0){
        days =0
    }
    // if(minutes<0){
      minutes=0
    // }
    if(days===0&&hours===0&&minutes===0&&seconds=="01"){
        console.log("here")
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
        <h1 className='date-time-val'>{seconds}</h1>
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
