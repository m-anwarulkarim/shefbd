"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  GraduationCap,
  Clock,
  Monitor,
  BookOpen,
  ArrowRight,
  BadgePercent,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const courses = [
  {
    key: "course1",
    image: "/images/course-1.jpg",
    accent: "bg-amber-500",
    lightBg: "bg-amber-50",
    textColor: "text-amber-700",
  },
  {
    key: "course2",
    image: "/images/course-2.jpg",
    accent: "bg-emerald-700",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  {
    key: "course3",
    image: "/images/course-3.jpg",
    accent: "bg-green-600",
    lightBg: "bg-green-50",
    textColor: "text-green-700",
  },
];

function CourseCard({
  course,
  t,
}: {
  course: (typeof courses)[0];
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <Card className="group relative h-full overflow-hidden rounded-3xl border border-emerald-100/80 bg-white p-0 shadow-xl shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/10">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[28px] bg-white">
        <Image
          src={course.image}
          alt={t(`${course.key}Title`)}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
        />

        <Badge
          className={`absolute right-4 top-4 gap-1 border border-white/20 ${course.accent} px-3 py-1.5 text-[11px] font-bold text-white shadow-xl backdrop-blur-md`}
        >
          <BadgePercent className="h-3 w-3" />
          {t(`${course.key}Discount`)}
        </Badge>

        <Badge
          variant="outline"
          className="absolute left-4 top-4 border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md"
        >
          <GraduationCap className="mr-1 h-3.5 w-3.5" />
          {t(`${course.key}Level`)}
        </Badge>
      </div>

      <CardContent className="space-y-5 p-5">
        <div className="flex flex-wrap gap-2">
          <div
            className={`flex items-center gap-1.5 rounded-full ${course.lightBg} px-3 py-1.5`}
          >
            <Monitor className={`h-3.5 w-3.5 ${course.textColor}`} />
            <span className={`text-[11px] font-bold ${course.textColor}`}>
              {t("online")}
            </span>
          </div>

          <div
            className={`flex items-center gap-1.5 rounded-full ${course.lightBg} px-3 py-1.5`}
          >
            <Clock className={`h-3.5 w-3.5 ${course.textColor}`} />
            <span className={`text-[11px] font-bold ${course.textColor}`}>
              {t(`${course.key}Duration`)}
            </span>
          </div>

          <div
            className={`flex items-center gap-1.5 rounded-full ${course.lightBg} px-3 py-1.5`}
          >
            <BookOpen className={`h-3.5 w-3.5 ${course.textColor}`} />
            <span className={`text-[11px] font-bold ${course.textColor}`}>
              {t("totalClasses")}
            </span>
          </div>
        </div>

        <Separator className="bg-emerald-100" />

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 line-through">
              {t(`${course.key}OriginalPrice`)}
            </p>
            <p className="text-2xl font-extrabold text-emerald-700">
              {t(`${course.key}Price`)}
            </p>
          </div>

          <p className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
            {t("afterDiscount")}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          className={`w-full gap-2 rounded-2xl ${course.accent} py-5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-95 hover:shadow-xl`}
          asChild
        >
          <Link href={`/courses/${course.key}`}>
            {t("register")}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function CourseSlider({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: courses.length > 1,
      }}
      className="relative w-full"
    >
      <CarouselContent className="-ml-4">
        {courses.map((course) => (
          <CarouselItem
            key={course.key}
            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <CourseCard course={course} t={t} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {courses.length > 1 && (
        <>
          <CarouselPrevious className="left-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 lg:-left-5" />
          <CarouselNext className="right-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 lg:-right-5" />
        </>
      )}
    </Carousel>
  );
}

export default function CourseSection() {
  const t = useTranslations("Courses");
  const shouldUseDesktopSlider = courses.length > 3;

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-transparent to-emerald-50/30" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 gap-1.5 border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
          >
            <GraduationCap className="h-3.5 w-3.5" />
            {t("badge")}
          </Badge>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
            {t("heading")}
          </h2>

          <p className="mt-3 text-base text-slate-500">{t("subheading")}</p>
        </div>

        <div className="lg:hidden">
          <CourseSlider t={t} />
        </div>

        <div className="hidden lg:block">
          {shouldUseDesktopSlider ? (
            <CourseSlider t={t} />
          ) : (
            <div className="grid gap-6 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.key} course={course} t={t} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-xl border-emerald-200 px-8 text-sm font-bold text-emerald-700 transition-all hover:border-emerald-300 hover:bg-emerald-50"
            asChild
          >
            <Link href="/courses">
              {t("viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
