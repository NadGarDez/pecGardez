import React from "react";
import { ColumnView } from "../components/ColumnView";
import { RowView } from "../components/RowView";
import { Button } from "../components/sections/UISystem/Button";
import { colors } from "../styles/colors";


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
        marginTop: 24,
        marginLeft: 24
    },
    titleTextStyles: {
        fontSize: 40,
        color: colors.green1
    },
    paragraphContainer: {
        marginLeft: 24,
        marginTop: 24
    },
    paragraphTextStyles: {
        color: "grey",
        fontSize: 13
    },
    itemSubtitleTextStyles: {
        fontSize: 20,
        color: colors.green1
    },
    linkColor: {
        color: colors.green1
    }
}


export const Citas = ()=> {


    return (
        <RowView style={styles.container} horizontalCenter>
            <ColumnView style={styles.card} >
                <RowView style={styles.titleContainer}>
                    <p style={styles.titleTextStyles}>
                        Agenda una cita
                    </p>
                </RowView>
                <RowView style={styles.paragraphContainer}>
                    <p style={styles.paragraphTextStyles}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.itemSubtitleTextStyles}>
                        Cita virtual
                    </p>
                </RowView>
                <RowView style={styles.paragraphContainer}>
                    <p style={styles.paragraphTextStyles}>
                        Navega a este <a href="https://www.google.com" target="_blank" style={styles.linkColor}>link</a> para completar el pago y agendar tu consulta. Le llegara un correo a la direccion registrada para confirmar el dia y la hora de lacita. Por medio de este correo tambien podra reagendar en caso de algun inconveniente.
                    </p>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.itemSubtitleTextStyles}>
                        Cita presencial
                    </p>
                </RowView>
                <RowView style={styles.paragraphContainer}>
                    <p style={styles.paragraphTextStyles}>
                        Contactanos por medio de <a href=" https://wa.me/584243121846?text=Estoy%20interesad@%20en%20una%20consulta" target="_blank" style={styles.linkColor}>Whatsapp Web</a> para agendar su proxima consulta presencial.
                    </p>
                </RowView>
            </ColumnView>
        </RowView>
    )
}