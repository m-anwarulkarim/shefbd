"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, GraduationCap, Crown } from "lucide-react";

const advisoryIcons = [
  ShieldCheck,
  GraduationCap,
  ShieldCheck,
  GraduationCap,
  ShieldCheck,
  GraduationCap,
];

export default function ShefAboutAuthority() {
  const t = useTranslations("Authority");

  const members = t.raw("members") as {
    name: string;
    designation: string;
  }[];

  return (
    <section className="relative isolate overflow-hidden py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <Badge className="mb-4 bg-emerald-700 text-white hover:bg-emerald-700">
            {t("badge")}
          </Badge>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 md:text-4xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-8 text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => {
            const Icon = advisoryIcons[index] ?? ShieldCheck;

            return (
              <Card
                key={member.name}
                className="h-full rounded-3xl border-white/70 bg-white/75 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-bold leading-7 text-emerald-950">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {member.designation}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10">
          <Card className="overflow-hidden rounded-[2rem] border-white/70 bg-white/75 text-emerald-950 shadow-xl backdrop-blur-md">
            <CardContent className="p-8 sm:p-10">
              <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                  <Crown className="h-8 w-8" />
                </div>

                <div>
                  <Badge className="mb-4 bg-yellow-400 text-emerald-950 hover:bg-yellow-400">
                    {t("founderBadge")}
                  </Badge>

                  <h3 className="text-2xl font-extrabold leading-tight">
                    {t("founderName")}
                  </h3>

                  <p className="mt-3 max-w-3xl leading-8 text-slate-600">
                    {t("founderDesignation")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
