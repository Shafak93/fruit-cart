import './App.css';
import Fruits from './components/Fruits/Fruits';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './components/Description/Description';

function App() {
  return (
    <div className="App container">
      <h1>Fruits Cart</h1>
      <Fruits></Fruits>
      <Description></Description>
    </div>
  );
}

export default App;
