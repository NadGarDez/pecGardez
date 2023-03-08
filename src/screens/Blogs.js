import React, { useContext } from "react";
import { ColumnView } from "../components/ColumnView";
import { RowView } from "../components/RowView";
import { BlogPost } from "../components/sections/Blog/BlogPost";
import { Button } from "../components/sections/UISystem/Button";
import { ItemList } from "../components/sections/UISystem/ItemList";
import { colors } from "../styles/colors";
import { NavigatorContext } from "../utils/context";


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


export const Blogs = ()=> {

    const  {setPage , setParams, params} = useContext(NavigatorContext);

    const mockedBlogs = [
        {
            id: 2,
            title : "blog 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            extraData: "Writer : Iranad",
        },
        {
            id: 3,
            title : "blog 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            extraData: "Writer : Iranad",
        },
        {
            id: 4,
            title : "blog 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            extraData: "Writer : Iranad",
        },
        {
            id: 5,
            title : "blog 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            extraData: "Writer : Iranad",
        },
        {
            id: 6,
            title : "blog 1",
            subtitle: "some subtitle",
            image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
            extraData: "Writer : Iranad",
        }
    ]

    const onPressBlog = (id)=> {
        setParams({id: id})
    };

    const isPost = ()=> (JSON.stringify(params) !== "{}");


    return (
        <>
            {
                isPost() 
                    ? (<BlogPost />)
                    : (
                        <ItemList data={mockedBlogs} ListTitle="Blogs" onPressItem={onPressBlog}/>
                    )
            }
        </>
    )
}
