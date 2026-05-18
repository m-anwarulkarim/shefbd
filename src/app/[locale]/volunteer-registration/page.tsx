"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const [isExpatriate, setIsExpatriate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      isExpatriate,
      phone: formData.get("phone"),
      email: formData.get("email"),
      facebook: formData.get("facebook"),
      nid: formData.get("nid"),
      education: formData.get("education"),
      profession: formData.get("profession"),
      volunteerWork: formData.get("volunteerWork"),
      skills: formData.get("skills"),
      permanentDistrict: formData.get("permanentDistrict"),
      permanentAddress: formData.get("permanentAddress"),
      currentDistrict: formData.get("currentDistrict"),
      currentAddress: formData.get("currentAddress"),
    };

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Failed to submit form");
        return;
      }

      form.reset();
      setIsExpatriate(false);
      router.push("/thank-you");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid gap-8 lg:grid-cols-2">
                <FormBlock
                  icon={<UserRound className="h-5 w-5" />}
                  title="ব্যক্তিগত তথ্য"
                >
                  <InputField
                    name="name"
                    label="নাম"
                    required
                    placeholder="মোহাম্মদ ওমর"
                  />

                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="isExpatriate"
                      checked={isExpatriate}
                      onCheckedChange={(checked) =>
                        setIsExpatriate(Boolean(checked))
                      }
                    />
                    <Label htmlFor="isExpatriate">প্রবাসী</Label>
                  </div>

                  <InputField name="phone" label="মোবাইল নম্বর" required />
                  <InputField name="email" label="ই-মেইল" type="email" />
                  <InputField name="facebook" label="ফেসবুক আইডি লিংক" />
                  <InputField name="nid" label="এনআইডি নম্বর" />
                  <InputField name="education" label="শিক্ষাগত যোগ্যতা" />
                  <InputField name="profession" label="পেশা" required />

                  <TextareaField
                    name="volunteerWork"
                    label="যে কাজে স্বেচ্ছাসেবক হতে চান"
                    required
                  />

                  <TextareaField name="skills" label="বিশেষ দক্ষতা" />
                </FormBlock>

                <div className="space-y-8">
                  <FormBlock
                    icon={<MapPin className="h-5 w-5" />}
                    title="স্থায়ী ঠিকানা"
                  >
                    <InputField
                      name="permanentDistrict"
                      label="জেলা / থানা"
                      required
                      placeholder="জেলা / থানা নির্বাচন করুন"
                    />

                    <TextareaField
                      name="permanentAddress"
                      label="ঠিকানা"
                      required
                    />
                  </FormBlock>

                  <FormBlock
                    icon={<GraduationCap className="h-5 w-5" />}
                    title="বর্তমান ঠিকানা"
                  >
                    <InputField
                      name="currentDistrict"
                      label="জেলা / থানা"
                      required
                      placeholder="জেলা / থানা নির্বাচন করুন"
                    />

                    <TextareaField
                      name="currentAddress"
                      label="ঠিকানা"
                      required
                    />
                  </FormBlock>
                </div>
              </div>

              <p className="text-center text-sm font-semibold text-red-500">
                * চিহ্নিত ঘরগুলো পূরণ করা বাধ্যতামূলক, অন্যগুলো ঐচ্ছিক।
              </p>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group h-12 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-10 font-bold text-white shadow-lg shadow-emerald-900/20 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "পাঠানো হচ্ছে..." : "আবেদন পাঠান"}
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
  name,
  label,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
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
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
      />
    </div>
  );
}

function TextareaField({
  name,
  label,
  placeholder,
  required,
}: {
  name: string;
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
        name={name}
        required={required}
        placeholder={placeholder}
        className="min-h-[120px] rounded-2xl border-emerald-100 bg-white/90 focus-visible:ring-emerald-600"
      />
    </div>
  );
}
