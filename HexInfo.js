import React from "react";

export default function HexInfo(props) {
    const hexDivved = props.value.map(hex => {
        return(
            <p>{hex}</p>
        )
       
    })
    return(
        {hexDivved}
    )
        
    
}