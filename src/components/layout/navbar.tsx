/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  Phone,
  Menu,
  ChevronDown,
  X,
  Home,
  Info,
  Activity,
  FolderKanban,
  Users,
  HandHelping,
  Images,
  GraduationCap,
  BookOpenCheck,
  HeartHandshake,
  Sparkles,
  Building2,
  UserRoundCog,
} from "lucide-react";

import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

/* ──────────────────────────── Types ──────────────────────────── */

interface DropdownLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  dropdown?: DropdownLink[];
}

/* ──────────────────────────── Dropdown ──────────────────────────── */

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className="group relative flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-slate-700 transition-colors duration-200 hover:text-emerald-700"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="group flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-slate-700 transition-colors duration-200 hover:text-emerald-700"
      >
        {item.label}

        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            open ? "rotate-180 text-emerald-700" : ""
          }`}
        />
      </button>

      <div
        onMouseLeave={() => setOpen(false)}
        className={`absolute left-0 top-full z-50 mt-3 min-w-[240px] origin-top transition-all duration-200 ${
          open
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <div className="absolute -top-1.5 left-5 h-3 w-3 rotate-45 border-l border-t border-emerald-100 bg-white" />

        <div className="overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-lg shadow-emerald-900/5">
          {item.dropdown.map((sub, i) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={() => setOpen(false)}
              className={`group/item flex items-center gap-3 px-5 py-3 text-[13px] font-medium text-slate-600 transition-all duration-150 hover:bg-emerald-50 hover:text-emerald-800 ${
                i !== 0 ? "border-t border-emerald-50" : ""
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 transition group-hover/item:bg-emerald-700 group-hover/item:text-white">
                {sub.icon}
              </span>

              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────── Mobile Menu ──────────────────────────── */

function MobileMenu({
  isOpen,
  onClose,
  navItems,
  t,
}: {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  t: any;
}) {
  const [openSub, setOpenSub] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-emerald-100 px-5 py-4">
          <span className="text-sm font-bold tracking-wide text-emerald-900">
            {t("menu")}
          </span>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-3 py-3">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setOpenSub(openSub === item.label ? null : item.label)
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-emerald-700">{item.icon}</span>
                      {item.label}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openSub === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSub === item.label ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-lg py-2.5 pl-8 pr-3 text-sm text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                          {sub.icon}
                        </span>

                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <span className="text-emerald-700">{item.icon}</span>
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-3 px-3">
            <Link
              href="/donation"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-800"
            >
              <HeartHandshake className="h-4 w-4" />
              {t("donateNow")}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

/* ──────────────────────────── Navbar ──────────────────────────── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = useTranslations("Navbar");

  const aboutDropdown = [
    {
      label: t("AboutOrganization"),
      href: "/about/about-organization",
      icon: <Building2 className="h-4 w-4" />,
    },
    {
      label: t("aboutAuthority"),
      href: "/about/about-authority",
      icon: <UserRoundCog className="h-4 w-4" />,
    },
  ];

  const activitiesDropdown = [
    {
      label: t("EducationAndTraining"),
      href: "/activities/education",
      icon: <GraduationCap className="h-4 w-4" />,
    },
    {
      label: t("DawahAndResearch"),
      href: "/activities/dawah",
      icon: <BookOpenCheck className="h-4 w-4" />,
    },
    {
      label: t("SelfPurification"),
      href: "/activities/self-purification",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      label: t("ServiceOfHumanity"),
      href: "/activities/service-of-humanity",
      icon: <HeartHandshake className="h-4 w-4" />,
    },
  ];

  const navItems: NavItem[] = [
    {
      label: t("home"),
      href: "/",
      icon: <Home className="h-4 w-4" />,
    },
    {
      label: t("aboutUs"),
      href: "/about",
      dropdown: aboutDropdown,
      icon: <Info className="h-4 w-4" />,
    },
    {
      label: t("ourActivities"),
      href: "/activities",
      dropdown: activitiesDropdown,
      icon: <Activity className="h-4 w-4" />,
    },
    {
      label: t("ongoingProjects"),
      href: "/ongoing-projects",
      icon: <FolderKanban className="h-4 w-4" />,
    },
    {
      label: t("donorMember"),
      href: "/donor-member",
      icon: <Users className="h-4 w-4" />,
    },
    {
      label: t("volunteerRegistration"),
      href: "/volunteer-registration",
      icon: <HandHelping className="h-4 w-4" />,
    },
    {
      label: t("gallery"),
      href: "/gallery",
      icon: <Images className="h-4 w-4" />,
    },
    {
      label: t("contact"),
      href: "/contact",
      icon: <Phone className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* Top Bar */}
        <div className="bg-emerald-950">
          <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-2">
            <div className="flex items-center gap-2.5">
              <Link
                href="https://www.facebook.com/share/1J3tTLhwUP/"
                aria-label="Facebook"
                className="rounded-full p-1 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <CiFacebook className="h-4 w-4" />
              </Link>

              <Link
                href="https://youtube.com/@shef.oficial?si=ctZOq101KWWhbvqQ"
                aria-label="Youtube"
                className="rounded-full p-1 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <FaYoutube className="h-4 w-4" />
              </Link>

              <Link
                href="mailto:shefngo@gmail.com"
                aria-label="Email"
                className="rounded-full p-1 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="tel:+8801774392665"
                aria-label="Phone"
                className="rounded-full p-1 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
              </Link>
            </div>

            <p className="hidden text-center text-xs font-medium tracking-wider text-emerald-200/90 sm:block">
              সবিলুল হুদা এডুকেশন ফাউন্ডেশনে স্বাগতম
            </p>

            <div className="flex items-center justify-end gap-1">
              <Link
                href="/en"
                className="rounded-md px-2.5 py-0.5 text-xs font-semibold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                EN
              </Link>

              <span className="text-xs text-white/30">|</span>

              <Link
                href="/bn"
                className="rounded-md px-2.5 py-0.5 text-xs font-semibold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                BN
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 shadow-sm backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Logo.png"
                alt="SHEF Logo"
                width={82}
                height={82}
                className="h-14 w-14 object-contain md:h-[72px] md:w-[72px]"
                priority
              />

              <div>
                <h1 className="text-lg font-extrabold leading-tight tracking-tight text-emerald-950 md:text-xl">
                  SHEF
                </h1>

                <p className="text-[11px] font-medium tracking-wide text-emerald-700/80 md:text-xs">
                  {t("orgFullName")}
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <DropdownItem key={item.label} item={item} />
              ))}

              <Link
                href="/donation"
                className="ml-2 flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-2.5 text-[13px] font-bold text-white shadow-md shadow-emerald-800/20 transition-all duration-200 hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-800/30 active:scale-[0.98]"
              >
                <HeartHandshake className="h-4 w-4" />
                {t("donate")}
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg border border-emerald-100 p-2 text-emerald-900 transition hover:bg-emerald-50 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
        t={t}
      />
    </>
  );
}
