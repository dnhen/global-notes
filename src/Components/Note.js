
import '../Styles/Note.css';

function Note( { noteFuncs: {deleteNote, textChanged}, noteInfo: {time, name, text} } ) {
  return (
    <div className="note">
      <div className="header">
        <input type="text" id={"header-" + time} value={name} onInput={(e) => textChanged({time: time, name: e.target.value, text: text, e: e})} />
        <p className="delButton" onClick={() => deleteNote(time)}>DEL</p>
      </div>
      <div className="content">
        <textarea id={"text-" + time} placeholder="Enter text here..." value={text} onInput={(e) => textChanged({time: time, name: name, text: e.target.value, e: e})} />
      </div>
    </div>
  );
}

export default Note;
