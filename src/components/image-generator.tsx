"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function ImageGenerator() {
  const t = useTranslations();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = () => {
    setIsLoading(true);

    // Generate a random seed for the image
    const randomSeed = Math.floor(Math.random() * 1000);

    // Create a new image to preload
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = `https://picsum.photos/seed/${randomSeed}/240/180`;

    img.onload = () => {
      setImageUrl(img.src);
      setIsLoading(false);
    };

    img.onerror = () => {
      // Fallback in case of error
      setImageUrl(`https://picsum.photos/240/180?random=${randomSeed}`);
      setIsLoading(false);
    };
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-[180px] w-[240px] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
        {isLoading ? (
          <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
        ) : imageUrl ? (
          <motion.img
            src={imageUrl}
            alt="Random generated image"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="text-gray-400 text-center p-4">
            {t("features.imageGenerator.instructions")}
          </div>
        )}
      </div>

      <Button
        onClick={generateImage}
        disabled={isLoading}
        className="bg-purple-500 hover:bg-purple-600 text-white"
      >
        {isLoading
          ? t("features.imageGenerator.generating")
          : t("features.imageGenerator.generate")}
      </Button>
    </div>
  );
}
