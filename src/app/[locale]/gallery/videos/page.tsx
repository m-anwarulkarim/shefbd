"use client";

import { useState } from "react";
import { PlayCircle, Video, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const videos = [
  {
    title: "ইনসানিয়াত দস্তরখানের মানবিক খাবার বিতরণ কার্যক্রম",
    description:
      "ইনসানিয়াত দস্তরখান উদ্যোগের মাধ্যমে ছিন্নমূল, অসহায় ও সুবিধাবঞ্চিত মানুষের মাঝে নিয়মিত খাবার বিতরণ করা হয়েছে। মানবতার সেবায় পরিচালিত এই কার্যক্রম সমাজের অবহেলিত মানুষের মুখে হাসি ফোটাতে এবং তাদের পাশে দাঁড়ানোর একটি আন্তরিক প্রচেষ্টা।",
    thumbnail: "https://img.youtube.com/vi/Vx4GzOK7Wwg/maxresdefault.jpg",
    embed: "https://www.youtube.com/embed/Vx4GzOK7Wwg",
  },

  {
    title: "মানবতার স্পর্শে খাবার বিতরণ কর্মসূচি",
    description:
      "ইনসানিয়াত দস্তরখান প্রকল্পের আওতায় মিরপুর-৬ এলাকার বস্তিবাসী ও ছিন্নমূল শিশুদের মাঝে নিয়মিত খাবার বিতরণ করা হয়েছে। এই উদ্যোগের মাধ্যমে সুবিধাবঞ্চিত মানুষের পাশে দাঁড়িয়ে মানবিক সহায়তা ও ভালোবাসা পৌঁছে দেওয়ার প্রচেষ্টা অব্যাহত রয়েছে। ১১ এপ্রিল ২০২৬, শনিবার — মিরপুর-৬, ঢাকা।",
    thumbnail: "/thm-1.png",
    embed: "https://www.youtube.com/embed/K1hiKUZEHyY",
  },

  {
    title: "ইনসানিয়াত দস্তরখানের উদ্যোগে ছিন্নমূল শিশুদের মাঝে খাবার বিতরণ",
    description:
      "সাবীলুল হুদা এডুকেশন ফাউন্ডেশন - Sabilul Huda Education Foundation ও পয়ামে ইনসানিয়াত বাংলাদেশ এর মানবিক প্রকল্প ‘ইনসানিয়াত দস্তরখান’-এর উদ্যোগে মিরপুর-৬ ঝিলপাড় বস্তির মক্তবের দুস্থ, অসহায় ও ছিন্নমূল শিশুদের মাঝে খাবার বিতরণ করা হয়েছে। মানবিক এই আয়োজনের মাধ্যমে সুবিধাবঞ্চিত শিশুদের মুখে হাসি ফোটানো এবং তাদের পাশে দাঁড়ানোর আন্তরিক প্রচেষ্টা অব্যাহত রয়েছে। ২৮ মার্চ ২০২৬, শনিবার — মিরপুর-৬, ঢাকা।",
    thumbnail: "/thum-3.png",
    embed: "https://www.youtube.com/embed/hFGE0UxIquI?si=dQuSxXwjWomVNB2C",
  },
];
export default function VideoGalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700"
            >
              <Video className="mr-2 h-4 w-4" />
              ভিডিও গ্যালারি
            </Badge>

            <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
              আমাদের কার্যক্রমের ভিডিওসমূহ
            </h1>

            <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

            <p className="text-base leading-8 text-slate-600">
              আমাদের মানবিক ও সামাজিক কার্যক্রমের বিশেষ মুহূর্তগুলো দেখুন।
            </p>
          </div>

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
        </div>
      </section>

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="w-[95vw] max-w-full border-none bg-black p-0 sm:rounded-2xl">
          <DialogTitle className="sr-only">ইউটিউব ভিডিও প্লেয়ার</DialogTitle>

          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute right-3 top-3 z-50 rounded-full bg-black/60 p-2 text-white transition hover:bg-black"
            aria-label="Close video popup"
          >
            <X className="h-5 w-5" />
          </button>

          {selectedVideo && (
            <div className="h-[95vh] w-full overflow-hidden rounded-xl">
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
