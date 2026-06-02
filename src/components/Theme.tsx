import { Button } from "@headlessui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className="bg-background p-2 shadow-xs hover:bg-background/75 cursor-pointer print:hidden"
    >
      {theme === "dark" ? (
        <Moon aria-hidden="true" className="size-4 text-text" />
      ) : (
        <Sun aria-hidden="true" className="size-4 text-text" />
      )}
    </Button>
  );
};

export default Theme;
