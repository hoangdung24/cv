import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";
import { Timeline } from "./Timeline";

const data = {
  vi: [
    {
      title: "Cử nhân Tài Chính Doanh Nghiệp",
      subTitle: "Đại học Tài chính - Marketing",
      lifeTime: "2011 - 2015",
    },
    {
      title: "Lập trình Web",
      subTitle: "Tự học online",
      lifeTime: "2019 - đến nay",
    },
    {
      title: "Lập trình Mobile",
      subTitle: "Tự học online",
      lifeTime: "2023 - đến nay",
    },
  ],
  en: [
    {
      title: "Bachelor of Corporate Finance",
      subTitle: "University of Finance - Marketing",
      lifeTime: "2011 - 2015",
    },
    {
      title: "Web Development",
      subTitle: "Self-taught online",
      lifeTime: "2019 - present",
    },
    {
      title: "Mobile Development",
      subTitle: "Self-taught online",
      lifeTime: "2023 - present",
    },
  ],
};

const title = {
  vi: "Giáo dục",
  en: "Education",
};

export const Educations = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-4 print:gap-2">
      <Header title={title[language]} />
      <Timeline
        items={data[language].map((el) => {
          return (
            <Item
              key={el.title}
              title={el.title}
              subTitle={el.subTitle}
              lifeTime={el.lifeTime}
            />
          );
        })}
      />
    </div>
  );
};

const Item = (props: { title: string; subTitle: string; lifeTime: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold uppercase tracking-wide">{props.title}</p>
      <p>{props.subTitle}</p>
      <p className="text-sm print:text-[10px]">{props.lifeTime}</p>
    </div>
  );
};
