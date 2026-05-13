"use client";

import { useTranslations } from "next-intl";
import { BookOpen, Microscope, HeartHandshake, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const activityIcons = [
  <BookOpen key="1" className="h-5 w-5" />,
  <Microscope key="2" className="h-5 w-5" />,
  <Sparkles key="3" className="h-5 w-5" />,
  <HeartHandshake key="4" className="h-5 w-5" />,
];

export default function ActivitySection() {
  const t = useTranslations("About");

  return (
    <section className="py-16 lg:py-20">
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
            <Card key={i}>
              <CardContent className="flex min-h-[150px] flex-col items-center justify-center gap-3 p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
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
    </section>
  );
}
