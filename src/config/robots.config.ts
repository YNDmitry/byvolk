interface RobotsTxtRule {
  UserAgent?: string
  Disallow?: string
  BlankLine?: boolean
  Comment?: string
  Sitemap?: (req: { headers: { host: string } }) => string
}

const robotsTxtRules: RobotsTxtRule[] = [
  { UserAgent: '*' },
  { Disallow: '' },
  { BlankLine: false },
  { Comment: '' },
  { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
]

export default robotsTxtRules
