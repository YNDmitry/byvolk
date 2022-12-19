export default [
  { UserAgent: '*' },
  { Disallow: '/' },
  { BlankLine: true },
  { Comment: '' },
  { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
]