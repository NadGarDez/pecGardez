import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { BOOK_QUERY } from "../../../constants/queries";
import { colors } from "../../../styles/colors";
import { NavigatorContext } from "../../../utils/context";
import { ColumnView } from "../../ColumnView";
import { RowView } from "../../RowView";
import { LoadingCard } from "../UISystem/LoadingCard";


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
        marginRight: 8,
        marginTop: 24
    },
    paragraphTextStyles: {
        color: "grey",
        fontSize: 13
    }

}


export const BookPost = ()=> {

    const {params} = useContext(NavigatorContext)

    const {loading, error , data : {book} = {} } = useQuery(BOOK_QUERY, {
        variables: {
            book: params.id
        }
    })

    console.log(error);

    if(loading) return <LoadingCard />
    if(error) return <p>error</p>

    return (
        <RowView style={styles.container} horizontalCenter>
            <ColumnView style={styles.card} >
                <RowView style={{padding: 8}}>
                    <img src={book.imageUrl} width="100%" height={600}/>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.titleTextStyles}>
                      {
                        book.title
                      }
                    </p>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.itemSubtitleTextStyles}>
                       {
                        book.subtitle
                       }
                    </p>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.itemWriterTextStyles}>
                       {
                            book.metadata
                       }
                    </p>
                </RowView>
                <ColumnView style={styles.paragraphContainer}>
                    {
                        book.review.split("\n\n").map(
                            (item, index) => (
                                <>
                                    {
                                        index > 0 ? (<br />) : null
                                    }
                                    <p style={styles.paragraphTextStyles}>
                                        {
                                            item
                                        }
                                    </p>
                                </>
                            )
                         )
                    }
                </ColumnView>
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