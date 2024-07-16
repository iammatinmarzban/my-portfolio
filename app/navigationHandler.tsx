"use client";
import { useRef, useState } from "react";
export default function navigationHandler(param: any) {
  const about = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState("about");

  const style = "";
  const active = "";

  const handleNavClick = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
}
