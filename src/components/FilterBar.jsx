import React from 'react'

export default function FilterBar({ allTech, active, setActive }) {
  return (
    <div className="list-inline" role="group" aria-label="Filter by tech">
      <button className={`btn secondary`} onClick={() => setActive('All')} aria-pressed={active==='All'}>All</button>
      {allTech.map(t => (
        <button key={t} className="btn secondary" onClick={() => setActive(t)} aria-pressed={active===t}>{t}</button>
      ))}
    </div>
  )
}
