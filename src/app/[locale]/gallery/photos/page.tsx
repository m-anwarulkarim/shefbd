"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Images } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { galleries } from "../data/photo";

export default function PhotoGalleryPage() {
  const [activeTab, setActiveTab] = useState("ramadan-food");

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700"
          >
            <Camera className="mr-2 h-4 w-4" />
            Photo Gallery
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Our Activities in Photos
          </h1>

          <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

          <p className="text-base leading-8 text-slate-600">
            A collection of photos from our humanitarian, educational, and
            social welfare activities.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-8 lg:hidden">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="h-14 rounded-2xl border-emerald-100 bg-white/90 px-4 text-left font-semibold text-emerald-900 shadow-sm">
                <SelectValue placeholder="Select Gallery" />
              </SelectTrigger>

              <SelectContent className="rounded-2xl border-emerald-100">
                {galleries.map((gallery) => (
                  <SelectItem
                    key={gallery.value}
                    value={gallery.value}
                    className="rounded-xl"
                  >
                    {gallery.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <TabsList className="mx-auto mb-10 hidden h-auto max-w-5xl flex-wrap justify-center gap-3 bg-transparent lg:flex">
            {galleries.map((gallery) => (
              <TabsTrigger
                key={gallery.value}
                value={gallery.value}
                className="rounded-2xl border border-emerald-100 bg-white/85 px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-emerald-50 data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
              >
                {gallery.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {galleries.map((gallery) => (
            <TabsContent key={gallery.value} value={gallery.value}>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                {gallery.images.map((src, index) => (
                  <Dialog key={src}>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer overflow-hidden rounded-2xl border-emerald-100 bg-white shadow-lg shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/10 sm:rounded-3xl">
                        <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
                          <Image
                            src={src}
                            alt={`${gallery.label} ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                          <div className="absolute bottom-3 left-3 hidden items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-800 backdrop-blur sm:flex">
                            <Images className="h-3.5 w-3.5" />
                            View Photo
                          </div>
                        </div>
                      </Card>
                    </DialogTrigger>

                    <DialogContent className="border-none bg-black/90 p-0 shadow-none sm:max-w-7xl">
                      <div className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden rounded-3xl">
                        <Image
                          src={src}
                          alt={`${gallery.label} ${index + 1}`}
                          fill
                          sizes="95vw"
                          className="object-contain p-4"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
