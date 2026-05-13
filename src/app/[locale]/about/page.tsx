"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  BookOpen,
  Microscope,
  HeartHandshake,
  Sparkles,
  Building2,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const activityIcons = [
  <BookOpen key="1" className="h-5 w-5" />,
  <Microscope key="2" className="h-5 w-5" />,
  <Sparkles key="3" className="h-5 w-5" />,
  <HeartHandshake key="4" className="h-5 w-5" />,
];

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #059669 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="flex justify-center lg:col-span-4">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-emerald-500/10 blur-2xl" />
                <Image
                  src="/Logo.png"
                  alt="SHEF Logo"
                  width={280}
                  height={280}
                  className="relative h-56 w-56 object-contain drop-shadow-xl lg:h-72 lg:w-72"
                  priority
                />
              </div>
            </div>

            <div className="space-y-5 lg:col-span-8">
              <Badge
                variant="outline"
                className="gap-1.5 border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
              >
                <Building2 className="h-3.5 w-3.5" />
                {t("badge")}
              </Badge>

              <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
                {t("title")}
              </h1>

              <Separator className="bg-emerald-200" />

              <p className="text-base leading-[1.8] text-slate-600">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-4 gap-1.5 border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
            >
              <Star className="h-3.5 w-3.5" />
              {t("missionBadge")}
            </Badge>

            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              {t("missionTitle")}
            </h2>

            <Separator className="mx-auto my-6 w-24 bg-emerald-300" />

            <p className="text-base leading-[1.8] text-slate-600">
              {t("missionText")}
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <Badge
              variant="outline"
              className="mb-4 gap-1.5 border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
            >
              <HeartHandshake className="h-3.5 w-3.5" />
              {t("activityBadge")}
            </Badge>

            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              {t("activityTitle")}
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
              {t("activitySubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card
                key={i}
                className="group border-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/5"
              >
                <CardContent className="flex min-h-[150px] flex-col items-center justify-center gap-3 p-4 text-center sm:min-h-[170px] sm:gap-4 sm:p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-700 group-hover:text-white sm:h-14 sm:w-14">
                    {activityIcons[i - 1]}
                  </div>

                  <h3 className="text-xs font-bold leading-relaxed text-emerald-950 sm:text-sm">
                    {t(`activity${i}`)}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
