import { createContext } from "react";

export const ThemeContext = createContext({
    darkMode : false
})

export function ThemeProvider(Props){
    return(
        <ThemeContext.Provider value={{"darkMode" : ThemeContext.darkMode }}>
            {Props.children}
        </ThemeContext.Provider>
    )
}

