import React from 'react'

export default function TechBadge({ tech }) {
  return <span className="badge" aria-label={`Tech ${tech}`}>{tech}</span>
}
