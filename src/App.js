import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name='tom'/>
      <Greeting name='ann'/>
    </div>
  );
}

export default App;
