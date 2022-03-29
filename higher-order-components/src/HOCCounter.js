import React, {useState} from 'react'

export default function HOCCounter(TargetComponent) {

    return function Painter(){
        const[count, setCount]=useState(0)

        function increment(){
            setCount(count+1)
        }

        return(
           <TargetComponent count={count} increment={increment} />
        )
    }
}
