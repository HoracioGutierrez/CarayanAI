import { MetadataRoute } from 'next'
import { getAllChats } from './lib/actions'

/* 

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://carayanai.verce.app</loc>
    <lastmod>2023-07-20T15:02:24.021Z</lastmod>
  </url>
  <url>
    <loc>https://carayanai.verce.app/history</loc>
    <lastmod>2023-07-20T15:02:24.021Z</lastmod>
  </url>
  <url>
    <loc>https://carayanai.verce.app/privacy</loc>
    <lastmod>2023-07-20T15:02:24.021Z</lastmod>
  </url>
  <url>
    <loc>https://carayanai.verce.app/about</loc>
    <lastmod>2023-07-20T15:02:24.021Z</lastmod>
  </url>
  <url>
    <loc>https://carayanai.verce.app/showcase</loc>
    <lastmod>2023-07-20T15:02:24.021Z</lastmod>
  </url>
</urlset>

*/
 
export default async function sitemap() {

  const ids = await getAllChats()

  const urls = [
    "https://carayanai.verce.app",
    "https://carayanai.verce.app/history",
    "https://carayanai.verce.app/privacy",
    "https://carayanai.verce.app/about",
    "https://carayanai.verce.app/showcase",
    ...ids.map(id => `https://carayanai.verce.app/share/${id}`)
  ]

  return [
    /* {
      url: 'https://acme.com',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
    }, */
    ...urls.map(url => ({ url, lastModified: new Date() }))
  ]
}