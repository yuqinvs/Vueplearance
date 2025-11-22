import fs from 'node:fs'
import path from 'node:path'

const projectRoot = process.cwd()
const distDir = path.join(projectRoot, 'dist')
const routerPath = path.join(projectRoot, 'src', 'router', 'index.ts')
const viewsDir = path.join(projectRoot, 'src', 'views')
const configPath = path.join(projectRoot, 'sitemap.config.json')

const defaultConfig = {
  baseUrl: 'https://plearance.com',
  include: ['*'],
  exclude: [],
  languages: [],
  changefreqDefault: 'weekly',
  priorityDefault: 0.5,
  changefreqMap: {
    '/': 'daily',
    '/products': 'weekly',
    '/store': 'monthly',
    '/brand-story': 'monthly',
    '/contacts': 'monthly'
  },
  priorityMap: {
    '/': 1.0,
    '/products': 0.8,
    '/store': 0.7,
    '/brand-story': 0.6,
    '/contacts': 0.5
  }
}

function loadConfig() {
  try {
    const raw = fs.readFileSync(configPath, 'utf-8')
    const parsed = JSON.parse(raw)
    return { ...defaultConfig, ...parsed }
  } catch {
    return defaultConfig
  }
}

function ensureDist() {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }
}

function parseImports(routerSource) {
  const importRegex = /import\s+(\w+)\s+from\s+['"]([^'\"]+)['"]/g
  const map = new Map()
  let m
  while ((m = importRegex.exec(routerSource))) {
    const varName = m[1]
    let importPath = m[2]
    if (importPath.startsWith('@/')) {
      importPath = importPath.replace(/^@\//, 'src/')
    }
    const absPath = path.join(projectRoot, importPath)
    map.set(varName, absPath)
  }
  return map
}

function parseRoutes(routerSource) {
  const routes = []
  const routeRegex = /\{[\s\S]*?path:\s*['"]([^'\"]+)['"][\s\S]*?name:\s*['"]([^'\"]+)['"][\s\S]*?component:\s*(\w+)[\s\S]*?\}/g
  let m
  while ((m = routeRegex.exec(routerSource))) {
    routes.push({ path: m[1], name: m[2], componentVar: m[3] })
  }
  return routes
}

function formatDateISO(date) {
  // Sitemap accepts W3C Datetime. Use date portion for simplicity.
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

function routeIncluded(routePath, includePatterns, excludePatterns) {
  const matchPattern = (patterns) => patterns.some(p => {
    if (p === '*') return true
    return p === routePath
  })
  const included = matchPattern(includePatterns)
  const excluded = matchPattern(excludePatterns)
  return included && !excluded
}

function buildSitemapXml({ baseUrl, routesData, languages }) {
  const hasHreflang = Array.isArray(languages) && languages.length > 0
  const xmlnsXhtml = hasHreflang ? ' xmlns:xhtml="http://www.w3.org/1999/xhtml"' : ''
  const lines = []
  lines.push('<?xml version="1.0" encoding="UTF-8"?>')
  lines.push(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${xmlnsXhtml}>`)
  for (const r of routesData) {
    lines.push('  <url>')
    lines.push(`    <loc>${baseUrl}${r.path}</loc>`) 
    lines.push(`    <lastmod>${r.lastmod}</lastmod>`) 
    lines.push(`    <changefreq>${r.changefreq}</changefreq>`) 
    lines.push(`    <priority>${r.priority.toFixed(1)}</priority>`) 
    // Optional hreflang entries only if distinct URLs per language are configured.
    if (hasHreflang && r.alternates && r.alternates.length) {
      for (const alt of r.alternates) {
        lines.push(`    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`)
      }
    }
    lines.push('  </url>')
  }
  lines.push('</urlset>')
  return lines.join('\n')
}

function main() {
  const config = loadConfig()
  ensureDist()
  const routerSource = fs.readFileSync(routerPath, 'utf-8')
  const importMap = parseImports(routerSource)
  const routes = parseRoutes(routerSource)

  const routesData = []
  for (const r of routes) {
    if (!routeIncluded(r.path, config.include, config.exclude)) continue

    const compPath = importMap.get(r.componentVar)
    let lastmod = formatDateISO(new Date())
    if (compPath && fs.existsSync(compPath)) {
      try {
        const stat = fs.statSync(compPath)
        lastmod = formatDateISO(stat.mtime)
      } catch {}
    }
    const changefreq = config.changefreqMap[r.path] || config.changefreqDefault
    const priority = config.priorityMap[r.path] ?? config.priorityDefault

    routesData.push({ path: r.path, lastmod, changefreq, priority, alternates: [] })
  }

  const xml = buildSitemapXml({ baseUrl: config.baseUrl, routesData, languages: config.languages })
  const outPath = path.join(distDir, 'my_sitemap.xml')
  fs.writeFileSync(outPath, xml, { encoding: 'utf-8' })
  console.log(`Sitemap generated: ${outPath}`)
}

main()