import React from "react";
import { ColumnView } from "../components/ColumnView";
import { RowView } from "../components/RowView";
import { colors } from "../styles/colors";
import { BrainIcon } from "../styles/icons";

const styles = {
    container: {
        minHeight: "100vh",
        backgroundColor: colors.greyBackground
    },
    separator: {
        backgroundColor: colors.green2,
        height: 16
    },
    titleContainer: {
        margin: 0,
        width: "100%",
        height: "100%"
    },
    titleTextStyles: {
        display: "block",
        fontSize: 100,
        margin: 0,
        color: colors.green1
    }
}

export const Index = ()=> {
    return (
        <ColumnView style={styles.container} verticalCenter>
            <RowView style={styles.centerContainer}>
                <RowView style={styles.iconContainer} verticalCenter>
                    <BrainIcon width="200px" height="200px"/>
                </RowView>
                <ColumnView style={styles.titleContainerAndSeparatorContainer}>
                    <ColumnView style={styles.titleContainer}>
                        <p style={styles.titleTextStyles}>
                            Pensamiento,
                        </p>
                        <p style={styles.titleTextStyles}>
                            emoción y cuerpo
                        </p>
                    </ColumnView>
                    <RowView style={styles.separator}>

                    </RowView>
                </ColumnView>
            </RowView>
        </ColumnView>
    )
}