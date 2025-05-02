"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function DiceRoll() {
  const [isRolling, setIsRolling] = useState(false);
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      setIsRolling(false);
    }, 1000);
  };

  const getDots = (value: number) => {
    switch (value) {
      case 1:
        return <div className="dot center-dot"></div>;
      case 2:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      case 3:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot center-dot"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      case 4:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      case 5:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot center-dot"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      case 6:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot middle-left"></div>
            <div className="dot middle-right"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="dice"
        animate={{
          rotate: isRolling ? [0, 360, 720, 1080] : 0,
          scale: isRolling ? [1, 0.8, 1.2, 1] : 1,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {getDots(diceValue)}
      </motion.div>
      <Button
        onClick={rollDice}
        disabled={isRolling}
        className="bg-red-500 hover:bg-red-600 text-white"
      >
        {isRolling ? "Rolling..." : "Roll Dice"}
      </Button>

      <style jsx global>{`
        .dice {
          width: 80px;
          height: 80px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #333;
          position: absolute;
        }

        /* 정확한 위치들 */
        .top-left {
          top: 20%;
          left: 20%;
        }

        .top-right {
          top: 20%;
          right: 20%;
        }

        .middle-left {
          top: 50%;
          left: 20%;
          transform: translateY(-50%);
        }

        .middle-right {
          top: 50%;
          right: 20%;
          transform: translateY(-50%);
        }

        .center-dot {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .bottom-left {
          bottom: 20%;
          left: 20%;
        }

        .bottom-right {
          bottom: 20%;
          right: 20%;
        }
      `}</style>
    </div>
  );
}
