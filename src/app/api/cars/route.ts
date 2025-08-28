// src/app/api/cars/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const carListUrl = process.env.NEXT_PUBLIC_CAR_LIST;
    console.log('CAR_LIST env var:', carListUrl);  // add this line

    if (!carListUrl) {
      return NextResponse.json({ success: false, message: 'CAR_LIST URL not found' }, { status: 500 });
    }

    const response = await fetch(carListUrl);

    if (!response.ok) {
      return NextResponse.json({ success: false, message: 'Failed to fetch from CAR_LIST URL' }, { status: response.status });
    }

    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    console.error('API Fetch Error:', error);
    return NextResponse.json({ success: false, message: 'Unexpected server error' }, { status: 500 });
  }
}
