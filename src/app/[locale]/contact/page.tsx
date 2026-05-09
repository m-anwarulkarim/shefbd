"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function ContactSection() {
  const t = useTranslations("ContactPage");

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 bg-emerald-50 px-4 py-1 text-emerald-700"
          >
            {t("badge")}
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <Card className="rounded-3xl border-emerald-100 bg-white/85 shadow-xl shadow-emerald-900/5 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <h2 className="mb-3 text-2xl font-bold text-emerald-950">
                {t("formTitle")}
              </h2>

              <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

              <form
                action="https://formsubmit.co/info@shefbd.org"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Name */}
                <div className="space-y-2">
                  <Label className="text-slate-700">
                    {t("nameLabel")} <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    name="Name"
                    placeholder={t("namePlaceholder")}
                    required
                    className="h-12 rounded-xl border-emerald-100 bg-white/80 focus-visible:ring-emerald-600"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label className="text-slate-700">
                    {t("emailLabel")} <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    name="Email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    required
                    className="h-12 rounded-xl border-emerald-100 bg-white/80 focus-visible:ring-emerald-600"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label className="text-slate-700">{t("subjectLabel")}</Label>

                  <Input
                    name="Subject"
                    placeholder={t("subjectPlaceholder")}
                    className="h-12 rounded-xl border-emerald-100 bg-white/80 focus-visible:ring-emerald-600"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label className="text-slate-700">{t("messageLabel")}</Label>

                  <Textarea
                    name="Message"
                    placeholder={t("messagePlaceholder")}
                    rows={6}
                    className="resize-none rounded-2xl border-emerald-100 bg-white/80 focus-visible:ring-emerald-600"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-center pt-3">
                  <Button
                    type="submit"
                    className="group relative h-12 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-10 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-900/30"
                  >
                    <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="relative flex items-center gap-2">
                      {t("submit")}

                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Map */}
            <Card className="rounded-3xl border-emerald-100 bg-white/85 shadow-xl shadow-emerald-900/5 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <h2 className="mb-5 text-2xl font-bold text-emerald-950">
                  {t("mapTitle")}
                </h2>

                <iframe
                  title="SHEF Location"
                  src="https://www.google.com/maps?q=Mirpur%20Pallabi%20Dhaka%201216&output=embed"
                  className="h-[300px] w-full rounded-2xl border border-emerald-100"
                  loading="lazy"
                />
              </CardContent>
            </Card>

            {/* Details */}
            <Card className="rounded-3xl border-emerald-100 bg-white/85 shadow-xl shadow-emerald-900/5 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <h2 className="mb-5 text-2xl font-bold text-emerald-950">
                  {t("detailsTitle")}
                </h2>

                <div className="space-y-5 text-slate-700">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-emerald-950">
                        {t("addressTitle")}
                      </h3>

                      <p className="mt-1 leading-7 text-slate-600">
                        {t("address")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-emerald-950">
                        {t("emailTitle")}
                      </h3>

                      <p className="mt-1 text-slate-600">{t("email")}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-emerald-950">
                        {t("phoneTitle")}
                      </h3>

                      <p className="mt-1 text-slate-600">{t("phone")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
