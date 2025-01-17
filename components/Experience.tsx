import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";
import { comma } from "postcss/lib/list";

const Experience = () => {
  return (
    <div className="pt-20 md:pt-32" id="projects">
      <h1 className="heading">
      Work {""}
        <span className="text-purple">  Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-col-1 gap-6">
        {workExperience.map(({ title, company, desc }) => (
          <Button
            key={title}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
          >
             <div className="flex lg:flex-row flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* <img
                src={thumbnail}
                alt={thumbnail}
                className="lg:w-32 md:w-20 w-16"
              /> */}

              <div className="lg:ms-5">
                <h1 className="text-center text-xl md:text-2xl font-bold">
                  {title}
                </h1>

                <h3 className="text-center text-white-100 mt-1 font-semibold">
                  {company}
                </h3>
                <p className="text-center text-white-100 mt-3 font-semibold">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
