import React, { useEffect, useState } from 'react';
import { NavBar } from "./NavBar";
import { NavBarRspv } from "./NavBarRspv";

export const IndexNavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const changeWidth =() =>{
        setWidth(window.innerWidth);
    }

    useEffect(() =>{
        window.addEventListener('resize', changeWidth);

        return () =>{
            window.removeEventListener('resize', changeWidth); 
        }
    })

    return (
        <>
        {
            width > 960
                ? <NavBar/>
                : <NavBarRspv/>
                    
                  
        } 
    </>

    )
}