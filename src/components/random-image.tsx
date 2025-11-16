"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <Image
      src={image}
      alt="Random Generator App Screenshot"
      width={600}
      height={1200}
      className="h-full w-full"
      priority
    />
  );
}
