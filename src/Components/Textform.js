import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'
export default function Textform(props) {
    const [text,setText]=useState('Enter your text here....');
    const EventUp=()=>{
        console.log("Upper Case Event Active"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const EventDown = () =>{
      console.log("Lower case Event Achive"+text);
      let newText1=text.toLowerCase();
      setText(newText1);
    }
    const clear = () =>{
      console.log("Clear event achive"+text);
      let newText2 = " ";
      setText(newText2);
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const copy = () =>{
      let text = document.getElementById("myBox");
      console.log("Copy process Achive");
      text.select();
      navigator.clipboard.writeText(text.value);
      
    }
    const EventOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
  return (
    <>
    <div className = "container" style = {{color:props.mode==='light'?'black':'white'}}>
        
        <h1 my-5>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" onChange = {EventOnChange} style = {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" value={text} rows="12"></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-3"  onClick={EventUp} >Convert upper case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={EventDown} >Convert lower case</button>
        <button onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className="btn btn-primary mx-3 my-2" onClick={copy}>Copy Text</button>
        <button className="btn btn-danger mx-3" onClick={clear}>Clear</button>
  </div>
  <div className = "container my-4" style = {{color:props.mode==='light'?'black':'white'}}>
    <h1>Text Summary</h1>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>Time require to read {0.008*(text.split(" ").length-1)} minutes</p>
    

    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>

  )
}
