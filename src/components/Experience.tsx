import type { ReactNode } from "react";
import { Header } from "./Header";
import { Timeline } from "./Timeline";
import { useLanguage } from "../hooks/useLanguage";

const data = {
  vi: [
    {
      title: "Tìm kiếm giá trị bản thân",
      subTitle: "2015 - 2021 | Nhiều công ty và nhiều vị trí khác nhau",
      description: (
        <p>
          Trải nghiệm nhiều công việc khác nhau giúp tôi biết được điều gì là có
          giá trị với bản thân, điều bản thân làm tốt nhất, đâu là nơi bản thân
          muốn dành thời gian để phát triển nhất.
        </p>
      ),
    },
    {
      title: "Frontend Developer",
      subTitle: "2021 - 2026 | Công ty T-Solution Việt Nam",
      description: (
        <div className="flex flex-col gap-2">
          <p>
            Tham gia phát triển dự án từ giai đoạn ý tưởng cho đến khi sản phẩm
            được ra mắt, tiếp tục cải tiến sản phẩm dựa trên phản hồi của người
            dùng.
          </p>
          <p>
            Chịu trách nhiệm chính trong việc lựa chọn công nghệ, tư vấn giải
            pháp, thiết kế kiến trúc, triển khai giao diện người dùng, tối ưu
            hiệu suất.
          </p>
        </div>
      ),
    },
  ],
  en: [
    {
      title: "Discovering Core Values",
      subTitle: "2015 - 2021 | Various companies and positions",
      description: (
        <p>
          Experiencing diverse roles helped me understand what truly brings
          value to myself, what I excel at, and where I want to dedicate my time
          for growth.
        </p>
      ),
    },
    {
      title: "Frontend Developer",
      subTitle: "2021 - 2026 | T-Solution Vietnam Company",
      description: (
        <div className="flex flex-col gap-2">
          <p>
            Participated in project development from the ideation stage to
            product launch, continuously improving the product based on user
            feedback.
          </p>
          <p>
            Held primary responsibility for tech stack selection, solution
            consulting, architecture design, UI implementation, and performance
            optimization.
          </p>
        </div>
      ),
    },
  ],
};

const title = {
  vi: "Kinh nghiệm",
  en: "Experience",
};

export const Experience = () => {
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
              description={el.description}
            />
          );
        })}
      />
    </div>
  );
};

const Item = (props: {
  title: string;
  subTitle: string;
  description: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold uppercase">{props.title}</p>
      <p>{props.subTitle}</p>
      {props.description}
    </div>
  );
};
