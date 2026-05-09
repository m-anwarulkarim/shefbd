"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  HandHeart,
  ArrowRight,
  Users,
  GraduationCap,
  Heart,
  BookOpen,
  Stethoscope,
  HandHelping,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #059669 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ─── Left: Text Content — 5 cols ─── */}
          <div className="space-y-6 lg:col-span-5">
            {/* Gov Reg Badge */}
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

            {/* Heading */}
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

            {/* Services Tags */}
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
                  className="gap-1.5 bg-emerald-100/60 px-3 py-1 text-xs font-medium text-emerald-800"
                >
                  {tag.icon}
                  {tag.label}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                size="lg"
                className="gap-2 rounded-xl bg-emerald-700 px-7 text-sm font-bold shadow-lg shadow-emerald-700/25 transition-all hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-800/30"
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
                className="gap-2 rounded-xl border-emerald-200 px-7 text-sm font-bold text-emerald-700 transition-all hover:border-emerald-300 hover:bg-emerald-50"
                asChild
              >
                <Link href="/about">
                  {t("learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <Separator className="!mt-8 bg-emerald-100" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              <div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-emerald-600" />
                  <span className="text-xl font-extrabold text-emerald-950">
                    {t("studentsValue")}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-slate-400">
                  {t("studentsLabel")}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-emerald-600" />
                  <span className="text-xl font-extrabold text-emerald-950">
                    {t("projectsValue")}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-slate-400">
                  {t("projectsLabel")}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4 text-emerald-600" />
                  <span className="text-xl font-extrabold text-emerald-950">
                    {t("donorsValue")}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-slate-400">
                  {t("donorsLabel")}
                </p>
              </div>
            </div>
          </div>

          {/* ─── Right: Image — 7 cols (bigger) ─── */}
          <div className="relative lg:col-span-7">
            {/* Glow behind image */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-emerald-400/10 blur-2xl" />

            {/* Green accent bar left edge */}
            {/* <div className="absolute -left-2 top-8 bottom-8 z-10 w-1.5 rounded-full bg-emerald-500" /> */}

            {/* Main image — tall aspect ratio */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-emerald-900/20 ring-1 ring-emerald-200/50">
              <Image
                src="/images/banar-1.jpg"
                alt={t("bannerAlt")}
                width={800}
                height={550}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Corner decorative squares */}
            <div className="absolute -right-3 -top-3 -z-10 h-16 w-16 rounded-lg border-2 border-emerald-300/40" />
            <div className="absolute -bottom-3 -left-3 -z-10 h-12 w-12 rounded-lg bg-emerald-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
