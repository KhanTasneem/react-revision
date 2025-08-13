import { ArrowUpward } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";

export const ScrollTop:React.FC=()=>{
    const [show, setShow]=React.useState<boolean>(false);
    
    React.useEffect(()=>{
        window.addEventListener("scroll", handleScroller)
        return ()=>window.removeEventListener("scroll", handleScroller)
    },[])
    const handleScroller=()=>{
    setShow(window.scrollY > 300)
}
    const handleScrollTop=()=>{
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    if(!show) return <></>
    return(
        <>
        <Fab color="primary" onClick={handleScrollTop} sx={{position: "fixed", bottom: "30px", right: "30px"}}>
            <ArrowUpward/>
            </Fab>
        </>
    )
}
