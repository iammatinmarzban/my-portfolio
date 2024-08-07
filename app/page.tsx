"use client";

import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { Inter } from "next/font/google";
import Link from "next/link";

// import navigationHandler from "./navigationHandler";

import { MouseEvent, useRef, useState } from "react";
import ExperienceCard from "./components/About/ExperienceCard";
import ContactMeCard from "./components/ContactMeCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const about = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState("about");
  const [showContactMenu, setShowContactMenu] = useState(false);

  // Framer motion   back-light mouse-responsive-animation set up
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  // Function for Creating Backlight Effect
  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    let xPosition = clientX - left;
    let yPostition = clientY - top;
    mouseX.set(xPosition);
    mouseY.set(yPostition);
  }
  ``;
  // How does this work?
  // How does it know where to go?
  // Added a {ref} to the parts intended to scroll to
  const handleNavClick = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={inter.className}>
      {/* className="group/bg mx-auto text-center relative  inset-0 bg-[#051731] min-h-lvh min-w-max" */}
      {true && (
        <div
          className={`contact-me-menu fixed inset-0 bg-[#030e1d] opacity-80  z-10 text-white  h-dvh   ${
            showContactMenu
              ? "translate-y-0 duration-300"
              : "  translate-y-full "
          }
          `}
        >
          <div className="content-inside w-9/12 mx-auto mt-8 h-full ">
            <div className="text flex items-center justify-between pt-5 ">
              <div className="left flex font-extralight items-center">
                <span>Contact Links</span>
              </div>

              <div>
                <svg
                  onClick={() => {
                    setShowContactMenu(false);
                  }}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
                </svg>
              </div>
            </div>
            <div className="card-container flex flex-col gap-20 mt-12 justify-evenly w-4/5">
              <ContactMeCard
                name="LinkedIn"
                icon={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                  </svg>
                }
                description="Lets get in touch!"
                link="https://www.linkedin.com/in/matin-marzban-300371214"
              />
              <ContactMeCard
                name={"github"}
                icon={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                  </svg>
                }
                description={"Take a closer look of my code!"}
                link={"https://www.github.com/iammatinmarzban"}
              />
              <div className="Email-card">
                <a href="mailto:matinmarzban1271@Gamil.com">
                  <div className="card flex flex-col  ">
                    <div className="top flex items-center  gap-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="416"
                          height="320"
                          x="48"
                          y="96"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                          rx="40"
                          ry="40"
                        ></rect>
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                          d="M112 160l144 112 144-112"
                        ></path>
                      </svg>
                      <span className="font-bold">Email</span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="M268 112l144 144-144 144m124-144H100"
                        ></path>
                      </svg>
                    </div>
                    <div className="bottom font-extralight">
                      <span>matinmarzban1271@gmail.com</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="phone-number-card">
                <a href="tel:09175271271">
                  <div className="card flex flex-col  ">
                    <div className="top flex items-center  gap-3">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                        <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                      </svg>
                      <span className="font-bold">Phone Number</span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="M268 112l144 144-144 144m124-144H100"
                        ></path>
                      </svg>
                    </div>
                    <div className="bottom font-extralight">
                      <div></div>
                      <span>09175271271</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        onMouseMove={handleMouseMove}
        className="group/bg mx-auto text-center relative bg-[#051731] "
      >
        {/*  apart of framer motion package 
             it's set to the full screen   creating the background we want
        */}
        {/* className="pointer-events-none  inset-0 absolute group-hover/bg:opacity-90 transition duration-300" */}

        {/* display it's set to hidden   */}
        <motion.div
          className=" absolute top-0 right-0 left-0 bottom-0  group-hover/bg:opacity-60  transition duration-300 hidden lg:block pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(circle 400px at ${mouseX}px ${mouseY}px ,rgb(13 165 233 / 0.1),transparent 90%) `,
          }}
        />
        {/* page-content-text flex justify-between text-gray-400 max-w-screen-xl mx-auto pt-24 items-start  */}

        {/* Hardcoded BLUR property to CSS */}
        <div
          className={`page-content-text  lg:flex justify-between text-gray-400  mx-auto pt-14  md:pt-24 text-sm items-start px-8 ${
            showContactMenu ? "blur-sm" : ""
          }`}
        >
          {/* <div className="left text-left basis-2/5 sticky  top-24"> */}
          <div className="left-part-large-screen text-left lg:sticky top-24">
            {/* <div className="name font-bold text-5xl text-slate-200 "> */}
            <div className="name font-bold text-3xl text-slate-200 ">
              <h1>Matin Marzban</h1>
            </div>
            <div className="experties text-slate-200 my-2 text-base italic tracking-tight">
              <h2>Front End Developer </h2>
            </div>
            <div className="description  text-slate-400 text-sm">
              <p>
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
            </div>
            <div className="conatact-icon-moblie fixed bottom-3 right-3  w-10 h-10 rounded">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className=""
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg> */}

              {!showContactMenu && (
                <div className="">
                  <div
                    onClick={() => {
                      setShowContactMenu(true);
                    }}
                    className="contact-links-mobile bottom-0 left-0  w-full py-6 border-t-[1px] border-gray-50 backdrop-blur-md lg:hidden fixed "
                  >
                    <div className="text-inside  flex items-center justify-center text-gray-50 text-xl ">
                      <span className="">Contact Links</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* <div className="contact_me  flex-col  gap-5 mt-5  hidden">
              <div className="Email flex gap-2 items-center  text-gray-400 fill-gray-400  border-[1px] border-transparent rounded-md py-3 ">
                <div className="email-text flex flex-col">
                  <h3>Email</h3>
                  <h3 className="hover:underline">
                    matinmarzban1271@gmail.com
                  </h3>
                </div>
              </div>
              <div className="phone_number flex flex-col  fill-gray-400 text-gray-400 gap-2  border-[1px] border-transparent">
                <h3>Call</h3>
                <h3 className="hover:underline">+98-9175271271</h3>
              </div>
            </div> */}

            <div className="navbar my-14 text-gray-400 uppercase font-bold lg:flex flex-col gap-7 text-xs hidden ">
              <div className="navbar-item flex items-center about gap-2 group/about cursor-pointer max-w-min">
                <span
                  className={`w-8 h-[0.1em] bg-gray-400 group-hover/about:bg-white group-hover/about:w-12 duration-150 ${
                    isActive == "about"
                      ? "bg-white w-12"
                      : "w-8 h-[0.1em] bg-gray-400"
                  }`}
                ></span>
                <div
                  onClick={() => {
                    handleNavClick(about);
                    setIsActive("about");
                  }}
                  className={`group-hover/about:text-white ${
                    isActive == "about" ? "text-white" : "text-gray-400"
                  }`}
                >
                  About
                </div>
              </div>
              <div className="navbar-item experience flex items-center gap-2 group/jobExperience cursor-pointer max-w-min">
                <span
                  className={`w-8 h-[0.1em] bg-gray-400 group-hover/jobExperience:bg-white group-hover/jobExperience:w-12 duration-150 ${
                    isActive == "experience"
                      ? "bg-white w-12"
                      : "w-8 h-[0.1em] bg-gray-400"
                  }`}
                ></span>
                <div
                  onClick={() => {
                    // navigationHandler(experience);
                    handleNavClick(experience);
                    setIsActive("experience");
                  }}
                  className={`group-hover/jobExperience:text-white ${
                    isActive == "experience" ? "text-white" : "text-gray-400"
                  }`}
                >
                  Experience
                </div>
              </div>
              <div className="navbar-item project flex items-center gap-2 group/project max-w-min cursor-pointer">
                <span
                  className={`w-8 h-[0.1em] bg-gray-400 group-hover/project:bg-white group-hover/project:w-12 duration-150 ${
                    isActive == "project"
                      ? "bg-white w-12"
                      : "w-8 h-[0.1em] bg-gray-400"
                  }`}
                ></span>
                <div
                  onClick={() => {
                    // navigationHandler(project);
                    handleNavClick(project);
                    setIsActive("project");
                    // console.log(isActive);
                  }}
                  className={`group-hover/project:text-white ${
                    isActive == "project" ? "text-white" : "text-gray-400"
                  }`}
                >
                  project
                </div>
              </div>
            </div>
            {/* <div className="contact_me flex flex-col  gap-5 mt-10 text-xs  "> */}
            <div className="contact_me-large-screen md: flex-col  gap-5 mt-10 text-xs lg:flex hidden  ">
              <a href="mailto:matinmarzban1271@gmail.com">
                <div className="Email flex gap-2 items-center  text-gray-400 fill-gray-400 border-2 border-transparent rounded-md py-3 ">
                  <div className="email-text flex flex-col gap-2  ">
                    <h3>Email</h3>
                    <h3 className="hover:underline">
                      matinmarzban1271@gmail.com
                    </h3>
                  </div>
                </div>
              </a>
              <a href="tel:+98-9175271271">
                <div className="phone_number flex flex-col  fill-gray-400 text-gray-400 gap-2">
                  <h3>Call</h3>
                  <h3 className="hover:underline">+98-9175271271</h3>
                </div>
              </a>
            </div>

            {/* <div className="linkedIcons flex gap-6 mt-16"> */}
            {/* Linked Icons is **HIDDEN** */}
            <div className="linkedIcons lg:flex gap-6 mt-16 hidden">
              <a href="https://www.github.com/iammatinmarzban">
                <svg
                  className="w-6 h-6 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  !--!Font Awesome Free 6.5.1 by @fontawesome -
                  https://fontawesome.com License -
                  https://fontawesome.com/license/free Copyright 2024 Fonticons,
                  Inc.--
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/matin-marzban-300371214">
                <svg
                  className="w-6 h-6 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  --!Font Awesome Free 6.5.1 by @fontawesome -
                  https://fontawesome.com License -
                  https://fontawesome.com/license/free Copyright 2024 Fonticons,
                  Inc.--
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/matinmarzbann">
                <svg
                  className="w-6 h-6 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  !--!Font Awesome Free 6.5.1 by @fontawesome -
                  https://fontawesome.com License -
                  https://fontawesome.com/license/free Copyright 2024 Fonticons,
                  Inc.--
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="https://twitter.com/MatinMarzban">
                <svg
                  className="w-6 h-6 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  !--!Font Awesome Free 6.5.1 by @fontawesome -
                  https://fontawesome.com License -
                  https://fontawesome.com/license/free Copyright 2024 Fonticons,
                  Inc.--
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a href="https://www.goodreads.com/user/show/132967048-matin-marzban">
                <svg
                  className="w-6 h-6 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  !--!Font Awesome Free 6.5.1 by @fontawesome
                  https://fontawesome.com License -
                  https://fontawesome.com/license/free Copyright 2024 Fonticons,
                  Inc.--``
                  <path d="M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7-22.3 15.5-52.8 14.1-70.8 5.7-37.1-17.3-49.5-58.6-46.8-97.2 4.3-60.9 40.9-87.9 75.3-87.5 46.9-.2 71.8 31.8 78.2 78.3zM448 88v336c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56zM330 313.2s-.1-34-.1-217.3h-29v40.3c-.8 .3-1.2-.5-1.6-1.2-9.6-20.7-35.9-46.3-76-46-51.9 .4-87.2 31.2-100.6 77.8-4.3 14.9-5.8 30.1-5.5 45.6 1.7 77.9 45.1 117.8 112.4 115.2 28.9-1.1 54.5-17 69-45.2 .5-1 1.1-1.9 1.7-2.9 .2 .1 .4 .1 .6 .2 .3 3.8 .2 30.7 .1 34.5-.2 14.8-2 29.5-7.2 43.5-7.8 21-22.3 34.7-44.5 39.5-17.8 3.9-35.6 3.8-53.2-1.2-21.5-6.1-36.5-19-41.1-41.8-.3-1.6-1.3-1.3-2.3-1.3h-26.8c.8 10.6 3.2 20.3 8.5 29.2 24.2 40.5 82.7 48.5 128.2 37.4 49.9-12.3 67.3-54.9 67.4-106.3z" />
                </svg>
              </a>
            </div>
          </div>
          <div
            ref={about}
            className="right-part-large-screen text-left basis-1/2 text-gray-400  top-24 text-base  "
          >
            <div className="About  pt-16">
              <h3 className="text-white pb-10 tracking-wide lg:lowercase">
                ABOUT
              </h3>
              <div className="first ">
                {" "}
                I initiated my journey into the realm of web development by
                engaging with <span>WordPress</span>. Subsequently, I made the
                deliberate choice to build my foundation from the ground up,
                delving into HTML, CSS, and Javascript. It was Javascript that
                particularly captured my interest. As I progressed, I ventured
                into <span>React</span> and
                <span>Next.js</span>, which currently constitute my primary
                areas of focus.
              </div>
              <div className="second mt-6">
                My enthusiasm for web development has experienced a notable
                transformation. Initially centered on the programming aspect, a
                pivotal moment occurred that expanded my interest to include
                design. This shift transpired during my initial exploration of
                websites crafted by
                <span>
                  <a href="https://bruno-simon.com/"> Bruno Simons</a>
                </span>
              </div>
              <div className="third mt-6">
                I manage to stay updated through online communities, Youtube and
                documentations on upcoming and existing technologies.
              </div>
            </div>

            <div
              ref={experience}
              className="Experience min-w-full flex flex-col gap-2  pt-16"
            >
              {/* <div className="experience-card flex items-baseline text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10  duration-200 hover:bg-[#1c2b4074]"> */}
              <h3 className="text-white pb-10 tracking-wide lg:lowercase">
                EXPERIENCE
              </h3>

              <ExperienceCard
                startingDate={"2023"}
                finishingDate={"2024"}
                role={"Emdad hadese"}
                exactRoleName={"Front End Developer & UI UX designer"}
                description={"Build and maintain responsive website"}
              />
            </div>
            <div
              ref={project}
              className="Project pt-16 flex flex-col gap-1 pb-16"
            >
              <h3 className="text-white pb-10 tracking-wide lg:lowercase">
                PROJECTS
              </h3>
              <Link href={"/Asanbar"}>
                <div className="project-card  flex justify-between items-center  text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10  duration-200 hover:bg-[#1c2b4074] cursor-pointer group/project my-3">
                  <div className="left flex  gap-6">
                    <div className="left">
                      <img
                        className="max-w-[100px] max-h-[80px] "
                        src="logo.png"
                        alt="driver"
                      />
                    </div>
                    <div className="right">
                      <div className="name text-white text-base font-medium group-hover/project:text-[#a5d1e5]">
                        AsanBar
                      </div>
                      <div className="role text-gray-500">
                        Front End Developer
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <svg
                      className="w-5 h-5 fill-white group-hover/project:fill-[#a5d1e5]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      !--!Font Awesome Free 6.5.1 by @fontawesome -
                      https://fontawesome.com License -
                      https://fontawesome.com/license/free Copyright 2024
                      Fonticons, Inc.--
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                  </div>
                </div>
              </Link>
              <Link href={"/"}>
                <div className="project-card  flex justify-between items-center  text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10  duration-200 hover:bg-[#1c2b4074] cursor-pointer group/project my-3">
                  <div className="left flex  gap-6">
                    <div className="left">
                      <img
                        className="w-[100px] h-auto "
                        src="logo.png"
                        alt="driver"
                      />
                    </div>
                    <div className="right">
                      <div className="name text-white text-base font-medium group-hover/project:text-[#a5d1e5]">
                        AsanBarCo
                      </div>
                      <div className="role text-gray-500">
                        Front End Developer
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <svg
                      className="w-5 h-5 fill-white group-hover/project:fill-[#a5d1e5]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      !--!Font Awesome Free 6.5.1 by @fontawesome -
                      https://fontawesome.com License -
                      https://fontawesome.com/license/free Copyright 2024
                      Fonticons, Inc.--
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                  </div>
                </div>
              </Link>
              {/* <Link href={"/"}>
                <div className="project-card  flex justify-between items-center  text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10  duration-200 hover:bg-[#1c2b4074] cursor-pointer group/project my-3">
                  <div className="left flex  gap-6">
                    <div className="left">
                      <img
                        src="logo-white.png"
                        className="w-[100px] h-auto"
                        alt="لوگو امداد حادثه"
                        width="180"
                      />
                    </div>
                    <div className="right">
                      <div className="name text-white text-base font-medium group-hover/project:text-[#a5d1e5]">
                        Emdad Hadese
                      </div>
                      <div className="role text-gray-500">
                        Front End Developer(PHP)
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <svg
                      className="w-5 h-5 fill-white group-hover/project:fill-[#a5d1e5]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      !--!Font Awesome Free 6.5.1 by @fontawesome -
                      https://fontawesome.com License -
                      https://fontawesome.com/license/free Copyright 2024
                      Fonticons, Inc.--
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                  </div>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
