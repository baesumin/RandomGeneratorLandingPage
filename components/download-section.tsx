"use client";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export default function DownloadSection() {
  const handleDownload = (store: "google" | "apple") => {
    const url =
      store === "google"
        ? "https://play.google.com/store/apps/details?id=com.sm.randomgenerator"
        : "https://apps.apple.com/us/app/random-generator-all-in-one/id6744875119";
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-2 min-[400px]:flex-row">
      <Button
        onClick={() => handleDownload("apple")}
        size="lg"
        variant="secondary"
        className="gap-2"
      >
        <Apple />
        App Store&nbsp;&nbsp;
      </Button>
      <Button
        onClick={() => handleDownload("google")}
        size="lg"
        variant="secondary"
        className="gap-2"
      >
        <Play />
        Google Play
      </Button>
    </div>
  );
}
