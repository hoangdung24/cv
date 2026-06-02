import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";

const shortDescription = {
  vi: "Là một người yêu thích khám phá và tò mò về cách thế giới vận hành. Bản thân không chấp nhận những điều hiển nhiên và luôn đi tìm kiếm câu trả lời để thỏa mãn sự thiếu hiểu biết của chính mình.",
  en: "As someone who loves exploration and is curious about how the world works, I refuse to accept things at face value and am always searching for answers to satisfy my own curiosity.",
};

const title = {
  vi: "Mô tả",
  en: "Profile",
};

export const ShortDescription = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-4 print:gap-2">
      <Header title={title[language]} />
      <p>{shortDescription[language]}</p>
      <blockquote className="border-l-4 border-background-light pl-3 italic">
        "What you seek is seeking you." - Rumi
      </blockquote>
    </div>
  );
};
