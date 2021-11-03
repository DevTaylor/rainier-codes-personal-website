import './App.css';
import toad from './res/toad-yellow-background.jpeg';
import hero from './res/mariokart-hero-image.jpg';
import Card from './Components/Card';
function App() {
  return (
    <div className="App">
      <div className="container">
        <text className = "maintitle">
          Rainier Dirawatun
        </text>
        <br></br>
        <text className = "mainsubtitle">
          Software Engineer
        </text>
        <br></br>
        <div>
          <Card/>
          <Card/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
