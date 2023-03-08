import React from "react";
import { colors } from "../../../styles/colors";

const styles= {
    link : {
        color : colors.green1
    },
    textStyles: {
        color: colors.green1,
        fontSize: 16,
    }

}

export const Link = ({text, onClick})=> {
    return (
        <a href="#" style={styles.link} onClick={onClick}>
            <p style={styles.textStyles}>{text}</p>
        </a>
    )
}