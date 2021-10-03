import './App.css';
import { useState, useEffect } from 'react';
import { onSnapshot, collection } from '@firebase/firestore';
import { createNote } from './NoteHelpers.js';
import db from './Firebase';

import Canvas from './Components/Canvas';
import Menubar from './Components/Menubar';

function App() {
  // Add a touch or no-touch class to the document to determine in CSS if device is touch screen or not (dragging doesnt work on touch screens)
  document.documentElement.className += (("ontouchstart" in document.documentElement) ? ' touch' : '');

  const [notes, setNotes] = useState([]); // state to store all notes

  useEffect(() => // useEffect to update notes state when the firebase database changes
    onSnapshot(collection(db, "notes"), (snapshot) => {
      setNotes(snapshot.docs.map(doc => doc.data()))
    }
  ), []);

  return (
    <div className="app">
      <Canvas notes={notes} />
      <Menubar createNote={createNote} numNotes={notes.length} />
    </div>
  );
}

export default App;
