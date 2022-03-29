import React from 'react'

export default function HOCPainter(TargetComponent) {

  return function Paint(){
      return(
          <div style={{width: '98%',backgroundColor: 'yellowgreen', padding: '10px', marginTop: '10px', border:'2px solid black'}}>
            <TargetComponent />
          </div>
      )
  }
}
