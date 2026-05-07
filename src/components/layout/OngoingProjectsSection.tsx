"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ইসলামিক স্কুল ও কলেজ প্রতিষ্ঠা প্রকল্প",
    image:
      "/images/Ongoing Projects/Establishment of Islamic schools and colleges.jpg",
  },
  {
    title: "সুবিধাবঞ্চিত শিশুদের শিক্ষা সহায়তা প্রকল্প",
    image:
      "/images/Ongoing Projects/Educational assistance to underprivileged children.jpg",
  },
  {
    title: "এতিমদের লালন-পালন ও শিক্ষাদান প্রকল্প",
    image:
      "/images/Ongoing Projects/Fostering and rehabilitation of orphans.jpg",
  },
  {
    title: "কারিগরি ও দক্ষতা উন্নয়ন প্রশিক্ষণ প্রকল্প",
    image:
      "/images/Ongoing Projects/Technical and skill development training.jpg",
  },
  {
    title: "সাদাকাহ জারিয়াহ প্রকল্প",
    image: "/images/Ongoing Projects/Sadaqah Jariyah.jpg",
  },
  {
    title: "যাকাতের অর্থে স্বাবলম্বীকরণ প্রকল্প",
    image: "/images/Ongoing Projects/Self-reliance through Zakat money.jpg",
  },
  {
    title: "সবার জন্য কুরবানী প্রকল্প",
    image: "/images/Ongoing Projects/Distribution of Qurbani Meat.jpg",
  },
  {
    title: "ইফতার ও রমাদান ফুড বিতরণ প্রকল্প",
    image: "/images/Ongoing Projects/Iftar and Ramadan food distribution.jpg",
  },
  {
    title: "বন্যার্তদের মাঝে ত্রাণ বিতরণ প্রকল্প",
    image:
      "/images/Ongoing Projects/Relief distribution among flood victims.jpg",
  },
  {
    title: "বই-পুস্তক লিফলেট বিতরণ প্রকল্প",
    image: "/images/Ongoing Projects/Distribution of books and leaflets.jpg",
  },
  {
    title: "টিউবওয়েল ও টয়লেট বিতরণ প্রকল্প",
    image:
      "/images/Ongoing Projects/Distribution of tube wells and toilets.jpg",
  },
  {
    title: "বৃক্ষরোপণ কর্মসূচি প্রকল্প",
    image: "/images/Ongoing Projects/Plantation and maintenance.jpg",
  },
];

export default function OngoingProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #059669 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 gap-2 border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-700"
          >
            <Sparkles className="h-3.5 w-3.5" />
            আমাদের কার্যক্রম
          </Badge>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            চলমান প্রকল্পসমূহ
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            শিক্ষা, স্বাস্থ্যসেবা, দাওয়াহ, মানবিক সহায়তা ও সমাজকল্যাণমূলক
            কার্যক্রমের মাধ্যমে আমরা মানুষের পাশে থাকার চেষ্টা করছি।
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-lg shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-transparent to-transparent opacity-70" />
              </div>

              <CardContent className="p-5">
                <h3 className="min-h-[56px] text-lg font-bold leading-snug text-slate-700 transition-colors duration-200 group-hover:text-emerald-800">
                  {project.title}
                </h3>

                <div className="mt-5 flex items-center justify-between border-t border-emerald-100 pt-4">
                  <span className="text-xs font-semibold text-emerald-700">
                    চলমান প্রকল্প
                  </span>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-9 w-9 rounded-full text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
