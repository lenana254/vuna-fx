import React from 'react'
import { getAppendicesMarkdown } from '../markdown.js'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'

export default function Appendices() {
  const content = getAppendicesMarkdown()

  return (
    <main className="page">
      <div className="ref-header">
        <h1>Appendices</h1>
        <p>Part A eval, Month 4 survival guide, resources, glossary, and journaling templates.</p>
      </div>
      <MarkdownRenderer content={content} />
    </main>
  )
}
