// I'm not aware of it's exact use
"use client";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { Roboto, Libre_Franklin, Inter } from "next/font/google";
import Link from "next/link";
import { MouseEvent, MouseEventHandler, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
// const libre_franklin = Libre_Franklin({ subsets: ["latin"], weight: ["600"] });
export default function Home() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  function navigate() {}

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    let xPosition = clientX - left;
    let yPostition = clientY - top;
    mouseX.set(xPosition);
    mouseY.set(yPostition);
  }
  return (
    <main className={inter.className}>
      <div
        onMouseMove={handleMouseMove}
        className="group/bg mx-auto text-center relative bg-[#051731] min-h-screen "
      >
        <motion.div
          className="pointer-events-none  inset-0 absolute group-hover/bg:opacity-90 transition duration-300 "
          style={{
            background: useMotionTemplate`radial-gradient(circle 500px at ${mouseX}px ${mouseY}px ,rgb(13 165 233 / 0.1),transparent 80%)`,
          }}
        />
        <div
          className="content   flex justify-between  text-gray-400 max-w-screen-xl mx-auto pt-24 items-start 
        "
        >
          <div className="left text-left basis-2/5 sticky  top-24">
            <div className="name font-bold text-5xl text-slate-200 ">
              <h1>Matin Marzban</h1>
            </div>
            <div className="experties text-slate-200 my-2 text-2xl">
              <h2>Front End Developer </h2>
            </div>
            <div className="description max-w-xs my-3 text-slate-400">
              <p>
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
            </div>
            <div className="navbar my-14 text-gray-400 uppercase font-bold flex flex-col gap-7 text-xs">
              <div className="navbar-item flex items-center about gap-2 group/about cursor-pointer max-w-min">
                <span className="w-8 h-[0.1em] bg-gray-400  duration-150 group-hover/about:bg-white group-hover/about:w-12 pointer "></span>
                <div className="group-hover/about:text-white">About</div>
              </div>
              <div className="navbar-item experience flex items-center gap-2 group/jobExperience cursor-pointer max-w-min">
                <span className="w-8 h-[0.1em] bg-gray-400 group-hover/jobExperience:bg-white group-hover/jobExperience:w-12 duration-150"></span>
                <div
                  onClick={() => {
                    navigate();
                  }}
                  className="group-hover/jobExperience:text-white"
                >
                  Experience
                </div>
              </div>
              <div className="navbar-item project flex items-center gap-2 group/project max-w-min cursor-pointer">
                <span className="w-8 h-[0.1em] bg-gray-400  group-hover/project:bg-white group-hover/project:w-12 duration-150"></span>
                <div className="group-hover/project:text-white">project</div>
              </div>
            </div>
            <div className="contact_me flex flex-col  gap-5 mt-10 text-xs ">
              <div className="Email flex gap-2 items-center  text-gray-400 fill-gray-400 border-2 border-transparent rounded-md py-3 ">
                {/* <svg
                    className="w-6 h-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    !--!Font Awesome Free 6.5.1 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2024
                    Fonticons, Inc.--
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg> */}
                <div className="email-text flex flex-col">
                  <h3>Email</h3>
                  <h3 className="hover:underline">
                    matinmarzban1271@gmail.com
                  </h3>
                </div>
              </div>
              <div className="phone_number flex flex-col  fill-gray-400 text-gray-400 gap-2">
                <h3>Call</h3>
                <h3 className="hover:underline">+98-9175271271</h3>
              </div>
            </div>
            <div className="linkedIcons flex gap-6 mt-16">
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
          <div className="right text-left basis-1/2 text-gray-400  top-24 text-base  ">
            <div className="About">
              <div className="first">
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
                  {/* add a joke inside a div  */}
                  <a href="https://bruno-simon.com/">Bruno Simons</a>
                </span>
              </div>
              <div className="third mt-6">
                I manage to stay updated through online communities, Youtube and
                documentations on upcoming and existing technologies.
              </div>
            </div>

            <div className="Experience min-w-full flex flex-col gap-2  py-3 my-60 ">
              <div className="experience-card flex items-baseline text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10  duration-200 hover:bg-[#1c2b4074]">
                <div className="left basis-1/5 text-xs font-medium  text-gray-500 pr-2">
                  <div className="flex items-center">
                    <span>2020</span>
                    <span className="dash__ w-3 h-[0.07em]  bg-gray-500 mx-2"></span>
                    <span>PRESENT</span>
                  </div>
                </div>
                <div className="right basis-4/5">
                  <div className="name text-white text-base font-medium">
                    Freelancer Developer
                  </div>
                  <div className="role text-gray-500">
                    Front End Developer & UI UX designer
                  </div>
                  <div className="description mt-3 text-sm">
                    Build, style, and ship high-quality websites, design
                    systems, mobile apps, and digital experiences for a diverse
                    array of projects for clients including Asanbar Business and
                    more.
                  </div>
                </div>
              </div>
              <div className="experience-card flex items-baseline text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10 duration-200 hover:bg-[#1c2b4074]">
                <div className="left basis-1/5 text-xs font-medium text-gray-500 pr-2">
                  <div className="flex items-center">
                    <span>2019</span>
                    <span className="dash__ w-3 h-[0.07em] bg-gray-500 mx-2"></span>
                    <span>2022</span>
                  </div>
                </div>
                <div className="right basis-4/5">
                  <div className="name text-white text-base font-medium">
                    Startup Studio
                  </div>
                  <div className="role text-gray-500">
                    Front-End Developer & UI/UX Collaborator
                  </div>
                  <div className="description mt-3 text-sm">
                    Developed and collaborated on user interfaces for multiple
                    early-stage startups, focusing on clean code, accessibility,
                    and user experience across web and mobile platforms.
                  </div>
                </div>
              </div>
              <div className="experience-card flex items-baseline text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10 duration-200 hover:bg-[#1c2b4074]">
                <div className="left basis-1/5 text-xs font-medium text-gray-500 pr-2">
                  <div className="flex items-center">
                    <span>2018</span>
                    <span className="dash__ w-3 h-[0.07em] bg-gray-500 mx-2"></span>
                    <span>2021</span>
                  </div>
                </div>
                <div className="right basis-4/5">
                  <div className="name text-white text-base font-medium">
                    Tech Agency
                  </div>
                  <div className="role text-gray-500">
                    Front-End Developer & Performance Specialist
                  </div>
                  <div className="description mt-3 text-sm">
                    Built responsive and performant web experiences for diverse
                    clients, leveraging modern frameworks and optimization
                    techniques to ensure fast loading times and smooth user
                    interactions.
                  </div>
                </div>
              </div>
              <div className="experience-card flex items-baseline text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10 duration-200 hover:bg-[#1c2b4074]">
                <div className="left basis-1/5 text-xs font-medium text-gray-500 pr-2">
                  <div className="flex items-center">
                    <span>2017</span>
                    <span className="dash__ w-3 h-[0.07em] bg-gray-500 mx-2"></span>
                    <span>2020</span>
                  </div>
                </div>
                <div className="right basis-4/5">
                  <div className="name text-white text-base font-medium">
                    E-commerce Startup
                  </div>
                  <div className="role text-gray-500">
                    Front-End Developer & Accessibility Advocate
                  </div>
                  <div className="description mt-3 text-sm">
                    Developed and maintained an accessible and user-friendly
                    e-commerce platform, prioritizing inclusive design
                    principles to ensure positive user experience for all
                    abilities.
                  </div>
                </div>
              </div>
            </div>
            <div className="Project my-60 flex flex-col gap-1">
              <Link href={"/Asanbar"}>
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
              <Link href={"/"}>
                <div className="project-card  flex justify-between items-center  text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10  duration-200 hover:bg-[#1c2b4074] cursor-pointer group/project my-3">
                  <div className="left flex  gap-6">
                    <div className="left">
                      <img
                        className="w-[100px] h-auto "
                        src="logo1.png"
                        alt="driver"
                      />
                    </div>
                    <div className="right">
                      <div className="name text-white text-base font-medium group-hover/project:text-[#a5d1e5]">
                        Ninja Org
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
                        src="logo2.png"
                        alt="driver"
                      />
                    </div>
                    <div className="right">
                      <div className="name text-white text-base font-medium group-hover/project:text-[#a5d1e5]">
                        Arrow
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
                        src="logo3.jpg"
                        alt="driver"
                      />
                    </div>
                    <div className="right">
                      <div className="name text-white text-base font-medium group-hover/project:text-[#a5d1e5]">
                        No LLC
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
