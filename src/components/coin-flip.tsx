"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function CoinFlip() {
  const t = useTranslations();
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<"heads" | "tails" | null>(null);

  const flipCoin = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setResult(Math.random() > 0.5 ? "heads" : "tails");
      setIsFlipping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-32 w-32 relative">
        <motion.div
          className="h-full w-full rounded-full bg-yellow-400 border-4 border-yellow-500 flex items-center justify-center text-yellow-800 font-bold shadow-lg"
          animate={{
            rotateY: isFlipping ? 1440 : 0,
            scale: isFlipping ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {result === "heads" ? "H" : result === "tails" ? "T" : "?"}
        </motion.div>
      </div>
      <div className="h-6">
        {result && !isFlipping && (
          <p className="text-lg font-semibold capitalize">{result}!</p>
        )}
      </div>
      <Button
        onClick={flipCoin}
        disabled={isFlipping}
        className="bg-yellow-500 hover:bg-yellow-600 text-white"
      >
        {isFlipping
          ? t("features.coinFlip.flipping")
          : t("features.coinFlip.flip")}
      </Button>
    </div>
  );
}
