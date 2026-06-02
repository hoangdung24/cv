import { Book, Brain, Dumbbell, Telescope } from "lucide-react";
import { Header } from "./Header";
import { useLanguage } from "../hooks/useLanguage";

const data = {
  vi: [
    {
      label: "Đọc",
      icon: Book,
    },
    {
      label: "Tập gym",
      icon: Dumbbell,
    },
    {
      label: "Suy ngẫm",
      icon: Brain,
    },
    {
      label: "Khám phá",
      icon: Telescope,
    },
  ],
  en: [
    {
      label: "Reading",
      icon: Book,
    },
    {
      label: "Gym",
      icon: Dumbbell,
    },
    {
      label: "Reflection",
      icon: Brain,
    },
    {
      label: "Exploring",
      icon: Telescope,
    },
  ],
};

const title = {
  vi: "Sở thích",
  en: "Interests",
};

export const Interests = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-4 print:gap-2">
      <Header title={title[language]} />
      <div className="grid grid-cols-2 md:flex gap-y-8 md:gap-x-16 print:gap-8 print:flex">
        {data[language].map((item) => {
          return <Item label={item.label} Icon={item.icon} key={item.label} />;
        })}
      </div>
    </div>
  );
};

const Item = (props: { label: string; Icon: typeof Book }) => {
  const { Icon, label } = props;

  return (
    <div className="flex flex-col items-center self-start gap-1.5">
      <Icon className="size-5" />
      <span className="font-medium text-center">{label}</span>
    </div>
  );
};
