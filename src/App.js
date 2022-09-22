import React from 'react';
import Draggable from 'react-draggable';
import './App.css';

class App extends React.Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <>
        <Draggable onStart={() => false}>
          <div className="box">I don't want to be dragged</div>
        </Draggable>
        <Draggable axis="x" {...dragHandlers}>
          <div className="box cursor-x">
            I can only be dragged horizonally (x axis)
          </div>
        </Draggable>
        <Draggable handle="button">
          <div className="box no-cursor box-flex ">
            <button className="drag-head cursor">Drag here</button>
            <div style={{ overflow: 'scroll' }}>
              <div style={{ background: 'yellow', whiteSpace: 'pre-wrap' }}>
                I have long scrollable content with a handle
                {'\n' + Array(40).fill('x').join('\n')}
              </div>
            </div>
          </div>
        </Draggable>
        <Draggable cancel="button" {...dragHandlers}>
          <div className="box box-flex cursor">
            <button className="drag-head no-cursor">Can't drag here</button>
            <div>Dragging here works</div>
          </div>
        </Draggable>
      </>
    );
  }
}
export default App;
