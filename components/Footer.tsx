import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 md:pt-32 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72  min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opcaity-75 sm:opacity-35"
        />
      </div>

      <div className="flex flex-col items-center px-4 sm:px-0">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for a <span className="text-purple">motivated</span> and{" "}
          <span className="text-purple">collaborative</span> developer to join
          your team?
        </h1>

        <div className="pt-8"></div>

        <a href="mailto:kayleenhuang.work@gmail.com">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        {/* <p className="text-white-200 md:mt:10 my-5 text-center">
          I'd love to share more of my journey and experience
          team{" "}
        </p>   */}
      </div>

      <div className="flex items-center mt-16 md:flex-row flex-col justify-between">
        <div className="flex items-center md:gap-3 gap-6 mb-3">
          {socialMedia.map(({ id, img, link }) => (
            <a href={link} key={id} target="_blank" rel="noreferrer">
              <div
                key={id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 "
              >
                <img src={img} alt={img} width={20} height={20} />
              </div>{" "}
            </a>
          ))}
        </div>

        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Kayleen Huang
        </p>
      </div>
    </footer>
  );
};

export default Footer;
