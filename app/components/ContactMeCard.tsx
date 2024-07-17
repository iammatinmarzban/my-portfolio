import Link from "next/link";
import React from "react";

function ContactMeCard({ name, icon, description, link }: any) {
  return (
    <Link href={link}>
      <div className="card flex flex-col  ">
        <div className="top flex items-center  gap-3">
          {icon}
          <span className="font-bold">{name}</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="em"
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
        <div className="bottom font-extralight mt-2">{description}</div>
      </div>
    </Link>
  );
}

export default ContactMeCard;
