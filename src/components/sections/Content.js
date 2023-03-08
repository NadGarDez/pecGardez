import React, { useContext, useState } from "react";
import { Blogs } from "../../screens/Blogs";
import { Citas } from "../../screens/Citas";
import { Index } from "../../screens/Index";
import { Libros } from "../../screens/Libros";
import { NavigatorContext } from "../../utils/context";


export const Content = ()=> {

    const {page} = useContext(NavigatorContext)

    const [pages] = useState(
        {
            "index": <Index />,
            "blogs": <Blogs />,
            "libros": <Libros />,
            "citas": <Citas/>
        }
    )

    return (
       <>
        {
            pages[page]
        }
       </>
    )
}