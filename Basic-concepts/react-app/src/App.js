import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header'
  import {Counter} from './Components/Counter'
import {Books} from './Components/Books'
function App() {
  return (
    <div className="App">
      <header className="App-header">   
      <Header/>
         <h1> Hello World! </h1>
        <img src={logo} className="App-logo" alt="logo" />
      
      <Counter/>
       <Books/>
      </header>
    </div>
  );
}

export default App;
