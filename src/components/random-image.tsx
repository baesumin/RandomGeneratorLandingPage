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
        poster="/og-image.avif"
        title="Random Generator App Demo"
        aria-label="Random Generator App Demo Video"
      >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
