"use client";

import { dateToISO, envConfig, ISOToTime } from "@/services";
import { useEffect, useRef, useState } from "react";

interface TidyTimeSlot {
  starts_at: string;
  ends_at: string;
  available_bookings: number;
}

interface Props {
  date: Date | undefined;
  setActiveStage: (stage: number) => void;
}

export default function TidyTimeSlots({ date, setActiveStage }: Props) {
  const [slots, setSlots] = useState<TidyTimeSlot[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const calledOnceRef = useRef(false); // To prevent multiple API calls in Strict Mode

  useEffect(() => {
    if (!date) return;

    if (calledOnceRef.current) return; // already called
    calledOnceRef.current = true;

    const startAt = dateToISO(date);
    const endAt = dateToISO(date, 23, 59, 59);

    const loadSlots = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/tidycal/timeslots?bookingTypeId=${envConfig.tidycalBookingTypeId}&starts_at=${startAt}&ends_at=${endAt}`
        );

        if (!res.ok) throw new Error("Failed to fetch time slots");

        const json = await res.json();
        setSlots(json?.data || []);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadSlots();
  }, [date]);

  if (!date) return null;

  // Loading skeleton
  if (loading)
    return (
      <div className="flex flex-col gap-2">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="h-[46px] w-full bg-natural-800 animate-pulse rounded-md"
            ></div>
          ))}
      </div>
    );

  // Error fallback
  if (error) return <div className="text-red-500 text-sm">Error: {error}</div>;

  // No slots
  if (slots.length === 0)
    return <div className="text-text-200 text-sm">No available slots</div>;

  return (
    <div className="flex flex-col gap-2">
      {slots.map((item, i) => (
        <button
          key={i}
          onClick={() => setActiveStage(2)}
          className="text-white font-inter text-base min-h-[46px] w-full bg-natural-black hover:bg-main-600 transition-colors rounded-md"
        >
          {ISOToTime(item.starts_at)}
        </button>
      ))}
    </div>
  );
}
