import './App.css';
import Canvas from './Components/Canvas';

function App() {
  // Add a touch or no-touch class to the document to determine in CSS if device is touch screen or not (dragging doesnt work on touch screens)
  document.documentElement.className += (("ontouchstart" in document.documentElement) ? ' touch' : '');

  return (
    <div className="app">
      <Canvas />
    </div>
  );
}

export default App;
