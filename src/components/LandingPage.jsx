import React, { useState } from 'react'

let flag = "counter-running"
export default function LandingPage(props) {
    let currDate = props.obj.date
    let endDate = props.date
    currDate = currDate.split("T")
    endDate = endDate.split("T")
    currDate [0] =currDate[0].split("-")
    currDate [1] =currDate[1].split(":")
    currDate = currDate.flat()
    endDate [0] =endDate[0].split("-")
    endDate [1] =endDate[1].split(":")
    endDate = endDate.flat()
    currDate = currDate.map(ele=>Number(ele))
    endDate =endDate.map(ele=>Number(ele))
    
//     let days = ((currDate[0]-endDate[0])*365)+((currDate[1]-endDate[1])*30)+((currDate[2]-endDate[2])*30)-1
//     let hours = currDate[3]-endDate[3]-1
//     let minutes = currDate[4]-endDate[4]-1
//     if(days===-1&&hours===1){
//         days=0
//         hours += 23
//         minutes +=59
//     }
//     if(hours===-1){
//         hours=0
//         minutes += 59
//     }
//     if(minutes<0){
//         minutes=0
//     }
//     let seconds = 59 -props.sec
//    if(days===0&&hours===0&&minutes===0&&seconds===1){
//     props.stopTimer()
//    props.reset()
// }

   
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
