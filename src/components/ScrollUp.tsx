import { Button } from "@headlessui/react";
import clsx from "clsx";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const verticalOffset = window.scrollY || window.pageYOffset;

      if (verticalOffset > 300) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed right-4 bottom-4 visible sm:invisible">
      <Button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={clsx(
          "bg-background-alt p-2 shadow-xs hover:bg-background/75 cursor-pointer print:hidden transition-all duration-300",
          isShown ? "translate-y-0" : "translate-y-20",
        )}
      >
        <ChevronUp />
      </Button>
    </div>
  );
};

export default ScrollUp;
