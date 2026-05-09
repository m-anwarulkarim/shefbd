"use client";

import { useState } from "react";
import { HandHeart, Settings } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const amounts = [10, 25, 50, 100, 250, 500];

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState(10);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-xl px-4">
        <div className="mb-8 text-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            <HandHeart className="mr-1 h-3.5 w-3.5" />
            Donate
          </Badge>

          <h1 className="text-3xl font-extrabold text-slate-900">
            Support Our Mission
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Your donation helps us continue educational, humanitarian and dawah
            activities.
          </p>
        </div>

        <form
          action="https://formsubmit.co/b5eb5e98de3df7c0deb3d195673410b2"
          method="POST"
          className="space-y-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Donation Submission"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thank-you"
          />
          <input
            type="hidden"
            name="Donation Amount"
            value={`BDT ${selectedAmount}`}
          />

          <div>
            <h2 className="mb-2 text-lg font-bold text-slate-900">
              How much would you like to donate today?
            </h2>

            <p className="mb-5 text-sm text-slate-500">
              All donations directly impact our organization and help us further
              our mission.
            </p>

            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Donation Amount <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-3 gap-3">
              {amounts.map((amount) => (
                <button
                  type="button"
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`rounded-md border px-4 py-3 text-sm font-semibold transition ${
                    selectedAmount === amount
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
                  }`}
                >
                  BDT {amount.toFixed(2)}
                </button>
              ))}
            </div>

            <Input
              type="number"
              name="Custom Amount"
              placeholder="Enter custom amount"
              className="mt-3"
              onChange={(e) => setSelectedAmount(Number(e.target.value || 0))}
            />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Who&apos;s Giving Today?
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              We&apos;ll never share this information with anyone.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input name="First Name" placeholder="First name" required />
              <Input name="Last Name" placeholder="Last name" required />
            </div>

            <div className="mt-4 space-y-4">
              <Input
                name="Bkash Transaction ID"
                placeholder="Bkash Transaction ID"
                required
              />

              <Input
                name="Email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Payment Details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              How would you like to pay for your donation?
            </p>

            <Card className="mt-4 overflow-hidden border-white/70 bg-white/85 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <span className="text-sm font-semibold">
                  Donate with Offline Donation
                </span>
                <Settings className="h-4 w-4 text-slate-500" />
              </div>

              <CardContent className="p-5">
                <div className="mb-5 rounded-xl bg-slate-50 p-4">
                  <h3 className="mb-4 text-sm font-bold text-slate-900">
                    Donation Summary
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Payment Amount</span>
                      <strong>BDT {selectedAmount.toFixed(2)}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">Giving Frequency</span>
                      <strong>One time</strong>
                    </div>

                    <div className="flex justify-between border-t pt-3">
                      <span className="font-semibold">Donation Total</span>
                      <strong>BDT {selectedAmount.toFixed(2)}</strong>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-sm">
                  <Badge className="mb-3 bg-emerald-600 text-white hover:bg-emerald-600">
                    For Donation
                  </Badge>

                  <div className="space-y-2 text-slate-700">
                    <p>
                      <b>bKash/Nagad:</b> 01774392665
                    </p>
                    <p>
                      <b>Account Name:</b> Sabilul Huda Education Foundation
                    </p>
                    <p>
                      <b>Account Number:</b> 0211120189118
                    </p>
                    <p>
                      <b>Bank:</b> Al-Arafah Islami Bank PLC
                    </p>
                    <p>
                      <b>Branch:</b> Mirpur-1 Branch, Dhaka-1216
                    </p>
                    <p>
                      <b>Routing No:</b> 015262983
                    </p>
                    <p>
                      <b>Swift Code:</b> ALARBDDH084
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 py-6 text-base font-bold hover:bg-emerald-700"
          >
            Donate now
          </Button>
        </form>
      </div>
    </section>
  );
}
