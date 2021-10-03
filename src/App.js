import './App.css';
import { createNote } from './NoteHelpers.js';

import Canvas from './Components/Canvas';
import Menubar from './Components/Menubar';

function App() {
  // Add a touch or no-touch class to the document to determine in CSS if device is touch screen or not (dragging doesnt work on touch screens)
  document.documentElement.className += (("ontouchstart" in document.documentElement) ? ' touch' : '');

  return (
    <div className="app">
      <Canvas />
      <Menubar createNote={createNote} />
    </div>
  );
}

export default App;
