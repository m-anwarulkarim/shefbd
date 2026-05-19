import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "./events";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: event.title,
    description: event.subtitle,
  };
}

export async function generateStaticParams() {
  return events.flatMap((event) =>
    ["bn", "en"].map((locale) => ({
      locale,
      slug: event.slug,
    })),
  );
}

export default async function EventDetailsPage({ params }: Props) {
  const { locale, slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbf8] via-white to-white">
      <section className="border-b border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:py-10">
          <Button
            asChild
            variant="ghost"
            className="mb-6 gap-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
          >
            <Link href={`/${locale}`}>
              <ArrowLeft className="h-4 w-4" />
              হোমে ফিরে যান
            </Link>
          </Button>

          <div className="max-w-5xl">
            <Badge className="mb-5 bg-emerald-700 px-4 py-1.5 text-white hover:bg-emerald-700">
              {event.badge}
            </Badge>

            <h1 className="text-3xl font-extrabold leading-tight text-emerald-950 sm:text-5xl lg:text-6xl">
              {event.title}
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              {event.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-5xl px-4">
          <article>
            <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-3 shadow-2xl shadow-emerald-950/5">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[#f8faf8] sm:h-[620px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-2xl shadow-emerald-950/5 sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-10 w-1 rounded-full bg-emerald-600" />

                <h2 className="text-2xl font-extrabold text-emerald-950 sm:text-3xl">
                  বিস্তারিত
                </h2>
              </div>

              <div className="space-y-6 text-base leading-9 text-slate-700">
                {event.content
                  .trim()
                  .split("\n")
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
