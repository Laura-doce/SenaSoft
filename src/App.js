import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo/Index'
import Despedida from './components/Despedida/Index'

function App() {
  return (
    <div className="App">
        <Saludo/>
        <Despedida/>
    </div>
  );
}

export default App;
