"use client";

import {
  HeartHandshake,
  Send,
  UserRound,
  MapPin,
  GraduationCap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function VolunteerRegistrationPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700"
          >
            <HeartHandshake className="mr-2 h-4 w-4" />
            স্বেচ্ছাসেবক নিবন্ধন
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            মানবসেবার কাজে স্বেচ্ছাসেবক হিসেবে যুক্ত হোন
          </h1>

          <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

          <p className="text-base leading-8 text-slate-600">
            সাবীলুল হুদা এডুকেশন ফাউন্ডেশনের শিক্ষা, দাওয়াহ ও মানবসেবামূলক
            কার্যক্রমে অংশ নিতে নিচের ফর্মটি পূরণ করুন।
          </p>
        </div>

        <Card className="rounded-[2rem] border-white/70 bg-white/90 shadow-2xl shadow-emerald-900/5 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <form className="space-y-10">
              <div className="grid gap-8 lg:grid-cols-2">
                <FormBlock
                  icon={<UserRound className="h-5 w-5" />}
                  title="ব্যক্তিগত তথ্য"
                >
                  <InputField label="নাম" required placeholder="মোহাম্মদ ওমর" />

                  <div className="space-y-3">
                    <Label>প্রবাসী</Label>
                    <Checkbox />
                  </div>

                  <InputField label="মোবাইল নম্বর" required />
                  <InputField label="ই-মেইল" type="email" />
                  <InputField label="ফেসবুক আইডি লিংক" />
                  <InputField label="এনআইডি নম্বর" />
                  <InputField label="শিক্ষাগত যোগ্যতা" />
                  <InputField label="পেশা" required />

                  <TextareaField
                    label="যে কাজে স্বেচ্ছাসেবক হতে চান"
                    required
                  />

                  <TextareaField label="বিশেষ দক্ষতা" />
                </FormBlock>

                <div className="space-y-8">
                  <FormBlock
                    icon={<MapPin className="h-5 w-5" />}
                    title="স্থায়ী ঠিকানা"
                  >
                    <InputField
                      label="জেলা / থানা"
                      required
                      placeholder="জেলা / থানা নির্বাচন করুন"
                    />

                    <TextareaField label="ঠিকানা" required />
                  </FormBlock>

                  <FormBlock
                    icon={<GraduationCap className="h-5 w-5" />}
                    title="বর্তমান ঠিকানা"
                  >
                    <InputField
                      label="জেলা / থানা"
                      required
                      placeholder="জেলা / থানা নির্বাচন করুন"
                    />

                    <TextareaField label="ঠিকানা" required />
                  </FormBlock>
                </div>
              </div>

              <p className="text-center text-sm font-semibold text-red-500">
                * চিহ্নিত ঘরগুলো পূরণ করা বাধ্যতামূলক, অন্যগুলো ঐচ্ছিক।
              </p>

              <div className="flex justify-center">
                <Button className="group h-12 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-10 font-bold text-white shadow-lg shadow-emerald-900/20 hover:shadow-xl">
                  আবেদন পাঠান
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FormBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon}
        </div>

        <h2 className="text-xl font-bold text-emerald-950">{title}</h2>
      </div>

      <div className="space-y-5">{children}</div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label>
        {label} {required ? <span className="text-red-500">*</span> : null}
      </Label>

      <Input
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
      />
    </div>
  );
}

function TextareaField({
  label,
  placeholder,
  required,
}: {
  label: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label>
        {label} {required ? <span className="text-red-500">*</span> : null}
      </Label>

      <Textarea
        required={required}
        placeholder={placeholder}
        className="min-h-[120px] rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
      />
    </div>
  );
}
