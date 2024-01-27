
import './App.css';
import Pcard from './components/Pcard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const myName="Hechmi";
  return (
    <div className="App">
     <Pcard />
     <h2>Hello {myName} !</h2>

    </div>
  );
}

export default App;
