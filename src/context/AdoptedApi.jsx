import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AdoptedApi = createContext()

const AdoptedContextProvider = ({ children }) => {

    const [adopted, setAdopted] = useState([])

    const URL = 'https://adopted-cats-api.vercel.app/'
    useEffect(() => {
        axios
            .get(URL).then((response) => {
                let allAdopted = response.data.adopted
                // console.log(allAdopted)
                setAdopted(allAdopted)
            })
    },[])


    return (
        <AdoptedApi.Provider value={{adopted, setAdopted}}>
            {children}
        </AdoptedApi.Provider>
    )
}

export {AdoptedApi, AdoptedContextProvider}