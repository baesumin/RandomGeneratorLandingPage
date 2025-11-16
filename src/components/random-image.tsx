"use client";

export default function RandomImage() {
  return (
    <div className="relative h-full w-full bg-gray-900">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
