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
}

export const LoadingCard = ()=> {
    return (
        <RowView style={styles.container} horizontalCenter>
            <ColumnView style={styles.card} perfectCenter>
                <div className="circleLoading">
                </div>
            </ColumnView>
        </RowView>
    )
}