import React from "react";
import { colors } from "../../../styles/colors";
import { ColumnView } from "../../ColumnView";
import { RowView } from "../../RowView";

const styles = {
    container: {
        width: "100%",
        minHeight: "100vh",
        marginTop: 90,
        paddingTop: 36,
        paddingBottom: 36,
        backgroundColor: colors.greyBackground
    },
    card: {
        backgroundColor: colors.white,
        flexGrow: 1,
        marginLeft: 36,
        marginRight: 36,
        borderRadius: 13,
        paddingBottom: 36
    },
    paragraphTextStyles: {
        color: "grey",
        fontSize: 13
    },
    titleTextStyles: {
        fontSize: 32,
        color: colors.green1,
        marginBottom: 8
    },
}

export const ErrorCard = ({error})=> {
    return (
        <RowView style={styles.container} horizontalCenter>
            <ColumnView style={styles.card} perfectCenter>
                <h2 style={styles.titleTextStyles}>Un error inesperado ha ocurrido.</h2>
                <p style={styles.paragraphTextStyles}>
                    {
                       error.toString() 
                    }
                </p>
            </ColumnView>
        </RowView>
    )
}