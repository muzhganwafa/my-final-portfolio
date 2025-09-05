import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TechBadge from './TechBadge'
import ProgressBar from './ProgressBar'

export default function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="card">
      <header style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <h3 style={{ margin: 0 }}>{p.title} <small style={{ color:'var(--muted)' }}>· {p.role}</small></h3>
        <span className="badge" aria-label={`Status ${p.status}`}>{p.status}</span>
      </header>

      {p.image ? (
        <img src={p.image} alt={`${p.title} preview`} loading="lazy" style={{ width:'100%', borderRadius:10, marginTop:10 }} />
      ) : (
        <div aria-hidden="true" style={{ width:'100%', height:180, borderRadius:10, marginTop:10, background:'rgba(100,100,100,.2)', display:'grid', placeItems:'center' }}>
          <strong>{p.title[0]}</strong>
        </div>
      )}

      <div className="tech" aria-label="Tech stack">
        {p.tech.map(t => <TechBadge key={t} tech={t} />)}
      </div>

      <ProgressBar value={p.progress} max={100} />

      <button
        className="btn secondary"
        style={{ marginTop: 8 }}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        {open ? 'Hide details' : 'More details'}
      </button>

      {open && (
        <div style={{ marginTop: 8 }}>
          <p><strong>Problem:</strong> {p.problem}</p>
          <p><strong>Solution:</strong> {p.solution}</p>
          <p><strong>Outcome:</strong> {p.outcome}</p>
        </div>
      )}

      <div className="list-inline" style={{ marginTop: 10 }}>
        <Link className="btn" to={`/projects/${p.id}`} aria-label={`View details for ${p.title}`}>View Project</Link>
        <a className="btn secondary" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
        <a className="btn secondary" href={p.repo} target="_blank" rel="noreferrer">Code</a>
      </div>
    </article>
  )
}
