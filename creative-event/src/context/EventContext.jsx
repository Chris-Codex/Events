import { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [navToggle, setNavToggle] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [category, setCategory] = useState("")

    const handleNavToggle = () => {
        setNavToggle((prev) => !prev)
    }

    const handleCategory = (index, value) => {
        setActiveIndex(index);
        setCategory(value)
    }


    return (
        <EventContext.Provider value={{ navToggle, setNavToggle,
            handleNavToggle, activeIndex, setActiveIndex,
            handleCategory , category
         }}>
            {children}
        </EventContext.Provider>
    )
}

export const useEvent = () => useContext(EventContext);
