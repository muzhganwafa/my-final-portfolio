import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import TechBadge from '../components/TechBadge'
import ProgressBar from '../components/ProgressBar'

export default function ProjectDetail() {
  const { id } = useParams()
  const p = projects.find(x => x.id === id)

  if (!p) {
    return (
      <div className="card">
        <h2>Project not found</h2>
        <Link className="btn" to="/projects">Back to Projects</Link>
      </div>
    )
  }

  return (
    <article className="grid">
      <div className="card">
        <h1>{p.title}</h1>
        <p className="hint">{p.role} · {p.status}</p>
        {p.image && <img src={p.image} alt={`${p.title} preview`} loading="lazy" style={{ width:'100%', borderRadius:10 }} />}
        <div className="tech" aria-label="Tech stack">
          {p.tech.map(t => <TechBadge key={t} tech={t} />)}
        </div>
        <ProgressBar value={p.progress} max={100} />
        <p><strong>Description:</strong> {p.description}</p>
        <p><strong>Problem:</strong> {p.problem}</p>
        <p><strong>Solution:</strong> {p.solution}</p>
        <p><strong>Outcome:</strong> {p.outcome}</p>
        <div className="list-inline" style={{ marginTop: 10 }}>
          <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
          <a className="btn secondary" href={p.repo} target="_blank" rel="noreferrer">Code</a>
          <Link className="btn secondary" to="/projects">Back</Link>
        </div>
      </div>
    </article>
  )
}
