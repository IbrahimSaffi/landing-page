
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import LandingPage from './components/LandingPage';
function App() {
  let imgs = ["../../ad1.avif","../../ad2.avif"]
  let [img,setImg] = useState(null)
  let [obj,setObj] = useState(null)
  let [time,setTime] = useState(null)
  let [date,setDate] = useState(null)
  let [timer,setTimer] = useState(null)
  function makePage(obj ){
    setObj(obj)
  }
  function selectedImg(i){
   setImg(imgs[i])
  }
  function stopTimer(){
    setTimer("stop")
  }
  useEffect(()=>{
    let intervalID = setInterval(()=>{
      console.log("updating")
      let currDate = new Date().toLocaleDateString()
      let currTime = new Date().toLocaleTimeString()
      setDate(currDate)
       setTime(currTime)
      },1000)
      // if(timer = "stop"){
      // clearInterval(intervalID)
    // }
   },[])
  return (
    <div className="app">
      <Routes>
       <Route path='/' element={<Card selectedImg ={selectedImg} makePage ={makePage} img = {img} imgs = {imgs}/>} />  
       <Route path='/landing-page' element={<LandingPage date={date} time ={time} img={img} obj={obj} stopTimer ={stopTimer} />} />
      </Routes>
    </div>
  );
}

export default App;
