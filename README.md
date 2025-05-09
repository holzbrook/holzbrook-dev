# Andrew Hol(z)brook | Dev

[Resume Website](https://holzbrook.dev) for Andrew Holbrook.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c154dae-07af-4229-8d07-2f76eeeb709b/deploy-status)](https://app.netlify.com/sites/andrew-holzbrook-dev/deploys)

## SEO and Crawling

This project uses a `public/robots.txt` file to manage how search engine crawlers interact with the site. The current rules are:

- **`User-agent: *`**: These rules apply to all web crawlers (bots).
- **`Disallow: /_next/`**: This prevents crawlers from accessing files and folders under the `/_next/` path. This path is often associated with Next.js build artifacts or internal framework files. For an Astro site, ensure this rule is still relevant to your project's structure or any specific tooling you might be using.
- **`Allow: /`**: This allows crawlers to access all other content on the site by default, unless a more specific `Disallow` rule prevents it.
- **`Sitemap: https://holzbrook.dev/sitemap-index.xml`**: This line specifies the location of the XML sitemap for the site. The sitemap helps crawlers discover all crawlable pages. It's automatically generated during the build process by the `@astrojs/sitemap` integration.

It's important to ensure these rules are up-to-date with the site's structure and SEO strategy.
