import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bookingTypeId = searchParams.get("bookingTypeId");
  const starts_at = searchParams.get("starts_at");
  const ends_at = searchParams.get("ends_at");
  const token = process.env.TIDYCAL_ACCESS_TOKEN ?? "";

  if (!bookingTypeId || !starts_at || !ends_at) {
    return NextResponse.json(
      { message: "Missing required query parameters" },
      { status: 400 }
    );
  }

  const url = `https://tidycal.com/api/booking-types/${bookingTypeId}/timeslots?starts_at=${starts_at}&ends_at=${ends_at}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}
