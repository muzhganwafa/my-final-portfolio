import React from 'react'

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="search"
      placeholder="Search projects…"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      aria-label="Search projects"
    />
  )
}
