"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  User,
  Phone,
  Mail,
  GraduationCap,
  CreditCard,
  Hash,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function CourseRegistrationForm() {
  const t = useTranslations("Registration");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 px-4 py-16">
        <Card className="mx-auto w-full max-w-md border-emerald-100 text-center shadow-lg">
          <CardContent className="space-y-4 p-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-emerald-950">
              {t("successTitle")}
            </h2>
            <p className="text-sm text-slate-500">{t("successMessage")}</p>
            <Separator />
            <Button
              className="gap-2 rounded-xl bg-emerald-700 px-6 font-bold hover:bg-emerald-800"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                {t("backHome")}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 px-4 py-12 lg:py-16">
      {/* Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #059669 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-2xl">
        {/* Back button */}
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

        <Card className="border-emerald-100 shadow-xl">
          <CardHeader className="space-y-3 pb-6">
            <Badge
              variant="outline"
              className="w-fit gap-1.5 border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              {t("badge")}
            </Badge>
            <CardTitle className="text-2xl font-extrabold text-emerald-950">
              {t("title")}
            </CardTitle>
            <CardDescription className="text-sm text-slate-500">
              {t("description")}
            </CardDescription>
          </CardHeader>

          <Separator />

          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <User className="h-3.5 w-3.5 text-emerald-600" />
                  {t("name")}
                </Label>
                <Input
                  id="name"
                  placeholder={t("namePlaceholder")}
                  required
                  className="rounded-lg border-slate-200 focus-visible:ring-emerald-500"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <Phone className="h-3.5 w-3.5 text-emerald-600" />
                  {t("phone")}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t("phonePlaceholder")}
                  required
                  className="rounded-lg border-slate-200 focus-visible:ring-emerald-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <Mail className="h-3.5 w-3.5 text-emerald-600" />
                  {t("email")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="rounded-lg border-slate-200 focus-visible:ring-emerald-500"
                />
              </div>

              {/* Course Select */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5 text-sm font-medium">
                  <GraduationCap className="h-3.5 w-3.5 text-emerald-600" />
                  {t("course")}
                </Label>
                <Select required>
                  <SelectTrigger className="rounded-lg border-slate-200 focus:ring-emerald-500">
                    <SelectValue placeholder={t("coursePlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="course1">{t("course1")}</SelectItem>
                    <SelectItem value="course2">{t("course2")}</SelectItem>
                    <SelectItem value="course3">{t("course3")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              {/* Payment Info Header */}
              <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-600">
                  {t("paymentInfo")}
                </p>
                <p className="text-sm text-slate-600">{t("paymentDesc")}</p>
                <p className="mt-2 text-lg font-extrabold text-emerald-700">
                  01774392665
                </p>
                <p className="text-xs text-slate-400">
                  bKash / Nagad / Rocket ({t("sendMoney")})
                </p>
              </div>

              {/* Payment Method */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5 text-sm font-medium">
                  <CreditCard className="h-3.5 w-3.5 text-emerald-600" />
                  {t("paymentMethod")}
                </Label>
                <Select required>
                  <SelectTrigger className="rounded-lg border-slate-200 focus:ring-emerald-500">
                    <SelectValue placeholder={t("paymentPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bkash">bKash</SelectItem>
                    <SelectItem value="nagad">Nagad</SelectItem>
                    <SelectItem value="rocket">Rocket</SelectItem>
                    <SelectItem value="bank">{t("bankTransfer")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Transaction ID */}
              <div className="space-y-2">
                <Label
                  htmlFor="trxId"
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <Hash className="h-3.5 w-3.5 text-emerald-600" />
                  {t("trxId")}
                </Label>
                <Input
                  id="trxId"
                  placeholder={t("trxIdPlaceholder")}
                  required
                  className="rounded-lg border-slate-200 focus-visible:ring-emerald-500"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 rounded-xl bg-emerald-700 text-sm font-bold shadow-lg shadow-emerald-700/25 transition-all hover:bg-emerald-800 hover:shadow-xl"
              >
                <Send className="h-4 w-4" />
                {t("submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
