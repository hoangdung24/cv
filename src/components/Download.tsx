import { Download as DownloadIcon } from "lucide-react";
import { Button } from "@headlessui/react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

export const Download = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <Button
      onClick={() => {
        try {
          const _theme = theme ?? "light";
          const _language = language ?? "vi";

          const fileName = `cv_le_minh_hoang_dung_${_theme}_${_language}`;

          const url = new URL(`/${fileName}.pdf`, window.location.href);

          const link = document.createElement("a");
          link.href = url.toString();
          link.download = fileName;

          // 3. Append to body, trigger click, and remove from DOM
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch {
          //
        }
      }}
      className="bg-background p-2 shadow-xs hover:bg-background/75 cursor-pointer"
    >
      <DownloadIcon aria-hidden="true" className="size-4 text-text" />
    </Button>
  );
};
