"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  HeartHandshake,
  Landmark,
  Sparkles,
  HandCoins,
  ShieldCheck,
  GraduationCap,
  Droplets,
  Utensils,
  Shirt,
  Stethoscope,
  Users,
  ScrollText,
} from "lucide-react";

const activityIcons = [BookOpen, Sparkles, Landmark, HeartHandshake];

const achievementIcons = [
  GraduationCap,
  Sparkles,
  ScrollText,
  Utensils,
  HandCoins,
  Shirt,
  Users,
  Droplets,
  HeartHandshake,
  Landmark,
  HandCoins,
  BookOpen,
  ShieldCheck,
  Stethoscope,
];

type Achievement = {
  title: string;
  description: string;
};

export default function ShefAboutOrganization() {
  const t = useTranslations("About");

  const activities = [
    t("activity1"),
    t("activity2"),
    t("activity3"),
    t("activity4"),
  ];

  const policies = t.raw("policies") as string[];
  const incomeSources = t.raw("incomeSources") as string[];
  const expensePolicies = t.raw("expensePolicies") as string[];
  const achievements = t.raw("achievements") as Achievement[];
  const books = t.raw("books") as string[];

  return (
    <main className="relative isolate overflow-hidden text-slate-900">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.png"
          alt="Islamic Arabic calligraphy background"
          fill
          priority
          sizes="100vw"
          className=" opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-white/86 to-emerald-50/88" />
      </div>

      <section className="relative overflow-hidden border-b border-emerald-100/60 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="rounded-3xl border-white/70 bg-white/75 shadow-xl backdrop-blur-md">
            <CardContent className="p-6 text-center sm:p-8">
              <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-white/90 p-4 shadow-md ring-1 ring-emerald-100 sm:h-64 sm:w-64">
                <Image
                  src="/Logo.png"
                  alt="SHEF Logo"
                  width={260}
                  height={260}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <Badge className="mt-6 bg-emerald-700 text-white hover:bg-emerald-700">
                {t("established")}
              </Badge>

              <h2 className="mt-4 text-2xl font-bold text-emerald-950">
                {t("shortTitle")}
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {t("title")}
              </p>
            </CardContent>
          </Card>

          <div>
            <Badge
              variant="outline"
              className="mb-5 border-emerald-200 bg-white/70 px-4 py-1.5 text-emerald-800 backdrop-blur"
            >
              {t("badge")}
            </Badge>

            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <SimpleCard
              badge={t("badge")}
              title={t("title")}
              description={t("description")}
              icon={ShieldCheck}
            />

            <SimpleCard
              badge={t("missionBadge")}
              title={t("missionTitle")}
              description={t("missionText")}
              icon={Landmark}
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge={t("activityBadge")}
            title={t("activityTitle")}
            subtitle={t("activitySubtitle")}
          />

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {activities.map((item, index) => {
              const Icon = activityIcons[index] ?? BookOpen;

              return (
                <Card
                  key={item}
                  className=" rounded-3xl border-white/70 bg-white/75 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-bold text-emerald-950">
                      {item}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2">
          <Card className="rounded-3xl border-white/70 bg-white/75 shadow-sm backdrop-blur-md">
            <CardContent className="p-6 sm:p-8">
              <Badge className="mb-4 bg-emerald-700 text-white">
                {t("policyBadge")}
              </Badge>

              <h2 className="mb-5 text-2xl font-extrabold text-emerald-950">
                {t("policyTitle")}
              </h2>

              <Accordion type="single" collapsible>
                {policies.map((item, index) => (
                  <AccordionItem key={index} value={`policy-${index}`}>
                    <AccordionTrigger>
                      {t("policyTitle")} {index + 1}
                    </AccordionTrigger>
                    <AccordionContent className="leading-7 text-slate-600">
                      {item}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <InfoListCard
              badge={t("incomeBadge")}
              title={t("incomeTitle")}
              items={incomeSources}
            />

            <InfoListCard
              badge={t("expenseBadge")}
              title={t("expenseTitle")}
              items={expensePolicies}
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge={t("achievementBadge")}
            title={t("achievementTitle")}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => {
              const Icon = achievementIcons[index] ?? HeartHandshake;

              return (
                <Card
                  key={item.title}
                  className="rounded-3xl border-white/70 bg-white/75 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-bold text-emerald-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Card className="rounded-3xl border-white/70 bg-white/75 shadow-sm backdrop-blur-md">
            <CardContent className="p-6 sm:p-10">
              <SectionHeader
                align="left"
                badge={t("researchBadge")}
                title={t("researchTitle")}
                subtitle={t("researchSubtitle")}
              />

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
                {books.map((book) => (
                  <Card
                    key={book}
                    className="rounded-2xl border-emerald-100/70 bg-white/70 backdrop-blur"
                  >
                    <CardContent className="p-5">
                      <BookOpen className="mb-4 h-6 w-6 text-emerald-700" />
                      <h3 className="text-sm font-bold leading-7 text-emerald-950">
                        {book}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-8 text-center shadow-xl backdrop-blur-md sm:p-12">
          <Badge className="mb-4 bg-emerald-700 text-white hover:bg-emerald-700">
            {t("complexBadge")}
          </Badge>

          <h2 className="text-3xl font-extrabold text-emerald-950 md:text-4xl">
            {t("complexTitle")}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-700">
            {t("complexDesc")}
          </p>

          <p className="mx-auto mt-3 max-w-2xl leading-8 text-slate-600">
            {t("complexFooter")}
          </p>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
}: {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <Badge
        variant="outline"
        className="mb-4 border-emerald-200 bg-white/70 text-emerald-800 backdrop-blur"
      >
        {badge}
      </Badge>

      <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 md:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl leading-8 text-slate-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function SimpleCard({
  badge,
  title,
  description,
  icon: Icon,
}: {
  badge: string;
  title: string;
  description: string;
  icon: typeof ShieldCheck;
}) {
  return (
    <Card className="rounded-3xl border-white/70 bg-white/75 shadow-sm backdrop-blur-md">
      <CardContent className="p-6 sm:p-8">
        <Badge className="mb-4 bg-emerald-700 text-white hover:bg-emerald-700">
          <Icon className="mr-2 h-4 w-4" />
          {badge}
        </Badge>

        <h2 className="mb-3 text-2xl font-extrabold text-emerald-950">
          {title}
        </h2>

        <p className="text-base leading-8 text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function InfoListCard({
  badge,
  title,
  items,
}: {
  badge: string;
  title: string;
  items: string[];
}) {
  return (
    <Card className="rounded-3xl border-white/70 bg-white/75 shadow-sm backdrop-blur-md">
      <CardContent className="p-6 sm:p-8">
        <Badge
          variant="outline"
          className="mb-4 border-emerald-200 bg-white/70 text-emerald-800"
        >
          {badge}
        </Badge>

        <h2 className="mb-5 text-2xl font-extrabold text-emerald-950">
          {title}
        </h2>

        <div className="space-y-3">
          {items.map((item) => (
            <div key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
