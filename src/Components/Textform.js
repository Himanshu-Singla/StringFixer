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
    const EventOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
  return (
    
    <div>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" onChange = {EventOnChange} id="myBox" value={text} rows="12"></textarea>
        </div>
        <button className="btn btn-primary"  onClick={EventUp} >Convert to upper case</button>
  </div>
  )
}
