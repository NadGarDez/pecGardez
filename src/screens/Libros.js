import React, { useContext } from "react";
import { colors } from "../styles/colors";
import { NavigatorContext } from "../utils/context";
import { ItemList } from "../components/sections/UISystem/ItemList";
import { BookPost } from "../components/sections/Book/BookPost";


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

    const mockedBlogs = [
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
        {
            id: new Date().getTime(),
            title : "Libro 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            writer: "Iranad",
        },
       
    ]

    const isBook = ()=> (JSON.stringify(params) !== "{}");

    const onPressBook = (id)=> {
        setParams({id: id})
    };

    console.log(params)


    return (
        <>
            {
                isBook() ? (
                    <BookPost />
                ) : (
                    <ItemList data={mockedBlogs} ListTitle="Libros" onPressItem={onPressBook}/>
                )
            }
        </>
    )
}