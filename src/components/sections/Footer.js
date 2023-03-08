import React from "react";
import { PAGES } from "../../constants";
import { colors } from "../../styles/colors";
import { capitalize } from "../../utils/context";
import { ColumnView } from "../ColumnView";
import { RowView } from "../RowView";
import { Button } from "./UISystem/Button";
import { Link } from "./UISystem/Link";


const styles = {
    container: {
        minHeight: "40hv",
        backgroundColor: colors.greyBackground
    },
    pickContainer: {
        backgroundColor: colors.pink,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16
    },
    pickTextStyles: {
        color: colors.white,
        margin: 0,
        fontSize: 50
    },
    footerInformation: {
        flex: 1,
        backgroundColor: colors.greyBackground
    },
    copyContainer: {
        backgroundColor: colors.green2,
        paddingTop: 16,
        paddingBottom: 16
    },
    copyRightTextStyles: {
        color: colors.white,
        fontSize: 16
    },
    aboutContainer: {
        paddingLeft:16,
        paddingRight: 16,
        flex: 2
    },
    linksContainer: {
        flex:1
    },
    developerContainer: {
        flex: 1,
        paddingRight: 16,
        paddingLeft: 8
    },
    footerInformation: {
        paddingTop: 24,
        paddingBottom: 24
    },
    titleSectionTextStyles: {
        fontSize: 40,
        color: colors.green1,
        margin: 0,
    },
    paragraphSectionTextStyles: {
        fontSize: 13,
        color: colors.green1,
        margin: 0
    },
    titleContainer: {
        marginBottom: 16
    },
    buttonContainer: {
        marginBottom: 8
    }
}

export const Footer = ()=> {
    return (
        <ColumnView style={styles.container}>
            <RowView style={styles.pickContainer} className="shadow2">
                <p style={styles.pickTextStyles}>
                    El bienestar verdadero, está en el equilibrio.
                </p>
            </RowView>
            <RowView style={styles.footerInformation}>
               <ColumnView style={styles.aboutContainer}>
                    <RowView style={styles.titleContainer}>
                        <p style={styles.titleSectionTextStyles}>
                            ¿Quienes Somos?
                        </p>
                    </RowView>
                    <RowView style={styles.paragraphContainer}>
                        <p style={styles.paragraphSectionTextStyles}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                    </RowView>

               </ColumnView>
               <ColumnView style={styles.linksContainer}>
                    <RowView style={styles.titleContainer}>
                        <p style={styles.titleSectionTextStyles}>
                            Mas contenido
                        </p>
                    </RowView>
                    <ColumnView style={styles.paragraphContainer}>
                        {
                            PAGES.filter(
                                items => items !== "index"
                            ).map(
                                (item, index) => (
                                    <div style={styles.buttonContainer} key={`header-${index}`}>
                                        <Link text={capitalize(item)}/>
                                    </div>
                                )
                            )
                        }
                    </ColumnView>

               </ColumnView>
               <ColumnView style={styles.developerContainer}>
                    <RowView style={styles.titleContainer} end>
                        <p style={styles.titleSectionTextStyles}>
                            Desarrollador
                        </p>
                    </RowView>
                    <RowView style={styles.paragraphContainer} end>
                        <p style={styles.paragraphSectionTextStyles}>
                            @NadGarDez , Desarrollador Fullstack web y movil
                        </p>
                    </RowView>
        
               </ColumnView>
            </RowView>
            <RowView horizontalCenter style={styles.copyContainer}>
                    <p style={styles.copyRightTextStyles}>
                        ©2023 Todos los derechos reservados
                    </p>

            </RowView>
        </ColumnView>
    )
}