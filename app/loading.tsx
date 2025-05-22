"use client";
import loader from "@/lib/loader.json";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="min-h-screen w-full fixed top-0 left-0 right-0 bottom-0 z-[9999] flex flex-col items-center justify-center gap-4 bg-main overflow-hidden">
      <Lottie animationData={loader} loop={true} style={{ width: "200px" }} />
      <p className="text-xl font-bold">Loading page...</p>
    </div>
  );
};

export default Loading;
