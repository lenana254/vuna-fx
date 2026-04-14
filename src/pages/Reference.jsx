import React from 'react'
import { getMetaMarkdown } from '../markdown.js'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'

export default function Reference() {
  const content = getMetaMarkdown()

  return (
    <main className="page">
      <div className="ref-header">
        <h1>Reference</h1>
        <p>Operating principles, kill switches, journaling system, and the three-layer stack.</p>
      </div>
      <MarkdownRenderer content={content} />
    </main>
  )
}
