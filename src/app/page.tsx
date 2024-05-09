import NavBarComponent from "@/components/NavBar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriterEffect";
import React from "react";

const HomePage = () => {
  const words = [
    {
      text: "Trusted",
    },
    {
      text: "Crowdfunding",
    },
    {
      text: "Using",
    },
    { text: "Blockchain", className: "text-blue-500 dark:text-blue-500" },
  ];
  return (
    <div className="h-screen w-screen flex flex-col">
      <NavBarComponent />
      <div className="dark:bg-gray-900 dark:bg-dot-white/[0.25] h-full w-full flex flex-col justify-center items-center p-5">
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  );
};

export default HomePage;
