import { deleteNote, textChanged } from '../NoteHelpers.js';

import '../Styles/Canvas.css';
import Note from './Note';

function Canvas({ notes }) {
  return (
    <div className="canvas">
      {notes.map((noteInfo, i) => {
        return <Note noteFuncs={{deleteNote: deleteNote, textChanged: textChanged}} noteInfo={noteInfo} key={i} />
      })}
    </div>
  );
}

export default Canvas;
