"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function Roulette() {
  const t = useTranslations();
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];
  const items = [
    "Prize 1",
    "Prize 2",
    "Prize 3",
    "Prize 4",
    "Prize 5",
    "Prize 6",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 5;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw wheel segments
    const anglePerSegment = (2 * Math.PI) / items.length;

    for (let i = 0; i < items.length; i++) {
      const startAngle = i * anglePerSegment + (rotation * Math.PI) / 180;
      const endAngle = (i + 1) * anglePerSegment + (rotation * Math.PI) / 180;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();

      // Draw text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + anglePerSegment / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = "bold 12px Arial";
      ctx.fillText(items[i], radius - 10, 5);
      ctx.restore();
    }

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw pointer
    ctx.beginPath();
    ctx.moveTo(centerX + radius - 5, centerY);
    ctx.lineTo(centerX + radius - 25, centerY - 10);
    ctx.lineTo(centerX + radius - 25, centerY + 10);
    ctx.closePath();
    ctx.fillStyle = "#FF0000";
    ctx.fill();
  }, [rotation]);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    const spinDuration = 3000; // 3 seconds
    const startTime = Date.now();
    const startRotation = rotation;
    const totalRotation = 1800 + Math.random() * 360; // At least 5 full rotations plus random

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);

      // Easing function for slowing down
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

      const currentRotation = startRotation + totalRotation * easeOut(progress);
      setRotation(currentRotation % 360);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Determine the result
        const finalAngle = (currentRotation % 360) * (Math.PI / 180);
        const anglePerSegment = (2 * Math.PI) / items.length;
        const normalizedAngle = (2 * Math.PI - finalAngle) % (2 * Math.PI);
        const segmentIndex = Math.floor(normalizedAngle / anglePerSegment);

        setResult(items[segmentIndex]);
        setSpinning(false);
      }
    };

    animate();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={200}
          height={200}
          className="border rounded-full"
        />
      </div>

      <div className="h-6">
        {result && !spinning && (
          <p className="text-lg font-semibold">
            {t("features.roulette.result")} {result}
          </p>
        )}
      </div>

      <Button
        onClick={spinWheel}
        disabled={spinning}
        className="bg-purple-500 hover:bg-purple-600 text-white"
      >
        {spinning
          ? t("features.roulette.spinning")
          : t("features.roulette.spin")}
      </Button>
    </div>
  );
}
