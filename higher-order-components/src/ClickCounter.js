import React from 'react'
import HOCCenter from './HOCCenter';
import HOCCounter from './HOCCounter';
import HOCPainter from './HOCPainter';

function ClickCounter(props) {
  return (
    <div>
        <div>
        # of Clicks - {props.count}
        </div>
        <button onClick={props.increment}>Click Counter</button>
    </div>
  )
}

export default HOCPainter(HOCCenter(HOCCounter(ClickCounter)))