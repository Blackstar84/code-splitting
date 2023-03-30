import React, { useEffect } from "react";


const Surprise  =  (props) => {
    useEffect(()=>{
        import('./hello').then(mod=>mod.default())
    },[]);
    return(
        <div>Sorpresa</div>
    )
}


export default Surprise;