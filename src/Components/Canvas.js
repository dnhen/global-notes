import { useState, useEffect } from 'react';
import { onSnapshot, collection, addDoc } from '@firebase/firestore';
import db from '../Firebase';

import '../Styles/Canvas.css';
import Note from './Note';

function Canvas() {
  const [incr, setIncr] = useState(0);
  const [notes, setNotes] = useState([]);

  useEffect(() =>
    onSnapshot(collection(db, "notes"), (snapshot) => {
      setNotes(snapshot.docs.map(doc => doc.data()))
    }
  ), []);

  const createNote = async () => {
    const collectionRef = collection(db, "notes");
    const payload = {
      id: notes.length,
      name: "Note Name " + notes.length,
      text: ""
    };

    await addDoc(collectionRef, payload);
  }

  return (
    <div className="canvas">
      <button onClick={createNote}>Add!</button>
      {notes.map((details, i) => {
        return <Note incrState={{incr: incr, setIncr: setIncr}} details={details} key={i} />
      })}
    </div>
  );
}

export default Canvas;
