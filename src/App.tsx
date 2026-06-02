import "./App.css";
import { Download } from "./components/Download";
import { Educations } from "./components/Educations";
import { Experience } from "./components/Experience";
import { GeneralInfo } from "./components/GeneralInfo";
import { Interests } from "./components/Interests";
import Language from "./components/Language";
import { Projects } from "./components/Projects";
import ScrollUp from "./components/ScrollUp";
import { ShortDescription } from "./components/ShortDescription";
import { Skills } from "./components/Skills";
import Theme from "./components/Theme";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div
          id="main"
          className="max-w-6xl lg:mx-auto xl:my-4 overflow-hidden print:w-[21cm] print:h-[29.7cm] print:m-0 bg-background "
        >
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-12 md:col-span-4 md:bg-background-alt p-6 flex flex-col gap-8 relative print:p-4 print:gap-4 print:col-span-4 print:bg-background-alt">
              <GeneralInfo />
              <ShortDescription />
              <Educations />
              <Skills />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Download />
                <Theme />
                <Language />
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 print:col-span-8 p-6 print:p-4 flex flex-col gap-8 print:gap-4 print:justify-between bg-background print:bg-background">
              <Experience />
              <Projects />
              <Interests />
            </div>
          </div>
        </div>
        <ScrollUp />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
