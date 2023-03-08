import React from "react";


const insideStyles = {
    rowView:(verticalCenter, horizontalCenter , perfectCenter, end)=>({
        display: "flex",
        flexDirection: "row",
        alignItems: (verticalCenter === true || perfectCenter === true) ? "center" : "normal" ,
        justifyContent: (horizontalCenter === true || perfectCenter === true) 
        ? "center" 
        : end === true ? "flex-end"
        : "normal",
    })
}

export const RowView = ({children, verticalCenter = false, horizontalCenter = false, perfectCenter = false, end = false, style, ...otherProps})=> {
    return (
        <div style={{...insideStyles.rowView(verticalCenter, horizontalCenter , perfectCenter , end), ...style}} {...otherProps} >
            {children}
        </div>
    )
}