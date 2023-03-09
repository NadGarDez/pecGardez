import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { BLOG_QUERY } from "../../../constants/queries";
import { colors } from "../../../styles/colors";
import { ColumnView } from "../../ColumnView";
import { RowView } from "../../RowView";
import {NavigatorContext} from "../../../utils/context";
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


export const BlogPost = ()=> {

    const {params} = useContext(NavigatorContext)

    const {
       loading,
       error,
       data : {blog} = {}
    } = useQuery(BLOG_QUERY, {
        variables: {blog: params.id}
    })

    if(loading) return <LoadingCard />
    if(error) return <p>error</p>

    return (
        <RowView style={styles.container} horizontalCenter>
            <ColumnView style={styles.card} >
                <RowView style={{padding: 8}}>
                    <img src={blog.imageUrl} width="100%" height={600}/>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.titleTextStyles}>
                      {
                        blog.title
                      }
                    </p>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.itemSubtitleTextStyles}>
                      {
                        blog.subtitle
                      }
                    </p>
                </RowView>
                <RowView style={styles.titleContainer}>
                    <p style={styles.itemWriterTextStyles}>
                        {
                            blog.metadata
                        }
                    </p>
                </RowView>
                <ColumnView style={styles.paragraphContainer}>
                    {
                        blog.content.split("\n\n").map(
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
            </ColumnView>
        </RowView>
    )
}
