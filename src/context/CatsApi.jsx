import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CatsApi = createContext()

const CatsContextProvider = ({ children }) => {

    const [cats, setCats] = useState([])

    const baseURL = 'https://cats-1nsckay2c-paulatealonso.vercel.app'
    useEffect(() => {
        axios
            .get(baseURL).then((response) => {
                let allCats = response.data.cats
                console.log(allCats)
                setCats(allCats)
            })
    },[])


    return (
        <CatsApi.Provider value={{cats, setCats}}>
            {children}
        </CatsApi.Provider>
    )
}

export {CatsApi, CatsContextProvider}