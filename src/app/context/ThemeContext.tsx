"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "mint";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children:  React.ReactNode}) =>{
    const [theme, setThemeState] = useState<Theme>("light");

    //update the theme
    const setTheme = (newTheme: Theme) =>{
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        const root = document.documentElement;
        root.classList.toggle("dark", newTheme !== "light");
        root.dataset.theme = newTheme;
    } 

    // toggle the theme
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : theme === "dark" ? "mint" : "light");
    }

    // initial theme setup
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme || null;
        const initialTheme = savedTheme || "dark";

        setThemeState(initialTheme);
        const root = document.documentElement;
        root.classList.toggle("dark", initialTheme !== "light");
        root.dataset.theme = initialTheme;
    },[])

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}

// use custom hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}