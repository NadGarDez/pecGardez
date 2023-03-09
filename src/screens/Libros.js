import React, { useContext } from "react";
import { colors } from "../styles/colors";
import { NavigatorContext } from "../utils/context";
import { ItemList } from "../components/sections/UISystem/ItemList";
import { BookPost } from "../components/sections/Book/BookPost";
import { useQuery } from "@apollo/client";
import { BOOK_LIST_QUERY } from "../constants/queries";
import { LoadingCard } from "../components/sections/UISystem/LoadingCard";


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


export const Libros = ()=> {

    const {params, setParams} = useContext(NavigatorContext)

    const {loading, error , data: {booksList} = {}} = useQuery(BOOK_LIST_QUERY)

    const isBook = ()=> (JSON.stringify(params) !== "{}");

    const onPressBook = (id)=> {
        console.log(id)
        setParams({id: id})
    };

    if(loading) return <LoadingCard />
    if(error) return <p>error</p>

    return (
        <>
            {
                isBook() ? (
                    <BookPost />
                ) : (
                    <ItemList data={booksList} ListTitle="Libros" onPressItem={onPressBook}/>
                )
            }
        </>
    )
}