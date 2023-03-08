import React, { useContext } from "react";
import { colors } from "../../../styles/colors";
import { ColumnView } from "../../ColumnView";
import { RowView } from "../../RowView";
import { Button } from "./Button";


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
    blogList: {
        marginTop: 24,
        flexWrap: "wrap",
    },
    imageItemContainer: {
        height:120,
        marginBottom: 16
    },
    item: {
        width: 200,
        backgroundColor: colors.white,
        borderRadius: 13,
        paddingBottom: 16,
        paddingTop:16,  
        marginBottom: 8,
        marginRight: 3
    },
    imageStyles: {
        height: "100%",
        width: "90%"
    },
    itemTitleTextStyles: {
        fontSize: 16,
        color: colors.green1
    },
    itemSubtitleTextStyles: {
        fontSize: 13,
        color: colors.green1
    },
    itemWriterTextStyles: {
        fontSize: 13,
        color: colors.green2
    },
    itemTitleContainer: {
       marginRight: 8,
       marginLeft: 8,
       marginBottom: 4
    },
    itemSubtitleContainer: {
        marginRight: 8,
       marginLeft: 8,
       marginBottom: 4
    },
    itemWriterContainer: {
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 4
    }
}


export const ItemList = ({onPressItem, ListTitle, data })=> {
    return (
        <RowView style={styles.container} horizontalCenter>
            <ColumnView style={styles.card} >
                <RowView style={styles.titleContainer}>
                    <p style={styles.titleTextStyles}>
                        {ListTitle}
                    </p>
                </RowView>
                <RowView style={styles.blogList}>
                    {
                        data.map(
                            item => (
                                <RowView style={{width: "20%"}} horizontalCenter>
                                    <ColumnView style={styles.item} className="shadow3">
                                        <RowView style={styles.imageItemContainer} horizontalCenter >
                                            <img src={item.image} style={styles.imageStyles}/>

                                        </RowView>
                                        <RowView style={styles.itemTitleContainer}>
                                            <p style={styles.itemTitleTextStyles}>
                                                {item.title}
                                            </p>
                                        </RowView>
                                        <RowView style={styles.itemSubtitleContainer}>
                                            <p style={styles.itemSubtitleTextStyles}>
                                                {item.subtitle}
                                            </p>
                                        </RowView>
                                        <RowView style={styles.itemWriterContainer}>
                                            <p style={styles.itemWriterTextStyles}>
                                             {item.extraData}
                                            </p>
                                        </RowView>
                                        <RowView style={styles.buttonContainer} horizontalCenter>
                                        <Button variant="outlined" mainColor={colors.green1} onClick={()=>{onPressItem(item.id)}} >
                                            <p>
                                                visitar
                                            </p>
                                        </Button>
                                        </RowView>
                                    </ColumnView>
                                </RowView>
                            )
                        )
                    }
                </RowView>
            </ColumnView>
        </RowView>
    )
}