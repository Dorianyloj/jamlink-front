import React, {createContext} from "react";

const NightModeContext = createContext(false);

const NightModeProvider = ({value, children}) => {
    return <NightModeContext.Provider value={value}>{children}</NightModeContext.Provider>
}

export {NightModeContext, NightModeProvider};