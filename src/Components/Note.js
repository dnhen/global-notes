import { useState } from 'react';
import '../Styles/Note.css';

function Note( { incrState, details } ) {
  const [diffX, setDiffX] = useState(0);
  const [diffY, setDiffY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [style, setStyle] = useState({});

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
        setStyle({
          left: left,
          top: top,
          zIndex: incrState.incr // move note on top of others
        });
      }
    }
  }

  // When the user stops dragging a note
  const dragEnd = (e) => {
    setStyle({
      left: style.left,
      top: style.top,
      zIndex: incrState.incr
    });

    incrState.setIncr(incrState.incr + 1); // so the next note is on top when released
    setDragging(false);
  }

  return (
    <div className="note" style={style} onMouseDown={dragStart} onMouseMove={currentlyDragging} onMouseUp={dragEnd}>
      <div className="header">
        <p>{details.name}</p>
        <p>DEL</p>
      </div>
      <div className="content">
        <textarea placeholder="Enter text here..." defaultValue={details.text} />
      </div>
    </div>
  );
}

export default Note;
