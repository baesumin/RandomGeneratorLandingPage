"use client";
import { Card, CardContent } from "@/src/components/ui/card";
import CoinFlip from "@/src/components/coin-flip";
import DiceRoll from "@/src/components/dice-roll";
import Roulette from "@/src/components/roulette";
import FeatureCard from "@/src/components/feature-card";
import PickOne from "@/src/components/pick-one";
import WordGenerator from "@/src/components/word-generator";
import ImageGenerator from "@/src/components/image-generator";
import { Download, Gift, Smartphone, Sparkles, Star, Zap } from "lucide-react";
import RandomImage from "@/src/components/random-image";
import DownloadSection from "@/src/components/download-section";
import LanguageSelector from "@/src/components/language-selector";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  const t = useTranslations();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center space-x-2">
            <Image
              src="/logo.avif"
              alt="Random Generator Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="inline-block font-bold text-lg">{t("header.logo")}</span>
          </a>

          <nav className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 mr-2">
              <Button asChild variant="ghost" size="sm">
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, "features")}
                >
                  {t("header.features")}
                </a>
              </Button>
              <Button asChild size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                <a
                  href="#download"
                  onClick={(e) => scrollToSection(e, "download")}
                >
                  {t("header.download")}
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-1 border-l pl-2 ml-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50/40 via-purple-50/30 to-slate-100 dark:from-gray-900 dark:via-indigo-950/10 dark:to-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    {t("hero.subtitle")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="gap-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                    asChild
                  >
                    <a
                      href="#download"
                      onClick={(e) => scrollToSection(e, "download")}
                    >
                      <Download className="h-5 w-5" />
                      {t("hero.downloadNow")}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a
                      href="#features"
                      onClick={(e) => scrollToSection(e, "features")}
                    >
                      {t("hero.seeFeatures")}
                    </a>
                  </Button>
                </div>

                {/* <div className="flex items-center gap-2 mt-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    4.8/5 (10k+ reviews)
                  </span>
                </div> */}
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Phone mockup with app screenshot */}
                  <div className="relative h-[514px] w-[250px] overflow-hidden rounded-[2.5rem] border-6 border-gray-800 bg-gray-900 shadow-xl">
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                      <RandomImage />
                    </div>
                  </div>

                  {/* Floating elements around the phone */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                    }}
                  >
                    <Sparkles className="h-6 w-6 text-yellow-500" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2.5,
                      delay: 0.5,
                    }}
                  >
                    <Gift className="h-6 w-6 text-pink-500" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("features.title")}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t("features.subtitle")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">
                    {t("features.coinFlip.title")}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    {t("features.coinFlip.description")}
                  </p>
                  <CoinFlip />
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">
                    {t("features.diceRoll.title")}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    {t("features.diceRoll.description")}
                  </p>
                  <DiceRoll />
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">
                    {t("features.roulette.title")}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    {t("features.roulette.description")}
                  </p>
                  <Roulette />
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">
                    {t("features.pickOne.title")}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    {t("features.pickOne.description")}
                  </p>
                  <PickOne />
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">
                    {t("features.wordGenerator.title")}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    {t("features.wordGenerator.description")}
                  </p>
                  <WordGenerator />
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">
                    {t("features.imageGenerator.title")}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    {t("features.imageGenerator.description")}
                  </p>
                  <ImageGenerator />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm dark:bg-indigo-900/50">
                  {t("moreFeatures.title")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("moreFeatures.title")}
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t("moreFeatures.subtitle")}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-primary" />}
                  title={t("moreFeatures.numberGenerator.title")}
                  description={t("moreFeatures.numberGenerator.description")}
                />
                <FeatureCard
                  icon={<Sparkles className="h-10 w-10 text-primary" />}
                  title={t("moreFeatures.namePicker.title")}
                  description={t("moreFeatures.namePicker.description")}
                />
                <FeatureCard
                  icon={<Smartphone className="h-10 w-10 text-primary" />}
                  title={t("moreFeatures.colorGenerator.title")}
                  description={t("moreFeatures.colorGenerator.description")}
                />
                <FeatureCard
                  icon={<Download className="h-10 w-10 text-primary" />}
                  title={t("moreFeatures.customLists.title")}
                  description={t("moreFeatures.customLists.description")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("testimonials.title")}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t("testimonials.subtitle")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {[
                {
                  name: "Sarah J.",
                  avatar: "/placeholder.svg?height=60&width=60",
                  rating: 5,
                  text: t("testimonials.quote1"),
                },
                {
                  name: "Michael T.",
                  avatar: "/placeholder.svg?height=60&width=60",
                  rating: 5,
                  text: t("testimonials.quote2"),
                },
                {
                  name: "Jessica L.",
                  avatar: "/placeholder.svg?height=60&width=60",
                  rating: 4,
                  text: t("testimonials.quote3"),
                },
              ].map((testimonial, i) => (
                <Card key={i} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.name} avatar`}
                      width={64}
                      height={64}
                      className="rounded-full h-16 w-16"
                    />
                  </div>
                  <div className="flex justify-center mb-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("download.title")}
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("download.subtitle")}
                </p>
              </div>
              <DownloadSection />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            {/* <a
              href="#"
              className="text-sm text-gray-500 underline-offset-4 hover:underline"
            >
              {t("footer.terms")}
            </a> */}
            <a
              href="https://www.termsfeed.com/live/1e510903-11ae-4d30-800d-5a8d880a7833"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 underline-offset-4 hover:underline"
            >
              {t("footer.privacy")}
            </a>
            {/* <a
              href="#"
              className="text-sm text-gray-500 underline-offset-4 hover:underline"
            >
              {t("footer.contact")}
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
