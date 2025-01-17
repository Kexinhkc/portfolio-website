import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="pt-20 md:pt-32" id="projects">
      <h1 className="heading">
        A Small Collection of {" "}
        <span className="text-purple">My Projects</span>
      </h1>
      <div id="outsidemapdiv" className="flex flex-wrap items-center justify-center p-4 gap-y-[20px] sm:gap-y-[35px] lg:gap-[40px] 2xl:gap-[60px] mt-[20px]">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          // sm:h-[41rem] lg:min-h-[39rem] xl:max-h-[10rem]

          <div id="outerpindiv" key={id} className="flex items-center justify-center p-4 border border-white/[0.1] rounded-2xl h-[28rem] lg:min-h-[38rem] w-[80vw] sm:w-[40vw] ">
             <PinContainer
              title={link}
              href={link}
            >
              <div id="imagediv" className="relative flex items-center justify-center w-full h-full mb-10 shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                

                <div className="absolute w-1/2 translate-x-1/2 h-full z-10 top-14 sm:top-20 rotate-3"> 
                <img
                  src={img}
                  alt="Project Thumbnail"
                  className="object-fill"
                /></div>
                </div>
               
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2 sm:line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm "
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                
                  <a href={link}>
                  <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                  </a>
                
               
              </div>
            </PinContainer>

          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;