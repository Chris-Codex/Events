import { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [navToggle, setNavToggle] = useState(false)

    const handleNavToggle = () => {
        setNavToggle((prev) => !prev)
    }

    return (
        <EventContext.Provider value={{ navToggle, setNavToggle,
            handleNavToggle
         }}>
            {children}
        </EventContext.Provider>
    )
}

export const useEvent = () => useContext(EventContext);
