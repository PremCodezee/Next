import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <>
      <div className="h-auto mt-10 md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 mt-28 relative z-10 w-full text-center">
          <h1 className=" md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Machine Learning With <p className="text-blue-300 underline mt-3">Dolph</p>
          </h1>
          <p className="mt-14 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Skip busywork with, Collect your thoughts with, Deepen understanding
            with, Think visually with, Find your flow with, Discover
            opportunities with, Learn something new with.
          </p>

          <div className="mt-8">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-100 dark:border-slate-800"
              > <p className="pl-2">Explore</p><p className="p-3 text-blue-300">AI/ML/DL</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
