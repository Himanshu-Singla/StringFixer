import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React,{useState} from 'react';
import PropTypes from 'prop-types';
function App() {
  const [mode,setMode]=useState('light');
  const toggleMode = () =>{
    if(mode==='light')
    {setMode ('dark') ;
     document.body.style.backgroundColor = '#061c33';
  }
    else{
      setMode  ('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
        
    <Navbar title="StringFixer" About="About StringFixer" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-8">
    <Textform heading = "Enter the text to analyze" mode={mode}/>
    </div>
    
</>
  );
}

export default App;
