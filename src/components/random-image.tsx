"use client";
import { useEffect, useState } from "react";

export default function RandomImage() {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const images = ["/screenshot.png", "/screenshot2.png", "/screenshot3.png"];
    const random = images[Math.floor(Math.random() * images.length)];
    setImage(random);
  }, []);

  if (!image) {
    return null;
  }

  return (
    <img
      src={image}
      alt="Random Generator App Screenshot"
      className="h-full w-full"
    />
  );
}
