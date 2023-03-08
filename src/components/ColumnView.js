import React from "react";


const insideStyles = {
    rowView:(verticalCenter, horizontalCenter , perfectCenter, end)=>({
        display: "flex",
        flexDirection: "column",
        justifyContent: (verticalCenter === true || perfectCenter === true) 
        ? "center" 
        : end === true ? "flex-end"
        : "normal",
        alignItems: (horizontalCenter === true || perfectCenter === true) ? "center" : "normal" 
    })
}

export const ColumnView = ({children, verticalCenter = false, horizontalCenter = false, perfectCenter = false, end = false, style, ...otherProps})=> {
    return (
        <div style={{...insideStyles.rowView(verticalCenter, horizontalCenter , perfectCenter , end), ...style}} {...otherProps} >
            {children}
        </div>
    )
}