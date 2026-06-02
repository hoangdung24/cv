import { createContext, useState, type PropsWithChildren } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (localStorage.theme === "dark") {
      return "dark";
    }

    if (
      !localStorage.theme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  });

  const toggleTheme = () => {
    let newTheme: "light" | "dark" = "light";

    if (theme == "light") {
      newTheme = "dark";
    }

    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle(
      "dark",
      newTheme == "dark" ? true : false,
    );
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme == "dark" ? true : false,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
