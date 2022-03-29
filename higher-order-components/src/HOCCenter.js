import React from 'react'

export default function HOCCenter(TargetComponent) {

    const WithCenter=class CenterComp extends React.Component{
        
        render() {
            return (
                <div style={{width: '100%',display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <TargetComponent />
                </div>
            )
        }
    }
    return WithCenter;
}
