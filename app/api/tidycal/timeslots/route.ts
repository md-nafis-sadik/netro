import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const token = process.env.TIDYCAL_ACCESS_TOKEN;
  const url = `https://tidycal.com/netrosystems/discussion?json`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}
