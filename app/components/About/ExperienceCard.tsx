import React from "react";
import { string } from "yup";

function ExperienceCard({
  startingDate,
  finishingDate,
  role,
  exactRoleName,
  description,
}: any) {
  return (
    <div className="experience-card md:flex items-baseline text-gray-400 p-3 border-[1px] border-transparent rounded hover:border-blue-300 hover:border-opacity-10  duration-200 hover:bg-[#1c2b4074]">
      <div className="duration-section basis-1/5 text-xs font-medium  text-gray-500 pr-2">
        <div className="flex items-center">
          <span>{startingDate}</span>
          <span className="dash__ w-3 h-[0.07em]  bg-gray-500 mx-2"></span>
          <span>{finishingDate}</span>
        </div>
      </div>
      <div className="right basis-4/5">
        <div className="name text-white text-base font-medium">{role}</div>
        <div className="role text-gray-500">{exactRoleName}</div>
        <div className="description mt-3 text-sm">{description}.</div>
      </div>
    </div>
  );
}

export default ExperienceCard;
