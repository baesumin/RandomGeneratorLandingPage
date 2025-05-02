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
    <div className="relative h-[450px] w-[250px] overflow-hidden rounded-xl border-8 border-gray-900 bg-gray-900 shadow-xl">
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <img
          src={image}
          alt="Random Generator App Screenshot"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
