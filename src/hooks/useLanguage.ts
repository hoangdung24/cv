import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export function useLanguage() {
  const { language, onChangeLanguage } = useContext(LanguageContext);

  return {
    language,
    onChangeLanguage,
  };
}
