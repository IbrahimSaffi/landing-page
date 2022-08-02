import { useRef } from "react"
import { useNavigate } from "react-router-dom";

function Card(props){
    let mainHeadline = useRef(null);
    let secondHeadline = useRef(null);
    let subtext = useRef(null);
    let buttonText = useRef(null);
    let date = useRef(null);
    let navigate = useNavigate()
    return (
        <div className="card">
            <h1>Build Your Landing page</h1>
            <div className="form-container">
                <div className="inp-container" >
                <h3>Main headline</h3>
                <input ref={mainHeadline} placeholder="Offer of the Decade!" className="input-1" type="text" />
                </div>
                <div className="inp-container">
                <h3>Secondary Headline</h3>
                <input ref={secondHeadline} placeholder="Save 90%" className="input-1" type="text" />
                </div >
                <div className="inp-container" >
                <h3>Subtext</h3>
                <input ref={subtext} placeholder="Only for Today!" className="input-1" type="text" />
                </div>
                <div className="inp-container" >
                <h3>Button Text</h3>
                <input ref={buttonText} placeholder="Buy Now!" className="input-1" type="text" />
                </div>
                <div className="inp-container">
                <h3>When will the promo end?</h3>
                 <input ref={date} className="input-1" type="datetime-local"  defaultValue="2022-01-01T00:00" />
                </div>
                <div className="backgrounds">
                    {props.imgs.map((ele,i)=>{
                  return <div className="background-option">
                      <input  type="radio" name="option" onChange={(e)=>{
                        if(e.target.checked){
                            props.selectedImg(i)      
                        }
                      }} />
                      <img className="img-option" src={ele} alt="" />
                  </div>
                    })}
                    </div>    
            </div>
            <button onClick={()=>{
                    let dataObj = {
                        mainHeadline:mainHeadline.current.value,
                        secondHeadline:secondHeadline.current.value,
                        subtext:subtext.current.value,
                        buttonText:buttonText.current.value,
                        date:date.current.value,
                    }
                if(Object.values(dataObj).every(val=>val!="")){
                    if(props.img!==null){
                        props.makePage(dataObj)
                       navigate("/landing-page")
                    }
                }
                }} className="start-timer">Start Timer</button>
        </div>
    )
}
export default Card