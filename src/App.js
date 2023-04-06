
import './App.css';
import Tode from './components/todo'

const Todo = [
  {
    todelido: ["Einkaufen", "Fernseh ausschalten", " Kühlschrank zumachen"]
  },
]

function App() {
  return (
    <div className="App">
      <h1>ToDo Liste</h1>
      <Tode />
    </div>
  );
}

export default App;
