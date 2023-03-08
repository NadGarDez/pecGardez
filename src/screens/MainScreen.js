import React, { useState } from "react";
import { Content } from "../components/sections/Content";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { NavigatorContext } from "../utils/context";


export const MainScreen = ()=> {

    const [navigatorState, setNavigatorState] = useState({
        page : "index",
        params : {}
    })

    const changePage = (page) => setNavigatorState({page, params: {}})
    const setParams = (params)=> setNavigatorState({...navigatorState, params})

    return (
        <NavigatorContext.Provider value={{...navigatorState, setParams , changePage}}>
            <Header />
            <Content />
            <Footer />
        </NavigatorContext.Provider>
    )
}