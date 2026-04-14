import React, { useMemo } from 'react'
import { marked } from 'marked'

// Configure marked once
marked.setOptions({
  gfm: true,
  breaks: false,
})

export default function MarkdownRenderer({ content, className = '' }) {
  const html = useMemo(() => {
    if (!content) return '<p class="state-empty">Content not found.</p>'
    return marked(content)
  }, [content])

  return (
    <div
      className={`markdown-content ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
