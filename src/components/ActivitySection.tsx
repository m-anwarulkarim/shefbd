"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  BookOpen,
  Microscope,
  HeartHandshake,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    href: "/activities/education",
  },
  {
    icon: <Microscope className="h-5 w-5" />,
    href: "/activities/dawah",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    href: "/activities/self-purification",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    href: "/activities/service-of-humanity",
  },
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
          {activities.map((activity, index) => (
            <Link key={index} href={activity.href} className="group block">
              <Card className="h-full overflow-hidden border border-emerald-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/60">
                <CardContent className="relative flex min-h-[170px] flex-col items-center justify-center gap-3 p-4 text-center">
                  <div className="absolute right-3 top-3 rounded-full bg-emerald-50 p-1 text-emerald-500 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                    {activity.icon}
                  </div>

                  <h3 className="text-xs font-bold leading-relaxed text-emerald-950 sm:text-sm">
                    {t(`activity${index + 1}`)}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
