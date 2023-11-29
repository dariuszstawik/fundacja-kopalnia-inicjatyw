"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ link }) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div>
      {/* <p>Here is my video!!</p> */}
      <div>{hasWindow && <ReactPlayer url={link} controls="true" />}</div>
    </div>
  );
}
