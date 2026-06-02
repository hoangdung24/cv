import { createContext, useState, type PropsWithChildren } from "react";

interface LanguageContextProps {
  language: "vi" | "en";
  onChangeLanguage: (language: "vi" | "en") => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  onChangeLanguage: () => {},
});

const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<"vi" | "en">(() => {
    const storedLanguage = localStorage.getItem("language");

    if (storedLanguage === "vi" || storedLanguage === "en") {
      return storedLanguage;
    }

    const language = navigator.language;

    const primaryLanguage = language.split("-")[0];

    if (primaryLanguage === "vi") return "vi";

    return "en";
  });

  return (
    <LanguageContext.Provider
      value={{
        language,
        onChangeLanguage(language) {
          setLanguage(language);
          localStorage.setItem("language", language);
        },
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
