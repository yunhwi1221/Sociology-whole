'use client'

import { useState } from 'react'
import Link from 'next/link'
import SearchBar from '@/components/ui/SearchBar'
import Badge from '@/components/ui/Badge'
import { theorists } from '@/lib/data'

export default function TheoristsPage() {
  const [search, setSearch] = useState('')

  const filtered = theorists.filter((t) =>
    t.name.includes(search) || t.nameEn.toLowerCase().includes(search.toLowerCase()) ||
    t.keyConcepts.some(c => c.includes(search))
  )

  return (
    <div className="space-y-5">
      <h1 className="text-[22px] font-medium text-secondary">이론가</h1>

      <SearchBar
        placeholder="이론가 이름 또는 개념으로 검색..."
        value={search}
        onChange={setSearch}
      />

      <div className="space-y-3">
        {filtered.map((theorist) => (
          <Link
            key={theorist.id}
            href={`/theorists/${theorist.id}`}
            className="flex items-start gap-4 p-4 bg-white border border-border rounded-card hover:shadow-card transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-serif font-semibold text-lg shrink-0">
              {theorist.name[0]}
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <h3 className="font-medium text-secondary">{theorist.name}</h3>
                <span className="text-xs text-text-secondary">{theorist.nameEn}</span>
              </div>
              <p className="text-xs text-text-secondary mt-0.5">
                {theorist.birth}–{theorist.death} · {theorist.nationality}
              </p>
              <p className="mt-1 text-sm text-text-secondary line-clamp-1">{theorist.summary}</p>
              <div className="mt-2 flex gap-1.5 flex-wrap">
                {theorist.keyConcepts.slice(0, 3).map((concept) => (
                  <Badge key={concept} variant="primary">{concept}</Badge>
                ))}
                {theorist.keyConcepts.length > 3 && (
                  <Badge>+{theorist.keyConcepts.length - 3}</Badge>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-secondary py-8">
          검색 결과가 없습니다.
        </p>
      )}
    </div>
  )
}
