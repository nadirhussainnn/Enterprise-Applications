import React, {useRef} from 'react'

export default function App() {
  
  const statelessObject=useRef(0)
  const domElement=useRef('')

  function getFieldData(){
      //I don't have e.target.value here, but still i can access dom elemnt such as text field
      console.log(domElement.current.value);
      domElement.current.focus();
  }

  return (
    <div>
      <h3>Stateless Value -{statelessObject.current} Will not cause re-render when updated</h3>
      <button onClick={()=>{statelessObject.current+=1}}>Increase</button>
      <br />
      <input type="text" ref={domElement}></input>
      <br />
      <button onClick={getFieldData}>Get Field Data</button>
    </div>
  )
}
