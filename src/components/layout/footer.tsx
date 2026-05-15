"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { CiFacebook } from "react-icons/ci";
import { BsYoutube } from "react-icons/bs";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

/* ─────────────────────── Footer ─────────────────────── */
export default function Footer() {
  const quickLinks = [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "আমাদের কার্যক্রম", href: "/activities" },
    { label: "চলমান প্রকল্প", href: "/ongoing-projects" },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  const supportLinks = [
    { label: "দাতা সদস্য হোন", href: "/donor-member" },
    {
      label: "স্বেচ্ছাসেবক নিবন্ধন",
      href: "/volunteer-registration",
    },
    { label: "দান করুন", href: "/donation" },
    { label: "ভিডিও গ্যালারি", href: "/gallery/videos" },
    { label: " ছবি গ্যালারি", href: "/gallery/photos" },
  ];

  const socialLinks = [
    {
      icon: <CiFacebook className="h-5 w-5" />,
      href: "https://www.facebook.com/share/1J3tTLhwUP/",
      label: "Facebook",
    },
    {
      icon: <BsYoutube className="h-5 w-5" />,
      href: "https://youtube.com/@shef.oficial?si=ctZOq101KWWhbvqQ",
      label: "Youtube",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:shefngo@gmail.com",
      label: "Email",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+8801774392665",
      label: "Phone",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-emerald-950">
      {/* Decorative Gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-emerald-800/20 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-emerald-700/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Main Grid */}
        <div className="grid gap-10 pb-10 pt-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
                <Image
                  src="/Logo.png"
                  alt="SHEF Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-white">
                  SHEF
                </h3>

                <p className="text-[11px] font-medium tracking-wide text-emerald-400/80">
                  সাবীলুল হুদা এডুকেশন ফাউন্ডেশন
                </p>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              ২০০৭ সাল থেকে শিক্ষা, মানবিক সহায়তা, স্বাস্থ্যসেবা ও সামাজিক
              উন্নয়নের মাধ্যমে অসহায় মানুষের পাশে কাজ করে যাচ্ছে সাবীলুল হুদা
              এডুকেশন ফাউন্ডেশন।
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400">
              দ্রুত লিংক
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400">
              যুক্ত হোন
            </h4>

            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="space-y-6 lg:col-span-4">
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400">
                যোগাযোগ করুন
              </h4>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <MapPin className="h-4 w-4 text-emerald-400/70" />
                  </div>

                  <span className="text-sm leading-relaxed text-white/50">
                    ঢাকা বিভাগের মিরপুর-১, আল-আরাফাহ ইসলামী ব্যাংক সংলগ্ন।
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Phone className="h-4 w-4 text-emerald-400/70" />
                  </div>

                  <Link
                    href="tel:+8801774392665"
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    +8801774392665
                  </Link>
                </li>

                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Mail className="h-4 w-4 text-emerald-400/70" />
                  </div>

                  <Link
                    href="mailto:shefngo@gmail.com"
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    shefngo@gmail.com
                  </Link>
                </li>

                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Clock className="h-4 w-4 text-emerald-400/70" />
                  </div>

                  <span className="text-sm text-white/50">
                    শনিবার - বৃহস্পতিবার | সকাল ৯:০০ টা - বিকাল ৫:০০ টা
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h5 className="mb-2 text-sm font-semibold text-white/90">
                আপডেট পান
              </h5>

              <p className="mb-4 text-xs leading-6 text-white/40">
                আমাদের সর্বশেষ কার্যক্রম, মানবিক উদ্যোগ ও আপডেট পেতে ইমেইল
                সাবস্ক্রাইব করুন।
              </p>

              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="আপনার ইমেইল লিখুন"
                  className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-emerald-500"
                />

                <Button className="h-11 shrink-0 rounded-xl bg-emerald-600 px-4 text-white transition hover:bg-emerald-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-center text-xs leading-6 text-white/40">
            Copyright © {new Date().getFullYear()} Sabilul Huda Education
            Foundation. All rights reserved. Made by{" "}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-400 transition hover:text-emerald-300"
            >
              Sabilul Huda Web Team
            </Link>
            .
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-white/40 transition hover:text-white/70"
            >
              গোপনীয়তা নীতি
            </Link>

            <Link
              href="#"
              className="text-xs text-white/40 transition hover:text-white/70"
            >
              সেবার শর্তাবলী
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
