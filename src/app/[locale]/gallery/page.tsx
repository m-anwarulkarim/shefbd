"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Images, PlayCircle, Video, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { galleries } from "./data/photo";
import { videos } from "./data/video";

export default function MediaGalleryPage() {
  const [mainTab, setMainTab] = useState("photos");
  const [activePhotoTab, setActivePhotoTab] = useState("ramadan-food");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700"
            >
              <Images className="mr-2 h-4 w-4" />
              মিডিয়া গ্যালারি
            </Badge>

            <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
              আমাদের কার্যক্রমের ছবি ও ভিডিও
            </h1>

            <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

            <p className="text-base leading-8 text-slate-600">
              আমাদের মানবিক, শিক্ষা ও সামাজিক কার্যক্রমের বিশেষ মুহূর্তগুলো ছবি
              ও ভিডিওর মাধ্যমে দেখুন।
            </p>
          </div>

          <Tabs value={mainTab} onValueChange={setMainTab} className="w-full">
            <TabsList className="mx-auto mb-10 grid h-auto max-w-md grid-cols-2 rounded-2xl bg-emerald-50 p-1.5">
              <TabsTrigger
                value="photos"
                className="rounded-xl py-3 text-sm font-bold text-emerald-800 data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
              >
                <Camera className="mr-2 h-4 w-4" />
                ছবি গ্যালারি
              </TabsTrigger>

              <TabsTrigger
                value="videos"
                className="rounded-xl py-3 text-sm font-bold text-emerald-800 data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
              >
                <Video className="mr-2 h-4 w-4" />
                ভিডিও গ্যালারি
              </TabsTrigger>
            </TabsList>

            {/* Photo Gallery */}
            <TabsContent value="photos">
              <Tabs
                value={activePhotoTab}
                onValueChange={setActivePhotoTab}
                className="w-full"
              >
                <div className="mb-8 lg:hidden">
                  <Select
                    value={activePhotoTab}
                    onValueChange={setActivePhotoTab}
                  >
                    <SelectTrigger className="h-14 rounded-2xl border-emerald-100 bg-white/90 px-4 text-left font-semibold text-emerald-900 shadow-sm">
                      <SelectValue placeholder="গ্যালারি নির্বাচন করুন" />
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
                                  ছবি দেখুন
                                </div>
                              </div>
                            </Card>
                          </DialogTrigger>

                          <DialogContent className="border-none bg-black/90 p-0 shadow-none sm:max-w-7xl">
                            <DialogTitle className="sr-only">
                              ছবি প্রিভিউ
                            </DialogTitle>

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
            </TabsContent>

            {/* Video Gallery */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                  <Card
                    key={video.embed}
                    onClick={() => setSelectedVideo(video.embed)}
                    className="group cursor-pointer overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-lg shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                          <PlayCircle className="h-10 w-10 text-emerald-700" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <PlayCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />

                        <div>
                          <h3 className="font-bold text-emerald-950">
                            {video.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="w-[95vw] max-w-6xl border-none bg-black p-0 sm:rounded-2xl">
          <DialogTitle className="sr-only">ইউটিউব ভিডিও প্লেয়ার</DialogTitle>

          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute right-3 top-3 z-50 rounded-full bg-black/60 p-2 text-white transition hover:bg-black"
            aria-label="Close video popup"
          >
            <X className="h-5 w-5" />
          </button>

          {selectedVideo && (
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                src={`${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
