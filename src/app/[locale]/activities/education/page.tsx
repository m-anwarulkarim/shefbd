"use client";

import { useTranslations } from "next-intl";
import {
  BookOpen,
  GraduationCap,
  School,
  Library,
  Users,
  Trophy,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const icons = [
  <BookOpen key="1" className="h-5 w-5" />,
  <School key="2" className="h-5 w-5" />,
  <GraduationCap key="3" className="h-5 w-5" />,
  <Library key="4" className="h-5 w-5" />,
  <School key="5" className="h-5 w-5" />,
  <Users key="6" className="h-5 w-5" />,
  <Trophy key="7" className="h-5 w-5" />,
];

export default function EducationTrainingPage() {
  const t = useTranslations("EducationTraining");

  const activities: string[] = [];

  for (let i = 1; i <= 7; i++) {
    activities.push(t(`activity${i}`));
  }

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30" />

      {/* Arabic Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "700px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 bg-white/80 px-4 py-1.5 text-emerald-700 backdrop-blur-sm"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            {t("badge")}
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h1>

          <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

          <p className="text-base leading-8 text-slate-600">{t("subtitle")}</p>
        </div>

        {/* Activities */}
        <div className="grid gap-5 md:grid-cols-2">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group rounded-3xl border-white/70 bg-white/85 shadow-lg shadow-emerald-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                  {icons[index]}
                </div>

                <p className="text-sm leading-7 text-slate-700 sm:text-base">
                  {activity}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
