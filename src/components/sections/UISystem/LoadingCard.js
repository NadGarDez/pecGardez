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
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 200 200"
                    color="#458890"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <defs>
                        <linearGradient id="spinner-secondHalf">
                        <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
                        <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
                        </linearGradient>
                        <linearGradient id="spinner-firstHalf">
                        <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
                        <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
                        </linearGradient>
                    </defs>

                    <g stroke-width="8">
                        <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
                        <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />
                        <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        d="M 4 100 A 96 96 0 0 1 4 98"
                        />
                    </g>
                </svg>
                </div>
            </ColumnView>
        </RowView>
    )
}