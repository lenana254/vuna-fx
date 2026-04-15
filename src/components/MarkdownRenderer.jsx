import React, { useMemo } from 'react'
import { marked } from 'marked'
import { slugify } from '../data/searchIndex.js'

// marked v9+: use marked.use() instead of the removed marked.setOptions()
marked.use({ gfm: true, breaks: false })

export default function MarkdownRenderer({ content, className = '' }) {
  const html = useMemo(() => {
    if (!content) return '<p class="state-empty">Content not found.</p>'
    const raw = marked.parse(content)
    return raw
      // Add id to every h2 so search results can scroll-to-section
      .replace(/<h2>([^<]+)<\/h2>/g, (_, text) => {
        const id = slugify(text)
        return `<h2 id="${id}">${text}</h2>`
      })
      // Wrap tables in scroll container for mobile (MOB-08)
      .replace(/<table>/g, '<div class="table-scroll"><table>')
      .replace(/<\/table>/g, '</table></div>')
  }, [content])

  return (
    <div
      className={`markdown-content ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
