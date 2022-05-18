import React,{ useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children})=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);
    return(
        <React.Fragment >
            <Header />
            <div className="content mt-16 overflow-x-hidden">
                {children}
            </div>
            <Footer />
        </React.Fragment>
    );
};
export default Layout;