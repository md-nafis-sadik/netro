import { envConfig } from "@/services";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const token = process.env.TIDYCAL_ACCESS_TOKEN ?? "";
  const body = await req.json();

  const {
    bookingTypeId,
    name,
    email,
    starts_at,
    timezone,
    booking_questions = [],
    notes = "",
  } = body;

  if (!bookingTypeId || !name || !email || !starts_at || !timezone) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const url = `${envConfig.tidycalApiKey}/booking-types/699029/bookings`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      starts_at,
      timezone,
      booking_questions,
      notes,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data }, { status: res.status });
  }

  return NextResponse.json(data);
}
