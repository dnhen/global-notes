import '../Styles/Menubar.css';

function Menubar({ createNote, numNotes }) {
  return (
    <div className="menubar">
      <p>Global Notes</p>
      <button onClick={() => createNote(numNotes)}>Add Note!</button>
      <p>Created by dnhen.</p>
    </div>
  );
}

export default Menubar;
