"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  BadgeCheck,
  Building2,
  CreditCard,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const complexItems = [
  "Ideal Mosque",
  "Ideal Tahfizul Quran Department",
  "Sabilul Huda Education Foundation Head Office",
  "Madrasah for General Brothers",
  "Higher Islamic Dawah & Research Center",
  "Relief & Social Welfare Department",
  "Research Library & Reading Room",
  "Department of Modern Media",
  "Dawah Training Center",
  "Free Medical Care Center",
  "Education & Training Center for New Muslims",
  "Technical & Skill Development Center",
  "Islamic Solutions Department",
  "Guest House",
];

export default function MembershipPage() {
  const t = useTranslations("Membership");

  const [memberType, setMemberType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #059669 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 bg-emerald-50 px-4 py-1 text-emerald-700"
          >
            <Users className="mr-2 h-4 w-4" />
            {t("badge")}
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h1>

          <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

          <p className="text-base leading-8 text-slate-600">{t("subtitle")}</p>
          <div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-emerald-100 bg-white/85 p-5 shadow-lg shadow-emerald-900/5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-emerald-800">
              {t("topNoticeTitle")}
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              {t("topNoticeDesc")}
            </p>

            <div className="mt-4 flex justify-center">
              <a
                href="#membership-form"
                className="rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
              >
                {t("goToForm")}
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-6">
          <div className="space-y-6">
            {/* Complex Card */}
            <Card className="rounded-[2rem] border-white/70 bg-white/85 shadow-2xl shadow-emerald-900/5 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Landmark className="h-7 w-7" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-emerald-950">
                      {t("complexTitle")}
                    </h2>

                    <p className="text-sm text-slate-500">
                      {t("complexSubtitle")}
                    </p>
                  </div>
                </div>

                <p className="leading-8 text-slate-600">
                  {t("complexDescription")}
                </p>

                <div className="mt-8">
                  <h3 className="mb-5 text-xl font-bold text-emerald-950">
                    {t("whatWillBe")}
                  </h3>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {complexItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="mt-0.5 text-emerald-700">
                          <Star className="h-4 w-4 fill-emerald-600" />
                        </div>

                        <p className="text-sm leading-7 text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Donation Info */}
                <div className="mt-8 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                      <CreditCard className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-emerald-950">
                        {t("donationInfo")}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {t("supportMission")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm leading-7 text-slate-700">
                    <p>
                      <b>{t("mobile")}:</b> 01774392665
                    </p>

                    <p>
                      <b>{t("accountName")}:</b> Sabilul Huda Education
                      Foundation
                    </p>

                    <p>
                      <b>{t("accountNumber")}:</b> 0211120189118
                    </p>

                    <p>
                      <b>{t("bank")}:</b> Al-Arafah Islami Bank PLC
                    </p>

                    <p>
                      <b>{t("branch")}:</b> Mirpur-1 Branch, Dhaka-1216
                    </p>

                    <p>
                      <b>{t("routingNo")}:</b> 015262983
                    </p>

                    <p>
                      <b>{t("swiftCode")}:</b> ALARBDDH084
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 rounded-3xl border border-emerald-100 bg-white/70 p-6 backdrop-blur-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <HeartHandshake className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-emerald-950">
                        {t("helpTitle")}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {t("helpSubtitle")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 text-slate-600">
                    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-white p-5">
                      <p className="leading-8">{t("helpDesc1")}</p>
                    </div>

                    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-white p-5">
                      <p className="leading-8">{t("helpDesc2")}</p>
                    </div>

                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                      <h4 className="mb-3 font-bold text-emerald-950">
                        {t("landPriceTitle")}
                      </h4>

                      <div className="space-y-2 text-sm leading-7">
                        <p>
                          <b>{t("landPrice")}:</b> 5,000 Tk
                        </p>

                        <p>
                          <b>{t("constructionPrice")}:</b> 4,000 Tk
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card className="rounded-[2rem] border-white/70 bg-white/85 shadow-2xl shadow-emerald-900/5 backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-8 text-center">
                      <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">
                        {t("membershipTypes")}
                      </Badge>
                    </div>

                    <div className="space-y-5">
                      {[
                        {
                          icon: <BadgeCheck className="h-5 w-5" />,
                          title: t("lifeMember"),
                          desc: t("lifeMemberDesc"),
                        },
                        {
                          icon: <HeartHandshake className="h-5 w-5" />,
                          title: t("donorMember"),
                          desc: t("donorMemberDesc"),
                        },
                        {
                          icon: <Building2 className="h-5 w-5" />,
                          title: t("squareFeetDonor"),
                          desc: t("squareFeetDesc"),
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/70 to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/5"
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                              {item.icon}
                            </div>

                            <h3 className="text-lg font-bold text-emerald-950">
                              {item.title}
                            </h3>
                          </div>

                          <p className="leading-8 text-slate-600">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Membership Types */}

            {/* Form */}
            <Card
              id="membership-form"
              className="rounded-[2rem] h-fit  border-white/70 bg-white/85 shadow-2xl shadow-emerald-900/5 backdrop-blur-sm"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="h-8 w-8" />
                  </div>

                  <h2 className="text-3xl font-bold text-emerald-950">
                    {t("applicationForm")}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-500">
                    {t("applicationSubtitle")}
                  </p>
                </div>

                <form className="space-y-5">
                  {/* Member Type */}
                  <div className="space-y-2">
                    <Label>
                      {t("memberType")} <span className="text-red-500">*</span>
                    </Label>

                    <Select value={memberType} onValueChange={setMemberType}>
                      <SelectTrigger className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus:ring-emerald-600">
                        <SelectValue placeholder={t("selectMemberType")} />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="life">{t("lifeMember")}</SelectItem>

                        <SelectItem value="donor">
                          {t("donorMember")}
                        </SelectItem>

                        <SelectItem value="squarefeet">
                          {t("squareFeetDonor")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <Label>
                      {t("name")} <span className="text-red-500">*</span>
                    </Label>

                    <Input
                      required
                      placeholder={t("namePlaceholder")}
                      className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                    />
                  </div>

                  {/* Father's Name */}
                  <div className="space-y-2">
                    <Label>{t("fatherName")}</Label>

                    <Input
                      placeholder={t("fatherPlaceholder")}
                      className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label>
                      {t("phone")} <span className="text-red-500">*</span>
                    </Label>

                    <Input
                      required
                      placeholder="01XXXXXXXXX"
                      className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label>{t("email")}</Label>

                    <Input
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                    />
                  </div>

                  {/* Occupation */}
                  <div className="space-y-2">
                    <Label>{t("occupation")}</Label>

                    <Input
                      placeholder={t("occupationPlaceholder")}
                      className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label>
                      {t("address")} <span className="text-red-500">*</span>
                    </Label>

                    <Textarea
                      required
                      placeholder={t("addressPlaceholder")}
                      className="min-h-[120px] rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                    />
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-2">
                    <Label>
                      {t("paymentMethod")}{" "}
                      <span className="text-red-500">*</span>
                    </Label>

                    <Select
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                    >
                      <SelectTrigger className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus:ring-emerald-600">
                        <SelectValue placeholder={t("paymentPlaceholder")} />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="bkash">bKash / Nagad</SelectItem>

                        <SelectItem value="bank">Bank Transfer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Privacy */}
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                    <p className="text-sm leading-7 text-slate-600">
                      {t("privacyText")}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center pt-2">
                    <Button
                      type="submit"
                      className="group relative h-12 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-12 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-900/30"
                    >
                      <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <span className="relative flex items-center gap-2">
                        {t("submit")}
                      </span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
