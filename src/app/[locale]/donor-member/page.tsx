"use client";

import { useState } from "react";
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
  "আদর্শ মসজিদ",
  "আদর্শ তাহফিজুল কুরআন বিভাগ",
  "সাবীলুল হুদা এডুকেশন ফাউন্ডেশন প্রধান কার্যালয়",
  "জেনারেল ভাইদের জন্য মাদরাসা",
  "উচ্চতর ইসলামিক দাওয়াহ ও গবেষণা কেন্দ্র",
  "ত্রাণ ও সমাজকল্যাণ বিভাগ",
  "গবেষণা লাইব্রেরি ও পাঠাগার",
  "আধুনিক মিডিয়া বিভাগ",
  "দাওয়াহ ট্রেনিং সেন্টার",
  "ফ্রি মেডিকেল কেয়ার সেন্টার",
  "নওমুসলিম শিক্ষা ও প্রশিক্ষণ কেন্দ্র",
  "কারিগরি ও দক্ষতা উন্নয়ন কেন্দ্র",
  "ইসলামিক সল্যুশন বিভাগ",
  "গেস্ট হাউস",
];

export default function MembershipPage() {
  const [memberType, setMemberType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #059669 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 bg-emerald-50 px-4 py-1 text-emerald-700"
          >
            <Users className="mr-2 h-4 w-4" />
            সদস্যতা ও অনুদান
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            আমাদের মিশনের অংশ হোন
          </h1>

          <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

          <p className="text-base leading-8 text-slate-600">
            সাবিলুল হুদা মসজিদ কমপ্লেক্স ও ইসলামিক সেন্টার নির্মাণে সদস্যতা ও
            অনুদানের মাধ্যমে অংশগ্রহণ করুন।
          </p>

          <div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-emerald-100 bg-white/85 p-5 shadow-lg shadow-emerald-900/5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-emerald-800">
              সদস্যতার আবেদন করতে চান?
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              নিচের ফর্মটি পূরণ করে আপনার সদস্যতার আবেদন জমা দিন।
            </p>

            <div className="mt-4 flex justify-center">
              <a
                href="#membership-form"
                className="rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
              >
                ফর্মে যান
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-6">
          <Card className="rounded-[2rem] border-white/70 bg-white/85 shadow-2xl shadow-emerald-900/5 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Landmark className="h-7 w-7" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-emerald-950">
                    মসজিদ কমপ্লেক্স ও ইসলামিক সেন্টার
                  </h2>

                  <p className="text-sm text-slate-500">
                    একটি পূর্ণাঙ্গ ইসলামিক শিক্ষা ও মানবসেবামূলক প্রকল্প।
                  </p>
                </div>
              </div>

              <p className="leading-8 text-slate-600">
                সাবিলুল হুদা এডুকেশন ফাউন্ডেশন (SHEF) দেশের শিক্ষা, দাওয়াহ,
                গবেষণা, তাযকিয়াহ ও মানবসেবামূলক কার্যক্রম পরিচালনার জন্য একটি
                পূর্ণাঙ্গ মসজিদ কমপ্লেক্স ও ইসলামিক সেন্টার প্রতিষ্ঠার পরিকল্পনা
                গ্রহণ করেছে।
              </p>

              <div className="mt-8">
                <h3 className="mb-5 text-xl font-bold text-emerald-950">
                  কমপ্লেক্সে যা যা থাকবে
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

                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                    <CreditCard className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-emerald-950">
                      অনুদানের তথ্য
                    </h3>

                    <p className="text-sm text-slate-500">
                      আপনার অনুদানের মাধ্যমে আমাদের এই মহৎ কাজে সহযোগিতা করুন।
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm leading-7 text-slate-700">
                  <p>
                    <b>বিকাশ/নগদ:</b> 01774392665
                  </p>
                  <p>
                    <b>অ্যাকাউন্ট নাম:</b> Sabilul Huda Education Foundation
                  </p>
                  <p>
                    <b>অ্যাকাউন্ট নম্বর:</b> 0211120189118
                  </p>
                  <p>
                    <b>ব্যাংক:</b> Al-Arafah Islami Bank PLC
                  </p>
                  <p>
                    <b>শাখা:</b> Mirpur-1 Branch, Dhaka-1216
                  </p>
                  <p>
                    <b>রাউটিং নং:</b> 015262983
                  </p>
                  <p>
                    <b>সুইফট কোড:</b> ALARBDDH084
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-emerald-100 bg-white/70 p-6 backdrop-blur-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <HeartHandshake className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-emerald-950">
                      আপনি যেভাবে সহযোগিতা করতে পারেন
                    </h3>

                    <p className="text-sm text-slate-500">
                      এই সদকায়ে জারিয়াহ প্রকল্পের অংশ হোন।
                    </p>
                  </div>
                </div>

                <div className="space-y-5 text-slate-600">
                  <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-white p-5">
                    <p className="leading-8">
                      মসজিদ কমপ্লেক্স ও ইসলামিক সেন্টার নির্মাণে অনুদান, সদস্যতা
                      ও সার্বিক সহযোগিতার মাধ্যমে অংশগ্রহণ করার জন্য সকলের প্রতি
                      আন্তরিক আহ্বান জানানো হচ্ছে।
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-white p-5">
                    <p className="leading-8">
                      এই প্রকল্পের মাধ্যমে ভবিষ্যৎ প্রজন্মের জন্য ইসলামিক
                      শিক্ষা, দাওয়াহ, গবেষণা, মানবসেবা ও সামাজিক কল্যাণমূলক
                      কার্যক্রম পরিচালিত হবে।
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                    <h4 className="mb-3 font-bold text-emerald-950">
                      সহযোগিতার তথ্য
                    </h4>

                    <div className="space-y-2 text-sm leading-7">
                      <p>
                        <b>প্রতি স্কয়ার ফিট জমির মূল্য:</b> 5,000 Tk
                      </p>

                      <p>
                        <b>প্রতি স্কয়ার ফিট নির্মাণ ব্যয়:</b> 4,000 Tk
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="mt-8 rounded-[2rem] border-white/70 bg-white/85 shadow-2xl shadow-emerald-900/5 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-8 text-center">
                    <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">
                      সদস্যতার ধরন
                    </Badge>
                  </div>

                  <div className="space-y-5">
                    {[
                      {
                        icon: <BadgeCheck className="h-5 w-5" />,
                        title: "লাইফ মেম্বার",
                        desc: "যারা এককালীন ন্যূনতম ১,০০,০০০ টাকা অনুদান প্রদান করবেন, তারা SHEF এর লাইফ মেম্বার হিসেবে গণ্য হবেন।",
                      },
                      {
                        icon: <HeartHandshake className="h-5 w-5" />,
                        title: "ডোনার মেম্বার",
                        desc: "যারা ন্যূনতম ৫০,০০০ টাকা অনুদান প্রদান করবেন, তারা SHEF এর ডোনার মেম্বার হিসেবে অন্তর্ভুক্ত হবেন।",
                      },
                      {
                        icon: <Building2 className="h-5 w-5" />,
                        title: "স্কয়ার ফিট ডোনার",
                        desc: "যারা এক স্কয়ার ফিট জমি ও নির্মাণ ব্যয়ের সমপরিমাণ অনুদান প্রদান করবেন, তারা স্কয়ার ফিট ডোনার হিসেবে গণ্য হবেন।",
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

                        <p className="leading-8 text-slate-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card
            id="membership-form"
            className="h-fit rounded-[2rem] border-white/70 bg-white/85 shadow-2xl shadow-emerald-900/5 backdrop-blur-sm"
          >
            <CardContent className="p-6 sm:p-8">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                <h2 className="text-3xl font-bold text-emerald-950">
                  আবেদন ফর্ম
                </h2>

                <p className="mt-3 leading-7 text-slate-500">
                  সদস্যতার জন্য নিচের ফর্মটি পূরণ করুন।
                </p>
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <Label>
                    সদস্যতার ধরন <span className="text-red-500">*</span>
                  </Label>

                  <Select value={memberType} onValueChange={setMemberType}>
                    <SelectTrigger className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus:ring-emerald-600">
                      <SelectValue placeholder="সদস্যতার ধরন নির্বাচন করুন" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="life">লাইফ মেম্বার</SelectItem>
                      <SelectItem value="donor">ডোনার মেম্বার</SelectItem>
                      <SelectItem value="squarefeet">
                        স্কয়ার ফিট ডোনার
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>
                    নাম <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    required
                    placeholder="আপনার পূর্ণ নাম"
                    className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label>পিতার নাম</Label>

                  <Input
                    placeholder="পিতার পূর্ণ নাম"
                    className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label>
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    required
                    placeholder="01XXXXXXXXX"
                    className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label>ই-মেইল ঠিকানা</Label>

                  <Input
                    type="email"
                    placeholder="আপনার ই-মেইল"
                    className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label>পেশা</Label>

                  <Input
                    placeholder="আপনার পেশা"
                    className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label>
                    ঠিকানা <span className="text-red-500">*</span>
                  </Label>

                  <Textarea
                    required
                    placeholder="আপনার পূর্ণ ঠিকানা"
                    className="min-h-[120px] rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label>
                    কোন মাধ্যমে পেমেন্ট করবেন{" "}
                    <span className="text-red-500">*</span>
                  </Label>

                  <Select
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <SelectTrigger className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus:ring-emerald-600">
                      <SelectValue placeholder="পেমেন্ট মাধ্যম নির্বাচন করুন" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="bkash">বিকাশ / নগদ</SelectItem>
                      <SelectItem value="bank">ব্যাংক ট্রান্সফার</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                  <p className="text-sm leading-7 text-slate-600">
                    সম্মানিত সদস্যদের সকল তথ্য নিরাপদ ও গোপন রাখা হবে। কোনো তথ্য
                    প্রকাশ্যে প্রকাশ করা হবে না বা অন্য কারো সাথে শেয়ার করা হবে
                    না, ইনশাআল্লাহ।
                  </p>
                </div>

                <div className="flex justify-center pt-2">
                  <Button
                    type="submit"
                    className="group relative h-12 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-12 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-900/30"
                  >
                    <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="relative flex items-center gap-2">
                      আবেদন জমা দিন
                    </span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
