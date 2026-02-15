"use client";
import loader from "@/lib/loader.json";
import Lottie from "lottie-react";

interface InlineLoaderProps {
  h?: string;
  message?: string;
}

const InlineLoader = ({ h = "180px", message }: InlineLoaderProps) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-2 bg-darkPurplebg"
      style={{ minHeight: h }}
    >
      <Lottie animationData={loader} loop={true} style={{ width: "120px" }} />
      {message && <p className="text-sm text-white/60">{message}</p>}
    </div>
  );
};

export default InlineLoader;
