"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function WordGenerator() {
  const t = useTranslations();
  const [word, setWord] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // List of random English words
  const words = [
    "Adventure",
    "Harmony",
    "Serendipity",
    "Luminous",
    "Whisper",
    "Cascade",
    "Enigma",
    "Tranquil",
    "Radiance",
    "Velvet",
    "Ethereal",
    "Labyrinth",
    "Mellifluous",
    "Epiphany",
    "Solitude",
    "Zenith",
    "Quixotic",
    "Petrichor",
    "Nebula",
    "Euphoria",
    "Sonorous",
    "Halcyon",
    "Effervescent",
    "Lullaby",
    "Quintessence",
    "Eloquent",
    "Wanderlust",
    "Incandescent",
    "Surreptitious",
    "Melancholy",
    "Rhapsody",
    "Ephemeral",
    "Serenity",
    "Cascade",
    "Luminescence",
    "Whimsical",
    "Nostalgia",
    "Resilience",
    "Brilliant",
    "Enchanted",
  ];

  const generateWord = () => {
    setIsGenerating(true);

    // Simulate loading
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setWord(words[randomIndex]);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-32 w-full flex items-center justify-center">
        {word ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-center"
          >
            {word}
          </motion.div>
        ) : (
          <div className="text-gray-400 text-center">
            {t("features.wordGenerator.instructions")}
          </div>
        )}
      </div>

      <Button
        onClick={generateWord}
        disabled={isGenerating}
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        {isGenerating
          ? t("features.wordGenerator.generating")
          : t("features.wordGenerator.generate")}
      </Button>
    </div>
  );
}
