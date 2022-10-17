import { createContext, useReducer } from "react";


export const themeContext = createContext();
const initState = {darkMode: false};
export const themeReducer = (state, action) =>{
    switch(action.type){
        case 'toggle':
            return {darkMode: !state.darkMode};
        default:
            return state;
    }
}

export const ThemeProvider = (props) =>{
    const [state, dispath] = useReducer(themeReducer, initState);
    return(
        <themeContext.Provider value={{state,dispath}}>
            {props.children}
        </themeContext.Provider>
    )
}