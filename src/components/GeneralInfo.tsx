import { Fragment } from "react";
import { Mail, MapPin, Smartphone } from "lucide-react";
import avatarPath from "../assets/avatar.jpg";
import { useLanguage } from "../hooks/useLanguage";

const data = {
  vi: [
    {
      icon: <MapPin className="size-5" />,
      text: <p>544/12 Lạc Long Quân, Phường Hòa Bình, TP.HCM</p>,
    },
    {
      icon: <Mail className="size-5" />,
      text: (
        <a
          target="_blank"
          className="underline underline-offset-4 break-all"
          href="mailto:leminhhoangdung24@gmail.com"
        >
          leminhhoangdung24@gmail.com
        </a>
      ),
    },
    {
      icon: <Smartphone className="size-5" />,
      text: (
        <a
          target="_blank"
          className="underline underline-offset-4"
          href="tel:0778639310"
        >
          077 8639 310
        </a>
      ),
    },
  ],
  en: [
    {
      icon: <MapPin className="size-5" />,
      text: <p>544/12 Lac Long Quan, Hoa Binh Ward, TP.HCM</p>,
    },
    {
      icon: <Mail className="size-5" />,
      text: (
        <a
          target="_blank"
          className="underline underline-offset-4 break-all"
          href="mailto:leminhhoangdung24@gmail.com"
        >
          leminhhoangdung24@gmail.com
        </a>
      ),
    },
    {
      icon: <Smartphone className="size-5" />,
      text: (
        <a
          target="_blank"
          className="underline underline-offset-4"
          href="tel:0778639310"
        >
          077 8639 310
        </a>
      ),
    },
  ],
};

const name = {
  vi: "Lê Minh Hoàng Dũng",
  en: "Le Minh Hoang Dung",
};

export const GeneralInfo = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-4 md:gap-6 print:gap-4">
      <div className="flex flex-col items-center gap-4">
        <div className="size-30 print:size-24 rounded-full grayscale-75 overflow-hidden">
          <img src={avatarPath} className="object-contain" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="uppercase text-xl text-center font-bold print:text-base">
            {name[language]}
          </h3>
          <p className="font-semibold">Frontend Developer</p>
        </div>
      </div>
      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-2 gap-y-2 md:gap-y-4 print:gap-y-2">
        {data[language].map((el, idx) => {
          return (
            <Fragment key={idx}>
              <div className="mt-1">{el.icon}</div>
              <div>{el.text}</div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
