"use client";

import { PlayCircle, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    title: "Eid Clothes Distribution",
    src: "https://shefbd.org/wp-content/uploads/2024/04/WhatsApp-Video-2024-04-24-at-18.02.41_9e9fa142.mp4",
  },
  {
    title: "Community Health Camp",
    src: "https://shefbd.org/wp-content/uploads/2024/04/WhatsApp-Video-2024-04-24-at-18.02.41_564066a3.mp4",
  },
  {
    title: "Community Health Camp",
    src: "https://shefbd.org/wp-content/uploads/2024/04/WhatsApp-Video-2024-04-24-at-18.02.41_564066a3.mp4",
  },
];

export default function VideoGalleryPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700"
          >
            <Video className="mr-2 h-4 w-4" />
            Video Gallery
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Our Activities in Videos
          </h1>

          <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />

          <p className="text-base leading-8 text-slate-600">
            Watch selected moments from our humanitarian and social welfare
            activities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card
              key={video.src}
              className="overflow-hidden rounded-3xl border-emerald-100 bg-white shadow-lg shadow-emerald-900/5"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>

              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <PlayCircle className="h-5 w-5 text-emerald-700" />
                  <h3 className="font-bold text-emerald-950">{video.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
