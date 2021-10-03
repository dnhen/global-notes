import { useState, useEffect } from 'react';
import { onSnapshot, collection } from '@firebase/firestore';
import { deleteNote, textChanged } from '../NoteHelpers.js';
import db from '../Firebase';

import '../Styles/Canvas.css';
import Note from './Note';

function Canvas() {
  const [notes, setNotes] = useState([]); // state to store all notes

  useEffect(() =>
    onSnapshot(collection(db, "notes"), (snapshot) => {
      setNotes(snapshot.docs.map(doc => doc.data()))
    }
  ), []);

  return (
    <div className="canvas">
      {notes.map((noteInfo, i) => {
        return <Note noteFuncs={{deleteNote: deleteNote, textChanged: textChanged}} noteInfo={noteInfo} key={i} />
      })}
    </div>
  );
}

export default Canvas;
