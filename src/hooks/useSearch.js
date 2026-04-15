import { useState, useCallback, useMemo } from 'react'
import Fuse from 'fuse.js'
import { buildSearchIndex } from '../data/searchIndex.js'

const FUSE_OPTIONS = {
  keys: [
    { name: 'title',     weight: 4 },
    { name: 'weekTitle', weight: 3 },
    { name: 'headings',  weight: 2 },
    { name: 'text',      weight: 1 },
  ],
  includeMatches: true,
  includeScore: true,
  threshold: 0.35,
  minMatchCharLength: 2,
  ignoreLocation: true,
}

export const SUGGESTED_SEARCHES = [
  'BOS',
  'position sizing',
  'kill switch',
  'order block',
  'expectancy',
  'London session',
]

/** Extract a readable ~50-word snippet centred on the first text match */
export function extractSnippet(text, fuseMatches, query) {
  if (!text) return ''

  // Try to locate the first character match inside the 'text' field
  let matchStart = -1
  if (fuseMatches) {
    for (const m of fuseMatches) {
      if (m.key === 'text' && m.indices.length > 0) {
        matchStart = m.indices[0][0]
        break
      }
    }
  }

  // Fall back to simple substring search
  if (matchStart === -1 && query) {
    matchStart = text.toLowerCase().indexOf(query.toLowerCase())
  }

  const WIN = 160
  let start, end

  if (matchStart === -1) {
    start = 0
    end = Math.min(text.length, WIN * 2)
  } else {
    start = Math.max(0, matchStart - WIN)
    end = Math.min(text.length, matchStart + (query?.length ?? 0) + WIN)
  }

  let snippet = text.slice(start, end).replace(/\n+/g, ' ').trim()
  if (start > 0) snippet = '\u2026' + snippet
  if (end < text.length) snippet = snippet + '\u2026'

  return snippet
}

/** Wrap query terms in <mark> for display — snippet content is from bundled static files */
export function highlightSnippet(snippet, query) {
  if (!query || !snippet) return snippet
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`(${escaped})`, 'gi')
  // Split on matches so we can wrap each hit
  return snippet.replace(re, '<mark>$1</mark>')
}

export function useSearch() {
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)

  // Build Fuse instance once (index is cached in searchIndex.js)
  const fuse = useMemo(() => new Fuse(buildSearchIndex(), FUSE_OPTIONS), [])

  const results = useMemo(() => {
    const q = query.trim()
    if (q.length < 2) return []
    return fuse.search(q, { limit: 24 })
  }, [fuse, query])

  const resetActive = useCallback(() => setActiveIdx(0), [])

  return {
    query,
    setQuery,
    results,
    activeIdx,
    setActiveIdx,
    resetActive,
  }
}
