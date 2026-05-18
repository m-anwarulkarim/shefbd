"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  HandHeart,
  Settings,
  ShieldCheck,
  CreditCard,
  HeartHandshake,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const amounts = [10, 25, 50, 100, 250, 500];

export default function DonationPage() {
  const t = useTranslations("DonationForm");
  const router = useRouter();

  const [selectedAmount, setSelectedAmount] = useState(10);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      trxId: formData.get("trxId"),
      email: formData.get("email"),
      customAmount: formData.get("customAmount"),
      donationAmount: selectedAmount,
    };

    try {
      const res = await fetch("/api/donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Failed to submit donation");
        return;
      }

      form.reset();
      setSelectedAmount(10);
      router.push("/thank-you");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 bg-emerald-50 px-4 py-1 text-emerald-700"
          >
            <HandHeart className="mr-2 h-4 w-4" />
            {t("badge")}
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
            {t("title")}
          </h1>

          <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        <Card className="overflow-hidden rounded-[2rem] border-white/70 bg-white/85 shadow-2xl shadow-emerald-900/5 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-10">
              <input
                type="hidden"
                name="donationAmount"
                value={`BDT ${selectedAmount}`}
              />

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <HeartHandshake className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-emerald-950">
                      {t("amountTitle")}
                    </h2>

                    <p className="text-sm text-slate-500">{t("amountDesc")}</p>
                  </div>
                </div>

                <label className="mb-3 block text-sm font-semibold text-slate-800">
                  {t("amountLabel")} <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {amounts.map((amount) => (
                    <button
                      type="button"
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`rounded-2xl border px-4 py-4 text-sm font-bold transition-all duration-300 ${
                        selectedAmount === amount
                          ? "border-emerald-700 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-900/20"
                          : "border-emerald-100 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
                      }`}
                    >
                      BDT {amount}
                    </button>
                  ))}
                </div>

                <Input
                  type="number"
                  name="customAmount"
                  placeholder={t("customAmountPlaceholder")}
                  className="mt-4 h-12 rounded-2xl border-emerald-100 bg-white/80 focus-visible:ring-emerald-600"
                  onChange={(e) =>
                    setSelectedAmount(Number(e.target.value || 10))
                  }
                />
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-emerald-950">
                      {t("donorTitle")}
                    </h2>

                    <p className="text-sm text-slate-500">{t("donorDesc")}</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    name="firstName"
                    placeholder={t("firstName")}
                    required
                    className="h-12 rounded-2xl border-emerald-100 bg-white/80 focus-visible:ring-emerald-600"
                  />

                  <Input
                    name="lastName"
                    placeholder={t("lastName")}
                    required
                    className="h-12 rounded-2xl border-emerald-100 bg-white/80 focus-visible:ring-emerald-600"
                  />
                </div>

                <div className="mt-4 space-y-4">
                  <Input
                    name="trxId"
                    placeholder={t("trxId")}
                    required
                    className="h-12 rounded-2xl border-emerald-100 bg-white/80 focus-visible:ring-emerald-600"
                  />

                  <Input
                    name="email"
                    type="email"
                    placeholder={t("email")}
                    required
                    className="h-12 rounded-2xl border-emerald-100 bg-white/80 focus-visible:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <CreditCard className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-emerald-950">
                      {t("paymentTitle")}
                    </h2>

                    <p className="text-sm text-slate-500">{t("paymentDesc")}</p>
                  </div>
                </div>

                <Card className="overflow-hidden rounded-3xl border-white/70 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-emerald-100 px-5 py-4">
                    <span className="text-sm font-semibold text-emerald-950">
                      {t("offlineDonation")}
                    </span>

                    <Settings className="h-4 w-4 text-slate-500" />
                  </div>

                  <CardContent className="space-y-5 p-5">
                    <div className="rounded-2xl bg-slate-50 p-5">
                      <h3 className="mb-4 text-sm font-bold text-slate-900">
                        {t("summaryTitle")}
                      </h3>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-500">
                            {t("paymentAmount")}
                          </span>

                          <strong>BDT {selectedAmount.toFixed(2)}</strong>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-slate-500">
                            {t("givingFrequency")}
                          </span>

                          <strong>{t("oneTime")}</strong>
                        </div>

                        <div className="flex justify-between border-t pt-3 text-base">
                          <span className="font-semibold">
                            {t("donationTotal")}
                          </span>

                          <strong className="text-emerald-700">
                            BDT {selectedAmount.toFixed(2)}
                          </strong>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                      <Badge className="mb-4 bg-emerald-600 text-white hover:bg-emerald-600">
                        {t("forDonation")}
                      </Badge>

                      <div className="space-y-3 text-sm text-slate-700">
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
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative h-12 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-10 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-900/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative flex items-center gap-2">
                    {isSubmitting ? "Submitting..." : t("submit")}

                    <HandHeart className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
