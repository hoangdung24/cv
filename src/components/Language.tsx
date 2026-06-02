import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Globe } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const data = [
  {
    label: "vi",
    value: "vi",
  },
  {
    label: "en",
    value: "en",
  },
] as const;

const Language = () => {
  const { onChangeLanguage } = useLanguage();

  return (
    <Menu as="div" className="relative print:hidden">
      <MenuButton className="bg-background  p-2 shadow-xs hover:bg-background/75 cursor-pointer">
        <Globe aria-hidden="true" className="size-4 text-text" />
      </MenuButton>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-background shadow-lg outline-0 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in "
      >
        <div className="">
          {data.map((el) => {
            const { label, value } = el;

            return (
              <MenuItem key={value}>
                <button
                  onClick={() => {
                    onChangeLanguage(value);
                  }}
                  className="bg-background hover:bg-background-alt px-4 py-1 text-center w-full cursor-pointer"
                >
                  {label}
                </button>
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Language;
