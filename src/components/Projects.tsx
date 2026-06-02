import clsx from "clsx";
import { Header } from "./Header";
import { useLanguage } from "../hooks/useLanguage";

const data = {
  vi: [
    {
      title: "Hệ thống quản lý doanh nghiệp ERP",
      techStack: ["NextJS", "Material UI", "Zustand"],
      description:
        "Triển khai giao diện hệ thống quản lý doanh nghiệp ERP cho công ty chuyên phân phối sản phẩm nguyên vật liệu pha chế.",
    },
    {
      title: "Ứng dụng tích điểm, đổi điểm - Trang quản trị",
      techStack: ["NextJS", "Chakra UI", "Zustand"],
      additionalCss: "print:hidden",
      description:
        "Tham gia phát triển ý tưởng và triển khai giao diện trang quản trị cho hệ thống. Chịu trách nhiệm lựa chọn công nghệ và kết quả của sản phẩm.",
    },
    {
      title: "Ứng dụng tích điểm, đổi điểm - App người dùng & App Người bán",
      techStack: [
        "Expo",
        "Firebase Messaging",
        "React Native Elements",
        "Zustand",
      ],
      description:
        "Tham gia phát triển ý tưởng và triển khai giao diện cho hệ thống. Chịu trách nhiệm lựa chọn công nghệ và kết quả của sản phẩm. Build, upload app lên App Store và Google Play.",
    },
    {
      title:
        "Ứng dụng tích điểm, đổi điểm V2 - Trang quản trị dành cho người bán",
      techStack: ["NextJS", "Shadcn UI", "Zustand"],
      description:
        "Đút kết kinh nghiệm từ phiên bản trước, triển khai một giao diện quản trị riêng dành cho người bán với quy trình tinh gọn. Các thiết lập nhiều bước được đưa lên web thay vì app để đơn giản trải nghiệm trên app nhất có thể. Chịu trách nhiệm lựa chọn công nghệ và kết quả của sản phẩm.",
    },
    {
      title: "Ứng dụng tích điểm, đổi điểm V2 - Trang quản trị dành cho admin",
      techStack: ["NextJS", "Shadcn UI", "Zustand"],
      description:
        "Triển khai lại giao diện trang quản trị dành cho admin với quy trình tinh gọn hơn. Chịu trách nhiệm lựa chọn công nghệ và kết quả của sản phẩm.",
      additionalCss: "print:hidden",
    },
    {
      title: "Ứng dụng tích điểm, đổi điểm V2 - App người dùng",
      techStack: [
        "Expo",
        "Firebase Messaging",
        "React Native Reusables",
        "Zustand",
      ],
      description:
        "Triển khai lại giao diện app người dùng với quy trình tinh gọn hơn. Chịu trách nhiệm lựa chọn công nghệ và kết quả của sản phẩm. Build, upload app lên App Store và Google Play.",
    },
    {
      title: "Ứng dụng tích điểm, đổi điểm V2 - App người bán",
      techStack: ["Flutter", "Shadcn UI", "Firebase Messaging", "Provider"],
      description:
        "Lựa chọn Flutter thay vì Expo cho app người bán nhằm đảm bảo tính ổn định trong quá trình vận hành, tối ưu tài nguyên sử dụng và có thể sử dụng trên nhiều thiết bị như điện thoại, máy tính bảng, máy POS... Build, upload app lên App Store và Google Play.",
    },
  ],
  en: [
    {
      title: "ERP Enterprise Management System",
      techStack: ["NextJS", "Material UI", "Zustand"],
      description:
        "Implemented the frontend dashboard for an ERP enterprise management system tailored for a company specializing in distributing beverage ingredients.",
    },
    {
      title: "Loyalty Points & Rewards Application - Admin Dashboard",
      techStack: ["NextJS", "Chakra UI", "Zustand"],
      additionalCss: "print:hidden",
      description:
        "Participated in conceptual production and frontend implementation of the admin dashboard. Held primary responsibility for tech stack selection and product delivery.",
    },
    {
      title: "Loyalty Points & Rewards Application - User App & Merchant App",
      techStack: [
        "Expo",
        "Firebase Messaging",
        "React Native Elements",
        "Zustand",
      ],
      description:
        "Participated in conceptual production and UI implementation for the system. Held primary responsibility for tech stack selection and product delivery. Managed building and deploying applications to the App Store and Google Play.",
    },
    {
      title: "Loyalty Points & Rewards Application V2 - Merchant Web Dashboard",
      techStack: ["NextJS", "Shadcn UI", "Zustand"],
      description:
        "Leveraged insights from the previous version to build a dedicated, optimized admin dashboard for merchants. Multi-step configurations were migrated to the web to maximize app-side simplicity. Held primary responsibility for tech stack selection and product delivery.",
    },
    {
      title: "Loyalty Points & Rewards Application V2 - Admin Dashboard",
      techStack: ["NextJS", "Shadcn UI", "Zustand"],
      description:
        "Re-implemented the admin system dashboard with a more optimized workflow. Held primary responsibility for tech stack selection and product delivery.",
      additionalCss: "print:hidden",
    },
    {
      title: "Loyalty Points & Rewards Application V2 - User App",
      techStack: [
        "Expo",
        "Firebase Messaging",
        "React Native Reusables",
        "Zustand",
      ],
      description:
        "Re-implemented the user-facing mobile app interface with a more optimized flow. Held primary responsibility for tech stack selection and product delivery. Managed building and deploying applications to the App Store and Google Play.",
    },
    {
      title: "Loyalty Points & Rewards Application V2 - Merchant App",
      techStack: ["Flutter", "Shadcn UI", "Firebase Messaging", "Provider"],
      description:
        "Selected Flutter over Expo for the merchant app to ensure operational stability, optimize resource utilization, and provide cross-device support such as smartphones, tablets, and POS devices. Managed building and deploying applications to the App Store and Google Play.",
    },
  ],
};

const title = {
  vi: "Dự án",
  en: "Projects",
};

const techStackLabel = {
  vi: "Công nghệ sử dụng",
  en: "Tech Stack",
};

export const Projects = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-4 print:gap-2">
      <Header title={title[language]} />
      <div className="flex flex-col gap-4">
        {data[language].map((el, idx) => {
          return (
            <Item
              title={el.title}
              techStack={el.techStack}
              description={el.description}
              additionalCss={el.additionalCss}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

const Item = (props: {
  title: string;
  techStack: string[];
  description: string;
  additionalCss?: string;
}) => {
  const { language } = useLanguage();

  return (
    <div
      className={clsx(
        "flex flex-col gap-2 md:gap-1 print:gap-1",
        props.additionalCss,
      )}
    >
      <p className="font-bold uppercase">{props.title}</p>
      <p className="font-semibold">{techStackLabel[language]}:</p>
      <div className="flex flex-col lg:flex-row gap-x-6 gap-y-2 print:gap-4 print:flex-row">
        {props.techStack.map((el, idx) => {
          return (
            <div className="flex items-center gap-2" key={idx}>
              <div className="size-1.5 print:size-1 rounded-full bg-decoration"></div>
              <span>{el}</span>
            </div>
          );
        })}
      </div>
      <p>{props.description}</p>
    </div>
  );
};
