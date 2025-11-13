import { envConfig } from "@/services";

export default async function TidyTimeSlots({ date }: { date: string }) {
  const slots = await fetch(
    `${envConfig.tidycalApiKey}/booking-types/${envConfig.tidycalBookingTypeId}/timeslots?starts_at=${date}&ends_at=${date}`,
    {
      headers: {
        Authorization: envConfig.tidycalAccessToken || "",
      },
      cache: "no-store",
    }
  );
  console.log(slots);
  return null;
}
