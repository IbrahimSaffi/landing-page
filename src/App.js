
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import LandingPage from './components/LandingPage';
let intervalID
function App() {
  let imgs = ["../../ad1.avif","../../ad2.avif"]
  let [img,setImg] = useState(null)
  let [obj,setObj] = useState(null)
  let [date,setDate] = useState(null)
  let [sec,setSec] = useState(null)
  let [res,setRes] = useState("")
    function reset(){
        setTimeout(()=>{
           setRes(0)
        },1000)
        
    }
  function makePage(obj ){
    setObj(obj)
  }
  function selectedImg(i){
   setImg(imgs[i])
  }
  function stopTimer(){
    clearInterval(intervalID)
  }
  function currDateTime(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
      mm='0'+mm
    }    
    let date = yyyy+'-'+mm+'-'+dd;
    let time =new Date().toLocaleTimeString('en-US', {
        hour12: false,
      })
      time = time.split(":")
       time.pop()
     time =  time.join(":")
      return `${date}T${time}`
}


  useEffect(()=>{
     intervalID = setInterval(()=>{
      let currDate = currDateTime()
      let currSeconds =new Date().getSeconds()
      setDate(currDate)
      setSec(currSeconds)
      },1000)
   },[])
  return (
    <div className="app">
      <Routes>
       <Route path='/' element={<Card date={date} selectedImg ={selectedImg} makePage ={makePage} img = {img} imgs = {imgs}/>} />  
       <Route path='/landing-page' element={<LandingPage reset = {reset} sec={sec} date={date} res ={res}  img={img} obj={obj} stopTimer ={stopTimer} />} />
      </Routes>
    </div>
  );
}

export default App;
