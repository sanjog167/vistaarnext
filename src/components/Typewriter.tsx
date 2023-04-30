"use client";

import { Typewriter as TW } from "react-simple-typewriter";

export default function Typewriter(props: { words: string[] }) {
  return (
    <TW
      words={props.words}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  );
}
