"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  HandHeart,
  HandHelping,
  Heart,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const heroSlides = [
  {
    type: "poster",
    image: "/images/hero-event-1.jpg",
    badge: "বিশেষ আয়োজন",
    title: "ইমামুল হিন্দ শাহ ওয়ালীউল্লাহ দেহলভী রহ. কনফারেন্স",
    subtitle: "ইসলামী চিন্তা, তাজদীদ ও উম্মাহর পুনর্জাগরণে তাঁর অবদান",
    button: "বিস্তারিত দেখুন",
    href: "/events/shah-waliullah-conference",
    accent: "emerald",
  },
  {
    type: "poster",
    image: "/images/insaniyat-dostorkhan.png",
    badge: "মানবিক উদ্যোগ",
    title: "ইনসানিয়াত দস্তরখান",
    subtitle:
      "বস্তি, ছিন্নমূল ও সুবিধাবঞ্চিত শিশুদের জন্য নিয়মিত খাবার বিতরণ কর্মসূচি",
    button: "বিস্তারিত দেখুন",
    href: "/events/insaniyat-dostorkhan",
    accent: "emerald",
  },

  {
    type: "poster",
    image: "/images/hero-event-2.jpg",
    badge: "দাওয়াতনামা",
    title: "বিশেষ দাওয়াতনামা",
    subtitle:
      "পয়ামে ইনসানিয়াত বাংলাদেশের আয়োজনে গুরুত্বপূর্ণ মাহফিল ও আলোচনা",
    button: "আমন্ত্রণ পড়ুন",
    href: "/events/invitation",
    accent: "emerald",
  },
  {
    type: "poster",
    image: "/images/hero-event-3.jpg",
    badge: "প্রোগ্রামসূচি",
    title: "বাংলাদেশ সফরের সম্ভাব্য প্রোগ্রামসূচি",
    subtitle: "১৪ আগস্ট ২০২৬ থেকে ২২ আগস্ট ২০২৬ পর্যন্ত বিভিন্ন শহরে অনুষ্ঠান",
    button: "সূচি দেখুন",
    href: "/events/program-schedule",
    accent: "emerald",
  },
  {
    type: "book",
    image: "/images/book-mockup.png",
    badge: "নতুন প্রকাশনা",
    title: "শাহ ওয়ালীউল্লাহ দেহলভী রহ. স্মারকগ্রন্থ",
    subtitle:
      "ইসলামী চিন্তা, তাজদীদ ও উম্মাহর পুনর্জাগরণে তাঁর অবদান নিয়ে বিশেষ স্মারকগ্রন্থ",
    button: "বইটি সম্পর্কে জানুন",
    href: "/events/shah-waliullah-book",
    accent: "amber",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSection() {
  const t = useTranslations("Hero");
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const slide = heroSlides[current];
  const isBook = slide.type === "book";

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
    setProgressKey((k) => k + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgressKey((k) => k + 1);
  };

  const goTo = (index: number) => {
    setCurrent(index);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-emerald-50/40 to-amber-50/40 py-16 lg:py-24">
      {/* Decorative dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #059669 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Soft floating gradient blobs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT — Text Content */}
          <div className="space-y-6 lg:col-span-5">
            <Badge
              variant="outline"
              className="gap-2 border-emerald-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-emerald-700 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t("govReg")}
            </Badge>

            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-emerald-950 sm:text-4xl lg:text-[2.75rem]">
                {t("heading1")}
                <span className="mt-1 block text-emerald-600">
                  {t("heading2")}
                </span>
              </h1>

              <p className="max-w-md text-base leading-relaxed text-slate-500">
                {t("subheading")}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                {
                  icon: <BookOpen className="h-3 w-3" />,
                  label: t("tagEducation"),
                },
                {
                  icon: <Stethoscope className="h-3 w-3" />,
                  label: t("tagDawah"),
                },
                {
                  icon: <HandHelping className="h-3 w-3" />,
                  label: t("tagService"),
                },
              ].map((tag) => (
                <Badge
                  key={tag.label}
                  variant="secondary"
                  className="gap-1.5 bg-emerald-100/70 px-3 py-1 text-xs font-medium text-emerald-800"
                >
                  {tag.icon}
                  {tag.label}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                size="lg"
                className="gap-2 rounded-xl bg-emerald-700 px-7 text-sm font-bold shadow-lg shadow-emerald-700/25 hover:bg-emerald-800"
                asChild
              >
                <Link href="/donation">
                  <HandHeart className="h-4 w-4" />
                  {t("donateNow")}
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="gap-2 rounded-xl border-emerald-200 bg-white/80 px-7 text-sm font-bold text-emerald-700 hover:bg-emerald-50"
                asChild
              >
                <Link href="/about">
                  {t("learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <Separator className="!mt-8 bg-emerald-100" />

            <div className="grid grid-cols-3 gap-4 pt-2 sm:gap-6">
              {[
                {
                  icon: <Users className="h-4 w-4 text-emerald-600" />,
                  value: t("studentsValue"),
                  label: t("studentsLabel"),
                },
                {
                  icon: <GraduationCap className="h-4 w-4 text-emerald-600" />,
                  value: t("projectsValue"),
                  label: t("projectsLabel"),
                },
                {
                  icon: <Heart className="h-4 w-4 text-emerald-600" />,
                  value: t("donorsValue"),
                  label: t("donorsLabel"),
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center gap-1.5">
                    {item.icon}
                    <span className="text-xl font-extrabold text-emerald-950">
                      {item.value}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Slider */}
          <div className="relative lg:col-span-7">
            {/* Ambient glow */}
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-amber-300/20 blur-3xl" />

            {/* Decorative Islamic-inspired corner ornaments */}
            <div className="absolute -right-2 -top-2 z-10 hidden h-20 w-20 sm:block">
              <div className="absolute right-0 top-0 h-12 w-[2px] bg-gradient-to-b from-emerald-500/60 to-transparent" />
              <div className="absolute right-0 top-0 h-[2px] w-12 bg-gradient-to-r from-transparent to-emerald-500/60" />
              <div className="absolute right-2 top-2 h-2 w-2 rotate-45 bg-emerald-500/60" />
            </div>
            <div className="absolute -bottom-2 -left-2 z-10 hidden h-20 w-20 sm:block">
              <div className="absolute bottom-0 left-0 h-12 w-[2px] bg-gradient-to-t from-amber-500/60 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-12 bg-gradient-to-l from-transparent to-amber-500/60" />
              <div className="absolute bottom-2 left-2 h-2 w-2 rotate-45 bg-amber-500/60" />
            </div>

            {/* Outer card frame */}
            <div className="relative rounded-[2rem] border border-emerald-100/70 bg-white/70 p-2.5 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl sm:p-3">
              {/* Inner slide container */}
              <div
                className={`relative overflow-hidden rounded-[1.6rem] transition-colors duration-700 ${
                  isBook
                    ? "bg-gradient-to-br from-[#f4efe2] via-[#fffdf7] to-[#e6f5ec]"
                    : "bg-gradient-to-br from-[#fff8df] via-white to-emerald-50"
                }`}
              >
                {/* Subtle inner pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 25% 25%, #059669 1px, transparent 1px), radial-gradient(circle at 75% 75%, #d97706 1px, transparent 1px)",
                    backgroundSize: "30px 30px, 40px 40px",
                  }}
                />

                <div className="relative h-[540px] w-full sm:h-[640px] lg:h-[680px]">
                  {/* Image with smooth crossfade + parallax-style movement */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.image}
                      initial={{ opacity: 0, scale: 1.05, x: 40 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.97, x: -40 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className={`object-contain transition-transform duration-1000 ${
                          isBook ? "animate-float p-6 sm:p-10" : "p-3 sm:p-5"
                        }`}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient overlay for text legibility */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-emerald-950/35 via-emerald-950/10 to-transparent" />

                  {/* Slide number indicator (top-left) */}
                  <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-xs font-bold text-emerald-900 shadow-lg backdrop-blur-md">
                    <Sparkles className="h-3 w-3 text-amber-500" />
                    <span className="tabular-nums">
                      {String(current + 1).padStart(2, "0")}
                      <span className="mx-1 text-emerald-300">/</span>
                      <span className="text-emerald-400">
                        {String(heroSlides.length).padStart(2, "0")}
                      </span>
                    </span>
                  </div>

                  {/* Content card — bottom */}
                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={slide.title}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-2xl sm:p-6"
                      >
                        {/* Accent bar */}
                        <div
                          className={`absolute left-0 top-0 h-full w-1 ${
                            isBook
                              ? "bg-gradient-to-b from-amber-400 to-amber-600"
                              : "bg-gradient-to-b from-emerald-500 to-emerald-700"
                          }`}
                        />

                        <div className="space-y-2.5 pl-2">
                          <div className="flex items-center gap-2">
                            <Badge
                              className={
                                isBook
                                  ? "bg-amber-500 text-white hover:bg-amber-500"
                                  : "bg-emerald-700 text-white hover:bg-emerald-700"
                              }
                            >
                              {slide.badge}
                            </Badge>
                            <div
                              className={`h-px flex-1 ${
                                isBook
                                  ? "bg-gradient-to-r from-amber-200 to-transparent"
                                  : "bg-gradient-to-r from-emerald-200 to-transparent"
                              }`}
                            />
                          </div>

                          <h2 className="text-xl font-extrabold leading-tight text-emerald-950 sm:text-2xl">
                            {slide.title}
                          </h2>

                          <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {slide.subtitle}
                          </p>

                          <Button
                            asChild
                            className={`group/btn mt-3 rounded-xl font-bold text-white shadow-lg transition-all ${
                              isBook
                                ? "bg-amber-600 shadow-amber-500/30 hover:bg-amber-700"
                                : "bg-emerald-700 shadow-emerald-700/30 hover:bg-emerald-800"
                            }`}
                          >
                            <Link href={slide.href}>
                              {slide.button}
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="group absolute left-4 top-[42%] z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/85 text-emerald-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-emerald-700 hover:text-white hover:shadow-emerald-700/40"
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="group absolute right-4 top-[42%] z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/85 text-emerald-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-emerald-700 hover:text-white hover:shadow-emerald-700/40"
                >
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>

                {/* Progress-bar style dot indicators (top center) */}
                <div className="absolute left-1/2 top-5 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/70 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-md">
                  {heroSlides.map((item, index) => {
                    const isActive = current === index;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-500 ${
                          isActive
                            ? "w-10 bg-emerald-100"
                            : "w-4 bg-emerald-200 hover:bg-emerald-300"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            key={progressKey}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration: SLIDE_DURATION / 1000,
                              ease: "linear",
                            }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-600 to-emerald-700"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Outer decorative shapes */}
            <div className="absolute -right-3 -top-3 -z-10 h-16 w-16 rounded-2xl border-2 border-emerald-300/40" />
            <div className="absolute -bottom-3 -left-3 -z-10 h-12 w-12 rounded-2xl bg-emerald-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
