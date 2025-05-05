import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { NextResponse } from 'next/server'

export async function GET() {
  // Define your dynamic URLs here
  const fields: ISitemapField[] = [
    {
      loc: 'https://praewbankforevermore.love', // Homepage
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
    // Add other dynamic routes as needed
  ]

  try {
    // Generate XML
    const sitemap = await getServerSideSitemap(fields)
    return new NextResponse(sitemap.toString(), {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  } catch (error) {
    console.error('Error generating server sitemap:', error)
    return NextResponse.json({ error: 'Failed to generate sitemap' }, { status: 500 })
  }
} 