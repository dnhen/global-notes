import { useState, useEffect } from 'react';
import { onSnapshot, collection, setDoc, doc, deleteDoc } from '@firebase/firestore';
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

  // When user clicks add button
  const createNote = async () => {
    const date = "" + Date.now();
    const docRef = doc(db, "notes", date);
    const payload = {
      id: notes.length === 0 ? 0 : notes[notes.length - 1].id + 1,
      name: notes.length === 0 ? "Note Name 0" : "Note Name " + (parseInt(notes[notes.length - 1].id) + 1),
      text: "",
      time: date
    };

    await setDoc(docRef, payload);
  }

  // When user clicks delete button
  const deleteNote = async (id) => {
    if(window.confirm("Are you sure you want to delete this note?")){
      const docRef = doc(db, "notes", id);
      await deleteDoc(docRef);
    }
  }

  // When a user types in a text box
  const textChanged = async (data, id) => {
    const docRef = doc(db, "notes", id);
    const payload = {
      id: data.id,
      name: data.name,
      text: data.text,
      time: id
    };

    await setDoc(docRef, payload);
  }

  return (
    <div className="canvas">
      <button onClick={createNote}>Add!</button>
      {notes.map((details, i) => {
        return <Note incrState={{incr: incr, setIncr: setIncr}} details={details} deleteNote={deleteNote} textChanged={textChanged} key={i} />
      })}
    </div>
  );
}

export default Canvas;
