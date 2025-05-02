"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CoinFlip from "@/components/coin-flip";
import DiceRoll from "@/components/dice-roll";
import Roulette from "@/components/roulette";
import FeatureCard from "@/components/feature-card";
import { Apple, Download, Play, Smartphone, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  const handleDownload = (store: "google" | "apple") => {
    let url =
      store === "google"
        ? "https://play.google.com/store/apps/details?id=com.sm.randomgenerator"
        : "https://apps.apple.com/us/app/random-generator-all-in-one/id6744875119";

    window.open(url, "_blank");
  };
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <a href="#" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">Random Generator</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button asChild variant="outline">
                <a href="#features">Features</a>
              </Button>
              <Button asChild>
                <a href="#download">Download Now</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    All Your Random Needs in One App
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Flip coins, roll dice, spin roulette wheels and more! The
                    ultimate random generator app that makes decisions fun and
                    easy.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1" asChild>
                    <a href="#download">
                      <Download className="h-5 w-5" />
                      Download Now
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#features">See Features</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[250px] overflow-hidden rounded-xl border-8 border-gray-900 bg-gray-900 shadow-xl">
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=450&width=250"
                      alt="Random Generator App Screenshot"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Try Our Features
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience the randomness right here before you download the
                  app!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="flex flex-col items-center text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">Coin Flip</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Heads or tails? Let fate decide!
                  </p>
                  <CoinFlip />
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">Dice Roll</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Roll up to 6 dice at once!
                  </p>
                  <DiceRoll />
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">Roulette</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Spin the wheel of fortune!
                  </p>
                  <Roulette />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  More Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our app includes a wide variety of random generators to help
                  you make decisions or just have fun.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-primary" />}
                  title="Number Generator"
                  description="Generate random numbers within any range you specify."
                />
                <FeatureCard
                  icon={<Sparkles className="h-10 w-10 text-primary" />}
                  title="Name Picker"
                  description="Randomly select names from your custom lists."
                />
                <FeatureCard
                  icon={<Smartphone className="h-10 w-10 text-primary" />}
                  title="Color Generator"
                  description="Generate random colors with HEX, RGB, and HSL values."
                />
                <FeatureCard
                  icon={<Download className="h-10 w-10 text-primary" />}
                  title="Custom Lists"
                  description="Create and save your own lists for random selection."
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Download Now
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the Random Generator app on your device and have all the
                  randomness at your fingertips!
                </p>
              </div>
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
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Random Generator. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* <a
              href="#"
              className="text-sm text-gray-500 underline-offset-4 hover:underline"
            >
              Terms
            </a> */}
            <a
              href="https://www.termsfeed.com/live/1e510903-11ae-4d30-800d-5a8d880a7833"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 underline-offset-4 hover:underline"
            >
              Privacy
            </a>
            {/* <a
              href="#"
              className="text-sm text-gray-500 underline-offset-4 hover:underline"
            >
              Contact
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
