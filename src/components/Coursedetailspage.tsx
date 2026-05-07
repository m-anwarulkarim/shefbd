"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  GraduationCap,
  Clock,
  Monitor,
  BookOpen,
  Users,
  BadgePercent,
  CheckCircle2,
  Calendar,
  PlayCircle,
  FileText,
  ClipboardList,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* ───────── Course Data Map ───────── */

const courseImages: Record<string, string> = {
  course1: "/images/course-1.jpg",
  course2: "/images/course-2.jpg",
  course3: "/images/course-3.jpg",
};

const courseColors: Record<
  string,
  { accent: string; lightBg: string; text: string }
> = {
  course1: {
    accent: "bg-amber-500",
    lightBg: "bg-amber-50",
    text: "text-amber-700",
  },
  course2: {
    accent: "bg-emerald-700",
    lightBg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  course3: {
    accent: "bg-green-600",
    lightBg: "bg-green-50",
    text: "text-green-700",
  },
};

export default function CourseDetailsPage() {
  const params = useParams();
  const courseId = (params.courseId as string) || "course1";
  const t = useTranslations("CourseDetails");

  const image = courseImages[courseId] || courseImages.course1;
  const colors = courseColors[courseId] || courseColors.course1;

  // Get modules
  const modules: string[] = [];

  for (let i = 1; i <= 12; i++) {
    const key = `${courseId}.module${i}`;

    if (!t.has(key)) break;

    modules.push(t(key));
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30">
      {/* Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #059669 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-10 lg:py-16">
        {/* Back */}
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 gap-1.5 text-sm text-slate-500 hover:text-emerald-700"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </Link>
        </Button>

        {/* ─── Hero: Image Left + Info Right ─── */}
        <div className="mb-12 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Image — 5 cols, full poster view */}
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-emerald-900/15 ring-1 ring-emerald-200/50">
              <Image
                src={image}
                alt={t(`${courseId}.title`)}
                width={600}
                height={850}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Decorative */}
            <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-2xl border-2 border-dashed border-emerald-200/50" />
            <div className="absolute -bottom-3 -left-3 -z-10 h-20 w-20 rounded-xl bg-emerald-500/10" />
          </div>

          {/* Info — 7 cols */}
          <div className="space-y-6 lg:col-span-7">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                className={`gap-1 border-none ${colors.accent} px-3 py-1.5 text-xs font-bold text-white`}
              >
                <GraduationCap className="h-3 w-3" />
                {t(`${courseId}.level`)}
              </Badge>
              <Badge className="gap-1 border-none bg-red-500 px-3 py-1.5 text-xs font-bold text-white">
                <BadgePercent className="h-3 w-3" />
                {t(`${courseId}.discount`)}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-emerald-950 sm:text-3xl lg:text-4xl">
              {t(`${courseId}.title`)}
            </h1>

            <p className="text-base leading-relaxed text-slate-500">
              {t(`${courseId}.description`)}
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: <Monitor className="h-4 w-4" />,
                  label: t("online"),
                  value: t("zoom"),
                },
                {
                  icon: <Calendar className="h-4 w-4" />,
                  label: t("duration"),
                  value: t(`${courseId}.duration`),
                },
                {
                  icon: <BookOpen className="h-4 w-4" />,
                  label: t("totalClasses"),
                  value: t("classCount"),
                },
                {
                  icon: <Clock className="h-4 w-4" />,
                  label: t("classTime"),
                  value: t("afterIsha"),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white p-3"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colors.lightBg}`}
                  >
                    <span className={colors.text}>{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">{item.label}</p>
                    <p className="text-sm font-bold text-emerald-950">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <Card className="border-emerald-200 bg-emerald-50/50">
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    {t("courseFee")}
                  </p>
                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-3xl font-extrabold text-emerald-700">
                      {t(`${courseId}.price`)}
                    </span>
                    <span className="mb-1 text-sm text-slate-400 line-through">
                      {t(`${courseId}.originalPrice`)}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {t("priceNote")}
                  </p>
                </div>
                <Button
                  size="lg"
                  className={`gap-2 rounded-xl ${colors.accent} px-6 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90`}
                  onClick={() => {
                    document
                      .getElementById("registration-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Phone className="h-4 w-4" />
                  {t("registerNow")}
                </Button>
              </CardContent>
            </Card>

            {/* Instructor */}
            <div className="flex items-start gap-4 rounded-xl border border-emerald-100 bg-white p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <GraduationCap className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-emerald-600">
                  {t("instructor")}
                </p>
                <p className="mt-0.5 text-sm font-bold text-emerald-950">
                  {t("instructorName")}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {t("instructorBio")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Course Modules + Features ─── */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Modules */}
          <Card className="border-emerald-100 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-emerald-950">
                <ClipboardList className="h-5 w-5 text-emerald-600" />
                {t("moduleTitle")}
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-5">
              <ul className="space-y-3">
                {modules.map((mod, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${colors.lightBg} text-[11px] font-bold ${colors.text}`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600">
                      {mod}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What You Get */}
          <Card className="border-emerald-100 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-emerald-950">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                {t("whatYouGet")}
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-5">
              <div className="space-y-3">
                {[
                  {
                    icon: <PlayCircle className="h-5 w-5" />,
                    title: t("feature1"),
                    desc: t("feature1Desc"),
                  },
                  {
                    icon: <FileText className="h-5 w-5" />,
                    title: t("feature2"),
                    desc: t("feature2Desc"),
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: t("feature3"),
                    desc: t("feature3Desc"),
                  },
                  {
                    icon: <GraduationCap className="h-5 w-5" />,
                    title: t("feature4"),
                    desc: t("feature4Desc"),
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 rounded-xl border border-emerald-50 bg-emerald-50/30 p-4"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colors.lightBg} ${colors.text}`}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-emerald-900">
                        {f.title}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scroll target for registration form */}
        <div id="registration-form" className="pt-12" />
      </div>
    </section>
  );
}
