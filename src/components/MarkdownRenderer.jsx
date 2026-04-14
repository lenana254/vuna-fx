import React, { useMemo } from 'react'
import { marked } from 'marked'

// marked v9+: use marked.use() instead of the removed marked.setOptions()
marked.use({ gfm: true, breaks: false })

export default function MarkdownRenderer({ content, className = '' }) {
  const html = useMemo(() => {
    if (!content) return '<p class="state-empty">Content not found.</p>'
    // Wrap every <table> in a scroll container so wide tables don't blow out
    // the viewport on mobile (MOB-08 / REF-07)
    const raw = marked.parse(content)
    return raw
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
