import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import ListItensContext from "../contexts/ListItensContext";

export default function RootLayout() {
    const [ listItens, setListItens ] = useState([])
    return (
        <>
            <Header />
            <ListItensContext.Provider value={listItens, setListItens}>
                <Outlet />
            </ListItensContext.Provider> 
        </>
    )
}