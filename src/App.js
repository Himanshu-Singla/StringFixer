
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
function App() {
  return (
    <>
        
    <Navbar title="StringFixer" About="About StringFixer"/>
    <div className="container my-8">
    <Textform heading = "Enter the text to analyze"/>
    </div>
    
</>
  );
}

export default App;
