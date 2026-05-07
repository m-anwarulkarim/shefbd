"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube, FiInstagram } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

/* ─────────────────────── Footer ─────────────────────── */
export default function Footer() {
  const t = useTranslations("Footer");

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("aboutUs"), href: "/about" },
    { label: t("ourActivities"), href: "/activities" },
    { label: t("ongoingProjects"), href: "/projects" },
    { label: t("gallery"), href: "/gallery" },
    { label: t("contact"), href: "/contact" },
  ];

  const supportLinks = [
    { label: t("donorMember"), href: "/donor-member" },
    { label: t("volunteerRegistration"), href: "/volunteer-registration" },
    { label: t("donate"), href: "/donation" },
    { label: t("video"), href: "/video" },
  ];

  const socialLinks = [
    {
      icon: <CiFacebook className="h-5 w-5" />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <FiYoutube className="h-5 w-5" />,
      href: "#",
      label: "Youtube",
    },
    {
      icon: <FiInstagram className="h-5 w-5" />,
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-emerald-950">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-emerald-800/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-emerald-700/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* ─── Main Footer Grid ─── */}
        <div className="grid gap-10 pb-10 pt-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand — spans 4 cols */}
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
                  {t("orgName")}
                </h3>
                <p className="text-[11px] font-medium tracking-wide text-emerald-400/80">
                  {t("orgFullName")}
                </p>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              {t("description")}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links — spans 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400">
              {t("quickLinks")}
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

          {/* Column 3: Support — spans 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400">
              {t("support")}
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

          {/* Column 4: Contact + Newsletter — spans 4 cols */}
          <div className="space-y-6 lg:col-span-4">
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400">
                {t("contactUs")}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <MapPin className="h-4 w-4 text-emerald-400/70" />
                  </div>
                  <span className="text-sm leading-relaxed text-white/50">
                    {t("address")}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Phone className="h-4 w-4 text-emerald-400/70" />
                  </div>
                  <Link
                    href="tel:+8801000000000"
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {t("phone")}
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Mail className="h-4 w-4 text-emerald-400/70" />
                  </div>
                  <Link
                    href="mailto:info@shef.org"
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {t("email")}
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Clock className="h-4 w-4 text-emerald-400/70" />
                  </div>
                  <span className="text-sm text-white/50">
                    {t("officeHours")}
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h5 className="mb-2 text-sm font-semibold text-white/90">
                {t("newsletter")}
              </h5>
              <p className="mb-3 text-xs text-white/40">
                {t("newsletterDesc")}
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="border-white/10 text-white"
                />
                <Button className="h-10 shrink-0 bg-emerald-600 px-3 text-white hover:bg-emerald-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Separator ─── */}
        <Separator />

        {/* ─── Bottom Bar ─── */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-center text-xs text-white/40">
            Copyright © {new Date().getFullYear()} Sabilul Huda Education
            Foundation- all rights reserved. Made by{" "}
            <Link
              href="https://modernwebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-400 transition hover:text-emerald-300"
            >
              Modern Web Solutions
            </Link>
            .
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-white/40 transition hover:text-white/70"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 transition hover:text-white/70"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
