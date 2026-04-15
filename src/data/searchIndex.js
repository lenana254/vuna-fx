/**
 * Search index built at component mount time from all curriculum markdown files.
 * All 52 week files + meta.md + appendices.md are included.
 * Each entry is a discrete searchable chunk (whole-week or named section).
 */

import { getWeekMarkdown, getMetaMarkdown, getAppendicesMarkdown } from '../markdown.js'
import { WEEKS, getPhaseForWeek } from './curriculum.js'

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Slug used both when building index entries and when MarkdownRenderer adds heading IDs */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-{2,}/g, '-')
    .trim()
}

/** Strip markdown syntax so Fuse searches plain prose */
function stripMarkdown(md) {
  return md
    .replace(/^#{1,6}\s+/gm, '')           // headings
    .replace(/\*{1,3}([^*\n]+)\*{1,3}/g, '$1') // bold / italic
    .replace(/`{1,3}[^\n`]*`{1,3}/g, '')   // inline code + fenced
    .replace(/^\s*```[\s\S]*?```\s*$/gm, '') // fenced blocks
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')  // images
    .replace(/^>\s*/gm, '')                // blockquotes
    .replace(/^\s*[-*+]\s+/gm, '')         // unordered list markers
    .replace(/^\s*\d+\.\s+/gm, '')         // ordered list markers
    .replace(/^\|[^\n]+\|$/gm, '')         // table rows
    .replace(/^\s*\|[-:| ]+\|\s*$/gm, '')  // table separators
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

/** Split a markdown document into sections delineated by ## headings */
function splitIntoSections(md) {
  const lines = md.split('\n')
  const sections = []
  let current = { heading: null, slug: null, rawLines: [] }

  for (const line of lines) {
    const m = line.match(/^##\s+(.+)$/)
    if (m) {
      if (current.heading !== null || current.rawLines.some(l => l.trim())) {
        sections.push(current)
      }
      current = { heading: m[1].trim(), slug: slugify(m[1].trim()), rawLines: [] }
    } else {
      current.rawLines.push(line)
    }
  }
  if (current.heading !== null || current.rawLines.some(l => l.trim())) {
    sections.push(current)
  }

  return sections.map(s => ({
    heading: s.heading,
    slug: s.slug,
    text: stripMarkdown(s.rawLines.join('\n')),
  }))
}

/** Map a section heading + source type to one of the four result categories */
function detectCategory(heading, fileType) {
  if (fileType === 'appendices') return 'Reference'
  const h = (heading ?? '').toLowerCase()

  if (fileType === 'meta') {
    if (/kill.?switch|operating.?principle/.test(h)) return 'Rules'
    return 'Reference'
  }

  // Week sections
  if (/core.?concept|learning.?objective|concept|definition|key.?term|what.?is/.test(h)) {
    return 'Concepts'
  }
  if (/kill.?switch|rule|principle/.test(h)) return 'Rules'
  return 'Weeks'
}

// ── Index builder ─────────────────────────────────────────────────────────────

let _cached = null

export function buildSearchIndex() {
  if (_cached) return _cached

  const entries = []

  // ── 52 week files ────────────────────────────────────────────────────────────
  for (const week of WEEKS) {
    const raw = getWeekMarkdown(week.number)
    if (!raw) continue

    const phase = getPhaseForWeek(week.number)
    const sections = splitIntoSections(raw)
    const allHeadings = sections.filter(s => s.heading).map(s => s.heading)
    const fullText = stripMarkdown(raw)
    const paddedNum = String(week.number).padStart(2, '0')

    // Primary week entry — searchable by title, objectives, everything
    entries.push({
      id: `week-${week.number}`,
      type: 'week',
      weekNumber: week.number,
      phase: phase?.id ?? null,
      phaseLabel: phase?.label ?? null,
      title: `Week ${paddedNum} — ${week.title}`,
      weekTitle: week.title,
      headings: allHeadings,
      text: fullText,
      category: 'Weeks',
      url: `#/week/${week.number}`,
      anchor: null,
    })

    // Extra entries for concept / rules sections within the week
    for (const sec of sections) {
      if (!sec.heading || !sec.text.trim()) continue
      const cat = detectCategory(sec.heading, 'week')
      if (cat !== 'Weeks') {
        entries.push({
          id: `week-${week.number}-${sec.slug}`,
          type: 'week',
          weekNumber: week.number,
          phase: phase?.id ?? null,
          phaseLabel: phase?.label ?? null,
          title: `${sec.heading} (Week ${paddedNum})`,
          weekTitle: week.title,
          headings: [sec.heading],
          text: sec.text,
          category: cat,
          url: `#/week/${week.number}`,
          anchor: sec.slug,
        })
      }
    }
  }

  // ── meta.md (Reference page) ─────────────────────────────────────────────────
  const metaRaw = getMetaMarkdown()
  if (metaRaw) {
    const sections = splitIntoSections(metaRaw)
    for (const sec of sections) {
      if (!sec.text.trim() && !sec.heading) continue
      const cat = detectCategory(sec.heading, 'meta')
      entries.push({
        id: `meta-${sec.slug ?? 'intro'}`,
        type: 'meta',
        weekNumber: null,
        phase: null,
        phaseLabel: null,
        title: sec.heading ?? 'Reference Overview',
        weekTitle: null,
        headings: sec.heading ? [sec.heading] : [],
        text: sec.text,
        category: cat,
        url: '#/reference',
        anchor: sec.slug,
      })
    }
  }

  // ── appendices.md ─────────────────────────────────────────────────────────────
  const appRaw = getAppendicesMarkdown()
  if (appRaw) {
    const sections = splitIntoSections(appRaw)
    for (const sec of sections) {
      if (!sec.text.trim() && !sec.heading) continue
      entries.push({
        id: `appendices-${sec.slug ?? 'intro'}`,
        type: 'appendices',
        weekNumber: null,
        phase: null,
        phaseLabel: null,
        title: sec.heading ?? 'Appendices',
        weekTitle: null,
        headings: sec.heading ? [sec.heading] : [],
        text: sec.text,
        category: 'Reference',
        url: '#/appendices',
        anchor: sec.slug,
      })
    }
  }

  _cached = entries
  return entries
}
