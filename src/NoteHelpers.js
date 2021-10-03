import db from './Firebase';
import { setDoc, doc, deleteDoc } from '@firebase/firestore';

const MAX_NOTES = 10;
const MAX_NAME_LEN = 50;
const MAX_TEXT_LEN = 10000;

// When user clicks add button
const createNote = async (numNotes) => {
  if(numNotes < MAX_NOTES){
    const date = "" + Date.now();
    const docRef = doc(db, "notes", date); // connect to notes collection
    const payload = {
      time: date,
      name: "New Note",
      text: ""
    };

    await setDoc(docRef, payload); // Add the doc to the firebase storage
  } else {
    alert("You have too many notes.\nDelete one to make a new note.\nMax notes: " + MAX_NOTES);
  }
}

// When user clicks delete button
const deleteNote = async (time) => {
  if(window.confirm("Are you sure you want to delete this note?")){ // Confirm the user wants to delete the note
    const docRef = doc(db, "notes", time); // select the doc with the time
    await deleteDoc(docRef); // delete the doc
  }
}

// When a user types in a text box
const textChanged = async ({time, name, text, e}) => {
  let cursorPos = e.target.selectionStart; // Get the position of the cursor

  if(name.length < MAX_NAME_LEN && text.length < MAX_TEXT_LEN){
    const docRef = doc(db, "notes", time); // find the doc with the ID as the same ID
    const payload = { // create the new payload with the new text
      time: time,
      name: name,
      text: text,
    };

    await setDoc(docRef, payload); // set to database
  } else {
    alert("The text is max length. If you need to keep noting, create a new note.");
  }

  // Set the cursor back to where it was before the update
  e.target.selectionStart = cursorPos;
  e.target.selectionEnd = cursorPos;
}

export {
  createNote,
  deleteNote,
  textChanged
}