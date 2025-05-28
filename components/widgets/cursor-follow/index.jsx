"use client";

import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
      setActive(true);
    }
    function handleMouseLeave() {
      setActive(false);
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        pointerEvents: "none",
        width: active ? 30 : 20,
        height: active ? 30 : 20,
        borderRadius: "50%",
        backgroundColor: "rgba(220, 38, 38, 0.9)",
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease, height 0.2s ease",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
      className="cursor-follower"
    />
  );
}
