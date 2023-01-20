import React, {useContext} from "react";
import { AppContext, AppProvider } from "../context";


export const Meals = () => {
    const context = useContext(AppContext)
    console.log(context)
    return (
        <h1>Meals</h1>
    );
}