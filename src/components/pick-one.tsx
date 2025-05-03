"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function PickOne() {
  const t = useTranslations();
  const [isSelecting, setIsSelecting] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [nickname, setNickname] = useState<string | null>(null);
  const [showFinalAnimation, setShowFinalAnimation] = useState(false);
  const [fixedCircle, setFixedCircle] = useState<{
    x: number;
    y: number;
    color: string;
    nickname: string;
  } | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  // List of random nicknames
  const nicknames = [
    "StarGazer",
    "NeonNinja",
    "PixelPirate",
    "CosmicCruiser",
    "ThunderThief",
    "MysticMaverick",
    "QuantumQuester",
    "ShadowSurfer",
    "LunarLegend",
    "CyberCyclone",
    "PhoenixPhenom",
    "OceanOracle",
    "VortexVoyager",
    "GalacticGuru",
    "EchoExplorer",
    "BlazeBaron",
    "FrostFury",
    "SolarSpecter",
    "NebulaNomad",
    "ZenithZephyr",
  ];

  // Generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate a random nickname
  const getRandomNickname = () => {
    return nicknames[Math.floor(Math.random() * nicknames.length)];
  };

  // Handle mouse down event
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isSelecting || result) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    const color = getRandomColor();
    setSelectedColor(color);
    const randomNickname = getRandomNickname();
    setNickname(randomNickname);
    setIsSelecting(true);

    // Start countdown
    setCountdown(3);
    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (countdownRef.current) clearInterval(countdownRef.current);
          setShowFinalAnimation(true);

          // Set the result after animation completes
          setTimeout(() => {
            setResult(randomNickname);
          }, 1000); // Match this with animation duration

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isSelecting || result) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    if (!isSelecting || result) return;
    // Continue the countdown, don't stop the selection
  };

  // Reset the game
  const resetGame = () => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setIsSelecting(false);
    setSelectedColor(null);
    setResult(null);
    setCountdown(3);
    setNickname(null);
    setShowFinalAnimation(false);
  };

  useEffect(() => {
    // 캔버스 크기와 원 반지름
    const canvasWidth = 200;
    const canvasHeight = 200;
    const radius = 30;
    // 원이 캔버스 밖으로 나가지 않게 위치 계산
    const x = Math.random() * (canvasWidth - 2 * radius) + radius;
    const y = Math.random() * (canvasHeight - 2 * radius) + radius;
    const color = getRandomColor();
    const nickname = getRandomNickname();
    setFixedCircle({ x, y, color, nickname });
  }, []);

  // Draw on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // If there's a result, the final animation will handle the display
    if (result) return;

    // Draw background
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw instructions if not selecting
    if (!isSelecting && !selectedColor) {
      ctx.fillStyle = "#333";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        t("features.pickOne.instructions"),
        canvas.width / 2,
        canvas.height / 2
      );
    }

    // Draw the color circle if selecting
    if (isSelecting && selectedColor && !showFinalAnimation) {
      if (fixedCircle) {
        ctx.beginPath();
        ctx.arc(fixedCircle.x, fixedCircle.y, 30, 0, 2 * Math.PI);
        ctx.fillStyle = fixedCircle.color;
        ctx.fill();

        // 닉네임(고정 원 위)
        ctx.fillStyle = "#333";
        ctx.font = "bold 12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(fixedCircle.nickname, fixedCircle.x, fixedCircle.y - 40);
      }

      ctx.beginPath();
      ctx.arc(position.x, position.y, 30, 0, 2 * Math.PI);
      ctx.fillStyle = selectedColor;
      ctx.fill();

      // Draw nickname above the circle
      if (nickname) {
        ctx.fillStyle = "#333";
        ctx.font = "bold 12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(nickname, position.x, position.y - 40);
      }

      // Draw countdown in the center of canvas
      ctx.fillStyle = "#333";
      ctx.font = "bold 24px Arial";
      ctx.textAlign = "center";
      ctx.fillText(countdown.toString(), canvas.width / 2, canvas.height / 2);
    }

    // Continue animation
    animationRef.current = requestAnimationFrame(() => {
      // This empty callback ensures the effect runs continuously during animation
    });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [
    isSelecting,
    selectedColor,
    position,
    countdown,
    result,
    nickname,
    showFinalAnimation,
    t,
    fixedCircle,
  ]);

  // Get contrasting text color for better visibility
  const getContrastColor = (hexColor: string) => {
    if (!hexColor) return "#ffffff";

    // Convert hex to RGB
    const r = Number.parseInt(hexColor.slice(1, 3), 16);
    const g = Number.parseInt(hexColor.slice(3, 5), 16);
    const b = Number.parseInt(hexColor.slice(5, 7), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black or white depending on background luminance
    return luminance > 0.5 ? "#000000" : "#ffffff";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative overflow-hidden">
        <canvas
          ref={canvasRef}
          width={200}
          height={200}
          className="rounded cursor-pointer"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
        <AnimatePresence>
          {showFinalAnimation && selectedColor && (
            <motion.div
              initial={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                x: position.x - 30,
                y: position.y - 30,
              }}
              animate={{ width: 200, height: 200, borderRadius: 0, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: selectedColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{ color: getContrastColor(selectedColor) }}
                  className="text-xl font-bold"
                >
                  {result}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Button
        onClick={resetGame}
        className="bg-green-500 hover:bg-green-600 text-white"
        disabled={!result && !isSelecting}
      >
        {result
          ? t("features.pickOne.tryAgain")
          : isSelecting
          ? t("features.pickOne.selecting")
          : t("features.pickOne.pickColor")}
      </Button>
    </div>
  );
}
