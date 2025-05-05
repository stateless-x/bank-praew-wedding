import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET() {
  const headersList = await headers();
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const host = headersList.get('host');
  const baseUrl = `${protocol}://${host}`;
  const officialUrl = 'https://praewbankforevermore.love';
  
  const ogImageUrl = `${baseUrl}/pb-home-v2.png`;
  const officialOgImageUrl = `${officialUrl}/pb-home-v2.png`;
  
  return NextResponse.json({
    currentOgImageUrl: ogImageUrl,
    officialOgImageUrl,
    baseUrl,
    officialUrl,
    message: 'This endpoint helps debug OpenGraph image URLs',
  });
} 