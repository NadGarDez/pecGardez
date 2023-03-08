import React, { useContext } from "react";
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
    titleContainer: {
        marginTop: 8,
        marginLeft: 24
    },
    titleTextStyles: {
        fontSize: 40,
        color: colors.green1
    },
    itemSubtitleTextStyles: {
        fontSize: 20,
        color: colors.green1
    },
    itemWriterTextStyles: {
        fontSize: 16,
        color: colors.green2
    },
    paragraphContainer: {
        marginLeft: 24,
        marginTop: 24
    },
    paragraphTextStyles: {
        color: "grey",
        fontSize: 13
    }

}


export const BookPost = ()=> {
    return (
        <RowView style={styles.container} horizontalCenter>
            <ColumnView style={styles.card} >
                <RowView style={{padding: 8}}>
                    <img src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" width="100%" height={600}/>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.titleTextStyles}>
                       Este sera el titulo de un Libro muy interesante
                    </p>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.itemSubtitleTextStyles}>
                        Nada es lo que parece
                    </p>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.itemWriterTextStyles}>
                        Estrito por Iranad Garcia
                    </p>
                </RowView>
                <RowView style={styles.paragraphContainer}>
                    <p style={styles.paragraphTextStyles}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </RowView>
                <RowView style={styles.titleContainer} perfectCenter>
                    <a href="https://www.google.com" target="_blank">
                        <p style={styles.itemSubtitleTextStyles}>
                            ¡ Descargalo ya !
                        </p>
                    </a>
                </RowView>
            </ColumnView>
        </RowView>
    )
}