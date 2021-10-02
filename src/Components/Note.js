import { useState } from 'react';
import '../Styles/Note.css';

function Note() {
  const [diffX, setDiffX] = useState(0);
  const [diffY, setDiffY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({});

  // When the user starts dragging a note
  const dragStart = (e) => {
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  }

  // When the user is dragging a note
  const currentlyDragging = (e) => {
    if(dragging){ // if the user is currently dragging the note
      let left = e.screenX - diffX;
      let top = e.screenY - diffY;

      // check that the note isnt out of screen bounds
      if(left >= 0 && left <= window.innerWidth - 300 && top >= 0 && top <= window.innerHeight - 300){
        setPos({
          left: left,
          top: top
        });
      }

      console.log(left);
      console.log(top);
    }
  }

  // When the user stops dragging a note
  const dragEnd = (e) => {
    setDragging(false);
  }

  return (
    <div className="note" style={pos} onMouseDown={dragStart} onMouseMove={currentlyDragging} onMouseUp={dragEnd}>
      <div className="header">
        <p>Note Name</p>
        <p>DEL</p>
      </div>
      <div className="content">
        <textarea />
      </div>
    </div>
  );
}

export default Note;
