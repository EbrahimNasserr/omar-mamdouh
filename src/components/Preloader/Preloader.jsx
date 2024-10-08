"use client";
import { preLoaderAnim } from "@/animations/Anmitaions";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className=" preloader h-screen w-full bg-slate-900 text-slate-200 fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center overflow-hidden">
      <h1 className=" texts-container flex items-center justify-between h-16 w-[350px] sm:w-96 text-3xl font-bold overflow-hidden">
        <span> م/ عمر ممدوح</span>
        <span>في</span>
        <span>الرياضيات</span>
      </h1>
    </div>
  );
};

export default Preloader;
