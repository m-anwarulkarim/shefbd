import Link from "next/link";
import { CheckCircle2, HeartHandshake, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-emerald-50 px-4 py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #059669 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative w-full max-w-2xl rounded-[2rem] border border-emerald-100 bg-white p-8 text-center shadow-2xl shadow-emerald-900/10 sm:p-12">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-12 w-12 text-emerald-600" />
        </div>

        <Badge className="mb-5 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
          <HeartHandshake className="mr-1.5 h-3.5 w-3.5" />
          Donation Submitted
        </Badge>

        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">
          Thank You!
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500">
          Your donation information has been submitted successfully. We truly
          appreciate your kindness, support and generosity.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-emerald-100 bg-emerald-50 p-5 text-sm leading-relaxed text-emerald-800">
          May Allah accept your contribution and grant barakah in your life,
          family and wealth.
        </div>

        <Button
          asChild
          className="mt-8 rounded-xl bg-emerald-600 px-7 py-5 font-bold hover:bg-emerald-700"
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
