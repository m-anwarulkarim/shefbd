"use client";

import { useTranslations } from "next-intl";
import {
  Landmark,
  BookOpenCheck,
  Building2,
  GraduationCap,
  Megaphone,
  HeartHandshake,
  Library,
  Monitor,
  BookOpen,
  Stethoscope,
  Users,
  Wrench,
  Scale,
  BedDouble,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const complexIcons = [
  <Landmark key="1" className="h-5 w-5" />,
  <BookOpenCheck key="2" className="h-5 w-5" />,
  <Building2 key="3" className="h-5 w-5" />,
  <GraduationCap key="4" className="h-5 w-5" />,
  <Megaphone key="5" className="h-5 w-5" />,
  <HeartHandshake key="6" className="h-5 w-5" />,
  <Library key="7" className="h-5 w-5" />,
  <Monitor key="8" className="h-5 w-5" />,
  <BookOpen key="9" className="h-5 w-5" />,
  <Stethoscope key="10" className="h-5 w-5" />,
  <Users key="11" className="h-5 w-5" />,
  <Wrench key="12" className="h-5 w-5" />,
  <Scale key="13" className="h-5 w-5" />,
  <BedDouble key="14" className="h-5 w-5" />,
];

export default function ProjectMosqueComplexPage() {
  const t = useTranslations("Complex");

  const complexItems: string[] = [];

  for (let i = 1; i <= 14; i++) {
    const key = `item${i}`;

    if (!t.has(key)) break;

    complexItems.push(t(key));
  }

  return (
    <section className="relative bg-[#0B8A46] py-16 lg:py-24">
      {/* Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge className="mb-4 gap-2 border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            <Landmark className="h-3.5 w-3.5" />
            {t("badge")}
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h1>

          <Separator className="mx-auto my-6 h-1 w-24 rounded-full bg-white/20" />

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80">
            {t("desc")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {complexItems.map((item, i) => (
            <Card
              key={item}
              className="border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/15"
            >
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                  {complexIcons[i] || <Star className="h-5 w-5" />}
                </div>

                <div>
                  <h3 className="text-base font-semibold leading-relaxed text-white">
                    {item}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm font-medium text-white/70">
          {t("footer")}
        </div>
      </div>
    </section>
  );
}
