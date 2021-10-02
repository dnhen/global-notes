import { useState } from 'react';
import '../Styles/Canvas.css';
import Note from './Note';

function Canvas() {
  const [incr, setIncr] = useState(0);
  const [notes, setNotes] = useState([{id: 0, name: "Note Name 0", text: "Enter text here..."}]);

  const createNote = () => {
    let newNotes = [...notes, {
      id: notes.length,
      name: "Note Name " + notes.length,
      text: "Enter text here..."
    }];

    setNotes(newNotes);

    console.log(newNotes);
  }

  return (
    <div className="canvas">
      <button onClick={createNote}>Add!</button>
      {notes.map((_, i) => {
        return <Note incrState={{incr: incr, setIncr: setIncr}} key={i} />
      })}
    </div>
  );
}

export default Canvas;
