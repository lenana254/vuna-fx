// Load all curriculum markdown files at build time via Vite glob import.
// Paths are relative to this file (src/markdown.js → ../curriculum/).

const weekFiles = import.meta.glob('../curriculum/week-*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const metaFiles = import.meta.glob('../curriculum/meta.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const appendicesFiles = import.meta.glob('../curriculum/appendices.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export function getWeekMarkdown(weekNumber) {
  const padded = String(weekNumber).padStart(2, '0')
  const key = `../curriculum/week-${padded}.md`
  return weekFiles[key] ?? null
}

export function getMetaMarkdown() {
  return metaFiles['../curriculum/meta.md'] ?? null
}

export function getAppendicesMarkdown() {
  return appendicesFiles['../curriculum/appendices.md'] ?? null
}
