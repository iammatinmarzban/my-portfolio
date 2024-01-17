// I'm not aware of it's exact use
"use client";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { Roboto, Libre_Franklin } from "next/font/google";
import { MouseEvent, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const libre_franklin = Libre_Franklin({ subsets: ["latin"], weight: ["600"] });
export default function Home() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    let xPosition = clientX - left;
    let yPostition = clientY - top;

    mouseX.set(xPosition);
    mouseY.set(yPostition);

    // setMousePosition({ x: xPosition, y: yPostition });
  }

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      // setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    // return () => {
    //   window.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);
  return (
    <main className={roboto.className}>
      <div className="page bg-black h-screen w-full ">
        <div className=" alert bg-gradient-to-r from-[#152C4E]  to-[#152C4E]   via-[#155ae466] w-full my-auto p-2 text-center ">
          <span className="text-white text-sm">
            To get the latest information about me click{" "}
            <a className="hover:underline cursor-pointer underline"> here</a>.
          </span>
        </div>
        <div className="sticky-navbar flex justify-between text-white py-5 px-4 sticky  mx-auto ">
          <div className="left_side flex gap-2 ml-2 ">
            <button
              className="
              Logo
              hover:bg-white hover:text-[#313131] duration-150 "
            >
              Logo
            </button>
            <button className="hover:bg-white hover:text-[#313131] duration-150 bg-[#313131] p-2 rounded">
              {/* <span className="relative inline-block h-[9px] w-[9px] rounded-full border border-black dark:border-white dark:shadow-dot-dark-mode after:absolute after:left-1/2 after:top-1/2 after:block after:h-0 after:w-0 after:origin-center after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-black after:shadow-dot-light-mode after:transition-all dark:after:bg-white dark:after:text-black lg:after:bg-white lg:after:shadow-dot-dark-mode dark:lg:after:shadow-arb-one-blue dark:lg:after:bg-arbitrum-one-blue"></span>   */}
              Products
            </button>
            <button className="hover:bg-white hover:text-[#313131] duration-150 bg-[#313131] p-2 rounded  ">
              Portal
            </button>
            <button className="hover:bg-white hover:text-[#313131] duration-150 bg-[#313131] p-2 rounded">
              Bridge
            </button>
            <button className="hover:bg-white hover:text-[#313131] duration-150 bg-[#313131] p-2 rounded">
              Commiunity
            </button>
            <button className="hover:bg-white hover:text-[#313131] duration-150 bg-[#313131] p-2 rounded">
              Resources
            </button>
          </div>
          <div className="right_side flex gap-3 mr-2 items-center ">
            <svg
              className="
                Linked_in_logo
                fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              {/* --!Font Awesome Free 6.5.1 by @fontawesome -
                https://fontawesome.com License -
                https://fontawesome.com/license/free Copyright 2024 Fonticons,
                Inc. */}
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
            <svg
              className="
                Discord_logo
                fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 640 512"
            >
              {/* --!Font Awesome Free 6.5.1 by @fontawesome -
                https://fontawesome.com License -
                https://fontawesome.com/license/free Copyright 2024 Fonticons,
                Inc.-- */}
              <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
            </svg>

            <button className=" p-2 rounded text-black bg-white">Docs</button>
          </div>
        </div>
        <div
          onMouseMove={handleMouseMove}
          className="group h-[32rem] overflow-hidden  mx-auto my-4 rounded text-center relative bg-gray-900 w-[97%]"
        >
          <motion.div
            className="pointer-events-none cursor-pointer inset-0 absolute group-hover:opacity-100 transition duration-300 opacity-0"
            style={{
              background: useMotionTemplate`radial-gradient(circle 500px at ${mouseX}px ${mouseY}px ,rgb(13 165 233 / 0.15),transparent 80%)`,
            }}
          />
          <div
            className=" content_inside_hover_board w-full flex justify-between text-white text-left items-end h-full
              "
          >
            <div className="left ml-2">
              <p
                className={libre_franklin.className}
                style={{
                  textAlign: "left",
                  marginBottom: "100px",
                }}
              >
                <TypeAnimation
                  sequence={[
                    "MATIN MARZBAN",
                    5000,
                    "FRONT END DEVELOPER",
                    5000,
                    "UI/UX DESGNER",
                    5000,
                  ]}
                  speed={15}
                  repeat={Infinity}
                  style={{ fontSize: "10px" }}
                />
              </p>
              <h1 className="text-[60px] w-[60%] mb-1">
                Welcome to the future of Front End Development
              </h1>
            </div>
            <div className="right"></div>
          </div>
        </div>
        <div className="second_section">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="802"
            height="668"
            viewBox="0 0 802 668"
            fill="none"
          >
            <path
              d="M800.771 41.9294C738.224 -41.7361 526.794 9.52977 319.558 155.483M169.058 281.167C32.7873 416.713 -32.6005 557.209 19.0663 626.321C58.0542 678.473 154.89 678.197 272.5 635.241M795.4 191.5C759.287 271.7 682.509 366.138 578.261 453"
              stroke="black"
              stroke-opacity="0.35"
              stroke-width="0.75"
              stroke-dasharray="3 8"
            ></path>
          </svg> */}
        </div>
      </div>
    </main>
  );
}
