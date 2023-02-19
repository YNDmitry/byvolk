export default [
	{ UserAgent: '*' },
	{ Disallow: '' },
	{ BlankLine: false },
	{ Comment: '' },
	{ Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` },
]
