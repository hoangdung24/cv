import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";

const data = {
  vi: [
    {
      title: "Ngôn ngữ chính",
      items: ["TypeScript", "JavaScript", "Dart"],
    },
    {
      title: "Ngôn ngữ hỗ trợ",
      items: ["Python", "Rust"],
    },
    {
      title: "Frameworks",
      items: ["Expo", "Flutter", "NextJS", "SolidJS"],
    },
    {
      title: "Kiến thức hỗ trợ",
      items: ["Design Patterns", "Software Architecture", "AI Agent", "SQL"],
    },
    {
      title: "Ngoại ngữ",
      items: ["Tiếng Anh"],
    },
  ],
  en: [
    {
      title: "Core Languages",
      items: ["TypeScript", "JavaScript", "Dart"],
    },
    {
      title: "Supporting Languages",
      items: ["Python", "Rust"],
    },
    {
      title: "Frameworks",
      items: ["Expo", "Flutter", "NextJS", "SolidJS"],
    },
    {
      title: "Supporting Knowledge",
      items: ["Design Patterns", "Software Architecture", "AI Agent", "SQL"],
    },
    {
      title: "Languages",
      items: ["English"],
    },
  ],
};

const title = {
  vi: "Kĩ năng & Kiến thức",
  en: "Skills & Knowledge",
};

export const Skills = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-4 print:gap-2">
      <Header title={title[language]} />
      <div className="flex flex-col gap-4 print:gap-2">
        {data[language].map((skill) => {
          return (
            <div key={skill.title} className="flex flex-col gap-2">
              <p className="font-bold">{skill.title}</p>
              <div className="grid grid-cols-2 gap-2">
                {skill.items.map((el) => {
                  return (
                    <div
                      key={el}
                      className="grid grid-cols-[auto_minmax(0,1fr)] gap-2 print:gap-1 relative items-center"
                    >
                      <div className="size-1.5 print:size-1 rounded-full bg-decoration" />
                      <span>{el}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
