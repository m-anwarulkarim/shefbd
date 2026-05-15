"use client";

import { useTranslations } from "next-intl";
import { HandHeart, MapPin, Building, Phone, CreditCard } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HowYouCanDonatePage() {
  const t = useTranslations("Donation");

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <Badge
            variant="outline"
            className="mb-4 gap-1.5 border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
          >
            <HandHeart className="h-3.5 w-3.5" />
            {t("badge")}
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            {t("description")}
          </p>
        </div>

        {/* Land & Construction Cost
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <Card className="border-white/70 bg-white/80 backdrop-blur-sm">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                <MapPin className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs text-slate-500">{t("landLabel")}</p>
                <p className="text-lg font-extrabold text-emerald-800">
                  {t("landPrice")}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-emerald-200 bg-emerald-50/50">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                <Building className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs text-slate-500">
                  {t("constructionLabel")}
                </p>
                <p className="text-lg font-extrabold text-emerald-800">
                  {t("constructionPrice")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Payment Methods */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Mobile Banking */}
          <Card className="border-emerald-100 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-emerald-950">
                <Phone className="h-5 w-5 text-emerald-600" />
                {t("mobileBanking")}
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-4 pt-5">
              <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4">
                <Badge className="border-none bg-emerald-600 text-white">
                  {t("sendMoney")}
                </Badge>
                <span className="text-2xl font-extrabold tracking-wide text-emerald-800">
                  01774392665
                </span>
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                <span className="font-medium">bKash</span>
                <Separator orientation="vertical" className="h-4" />
                <span className="font-medium">Nagad</span>
                <Separator orientation="vertical" className="h-4" />
                <span className="font-medium">Rocket</span>
              </div>
            </CardContent>
          </Card>

          {/* Bank Account */}
          <Card className="border-emerald-100 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-emerald-950">
                <CreditCard className="h-5 w-5 text-emerald-600" />
                {t("bankAccount")}
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-5">
              <div className="space-y-3">
                {[
                  {
                    label: t("accName"),
                    value: "Sabilul Huda Education Foundation",
                  },
                  { label: t("accNumber"), value: "0211120189118" },
                  { label: t("bankName"), value: "Al-Arafah Islami Bank PLC" },
                  {
                    label: t("branchName"),
                    value: "Mirpur-1 Branch, Dhaka-1216",
                  },
                  { label: t("routingNo"), value: "015262983" },
                  { label: t("swiftCode"), value: "ALARBDDH084" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-lg border border-emerald-50 px-4 py-2.5"
                  >
                    <span className="text-xs font-medium text-slate-500">
                      {row.label}
                    </span>
                    <span className="text-sm font-bold text-emerald-950">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
