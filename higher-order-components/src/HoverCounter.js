import React from 'react'
import HOCCenter from './HOCCenter'
import HOCCounter from './HOCCounter'
import HOCPainter from './HOCPainter'

function HoverCounter(props) {
  return (
    <div>
        <div>
        # of Hovers - {props.count}
        </div>
        <button onMouseEnter={props.increment}>Hover Counter</button>

    </div>
  )
}

export default HOCPainter(HOCCenter(HOCCounter(HoverCounter)))