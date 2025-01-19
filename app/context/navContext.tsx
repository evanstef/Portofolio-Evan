/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useContext, createContext, useEffect, useState } from "react";

interface NavContextProps {
    openNav: boolean;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextProps>({} as NavContextProps);

const NavProvider = ({children}: {children: React.ReactNode}) => {
    const [openNav, setOpenNav] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <NavContext.Provider value={{openNav, setOpenNav, isLoading, setIsLoading}}>
            {children}
        </NavContext.Provider>
    )
}

export const useNavContext = () => useContext(NavContext);

export default NavProvider