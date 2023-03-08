import React,{useState} from "react";
import { colors } from "../../../styles/colors";

const styles = {
    outlined : (mainColor)=> (
        {
            borderStyle: "solid",
            borderColor: mainColor,
            borderWidth: 1,
            borderRadius: 13,
            color: mainColor,
            paddingRight: 16,
            paddingLeft: 16,
            height: 40,
            backgroundColor: "inherit"
        }
    ),
    aTag: {
        textDecoration: "none"
    }
}


export const Button = ({children, variant, mainColor, onClick= null})=> {

    const [hoverStyles, setHoverStyles] = useState({

    })

    const manageHover = (event)=> {
        if(event === "leave"){
            setHoverStyles({})
        }
        else if(event === "over"){
            setHoverStyles({
                backgroundColor: `${colors.white}15`
            })
        }

    }
    return (
        <button 
            onClick={
                ()=>onClick()
            } 
            onMouseOver={
                ()=>manageHover("over")
            } 
            onMouseLeave = {
                ()=>manageHover("leave")
            }
            style={{...styles[variant](mainColor),...hoverStyles}}>
            {children}
        </button>
    )
}