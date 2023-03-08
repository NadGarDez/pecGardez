import React, { useContext } from "react";
import { PAGES } from "../../constants";
import { colors } from "../../styles/colors";
import { capitalize, NavigatorContext } from "../../utils/context";
import { RowView } from "../RowView";
import { Button } from "./UISystem/Button";


const styles = {
    container : {
        width: "100%",
        backgroundColor: colors.green1,
        height: 90,
        position: "fixed",
        top: 0
    },
    titleContainer: {
        height: "100%",
        flexGrow: 1,
        marginLeft: 16
    },
    titleStyles: {
        fontSize: 70,
        color: colors.white,
        margin: 0
    },
    navigatorContainer: {
        flexGrow: 1
    },
    buttonContainer: {
        marginRight: 16
    }
}


export const Header = ()=> {

    const {changePage, page} = useContext(NavigatorContext)

    const onPressButton = (page)=> changePage(page)

    return (
       <RowView style={styles.container} verticalCenter className="shadow2">
            <RowView style={styles.titleContainer} verticalCenter>
                <p style={styles.titleStyles}>
                    Psicólogos Pec. Gardez
                </p>
            </RowView>
            <RowView style={styles.navigatorContainer} end>
                {
                    PAGES.filter(
                        items => items !== "index"
                    ).map(
                        (item, index) => (
                            <div style={styles.buttonContainer} key={`header-${index}`}>
                                <Button variant="outlined" mainColor={colors.white} onClick={()=>onPressButton(item)}>
                                        {capitalize(item)}
                                </Button>
                            </div>
                        )
                    )
                }
            </RowView>
       </RowView>
    )
}