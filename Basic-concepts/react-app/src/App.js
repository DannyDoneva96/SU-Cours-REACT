import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header'
  

function App() {
  return (
    <div className="App">
      <header className="App-header">   
      <Header/>
         <h1> Hello World! </h1>
        <img src={logo} className="App-logo" alt="logo" />
      
       
      </header>
    </div>
  );
}

export default App;
