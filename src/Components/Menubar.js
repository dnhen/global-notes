import '../Styles/Menubar.css';

function Menubar({ createNote }) {
  return (
    <div className="menubar">
      <p>Global Notes</p>
      <button onClick={createNote}>Add Note!</button>
      <p>Created by dnhen.</p>
    </div>
  );
}

export default Menubar;
