
import '../Styles/Note.css';

function Note( { noteFuncs: {deleteNote, textChanged}, noteInfo: {time, name, text} } ) {
  return (
    <div className="note">
      <div className="header">
        <input type="text" id={"header-" + time} value={name} onInput={() => textChanged({time: time, name: document.getElementById("header-" + time).value, text: text})} />
        <p onClick={() => deleteNote(time)}>DEL</p>
      </div>
      <div className="content">
        <textarea id={"text-" + time} placeholder="Enter text here..." value={text} onInput={() => textChanged({time: time, name: name, text: document.getElementById("text-" + time).value})} />
      </div>
    </div>
  );
}

export default Note;
