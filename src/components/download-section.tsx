"use client";
import { Button } from "./ui/button";
import { Apple, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function DownloadSection() {
  const t = useTranslations();

  const handleDownload = (store: "google" | "apple") => {
    const url =
      store === "google"
        ? "https://play.google.com/store/apps/details?id=com.sm.randomgenerator"
        : "https://apps.apple.com/us/app/random-generator-all-in-one/id6744875119";
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="flex flex-col gap-4 min-[400px]:flex-row mt-8">
        <Button
          onClick={() => handleDownload("apple")}
          size="lg"
          variant="secondary"
          className="gap-5 h-16 px-8 w-52"
        >
          <Image
            src="/appstore-icon.png"
            alt="appstore download app"
            width={40}
            height={40}
            className="size-10"
          />
          <div className="flex flex-col items-start">
            <span className="text-xs">Download on the</span>
            <span className="text-lg font-semibold">
              {t("download.appStore")}
            </span>
          </div>
        </Button>
        <Button
          onClick={() => handleDownload("google")}
          size="lg"
          variant="secondary"
          className="gap-5 h-16 px-8 w-52"
        >
          <Image
            src="/playstore-icon.png"
            alt="playstore download app"
            width={36}
            height={36}
            className="size-9"
          />
          <div className="flex flex-col items-start">
            <span className="text-xs">GET IT ON</span>
            <span className="text-lg font-semibold">
              {t("download.googlePlay")}
            </span>
          </div>
        </Button>
      </div>
      {/* QR Code */}
      <div className="w-44 h-52 mt-8 bg-secondary p-4 rounded-xl shadow-lg backdrop-blur-sm">
        <Image
          src="/qrCode.png"
          alt="QR Code to download app"
          width={144}
          height={144}
          className="h-36 w-36"
        />
        <p className="text-secondary-foreground text-sm mt-2 font-medium">
          {t("download.scanQR")}
        </p>
      </div>
    </>
  );
}
