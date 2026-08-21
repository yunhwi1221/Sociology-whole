'use client'

import { useState } from 'react'
import Link from 'next/link'
import SearchBar from '@/components/ui/SearchBar'
import Badge from '@/components/ui/Badge'
import { terms, theorists, courses } from '@/lib/data'

export default function GlossaryPage() {
  const [search, setSearch] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const filtered = terms.filter((term) => {
    const matchesSearch = term.name.toLowerCase().includes(search.toLowerCase()) ||
      term.definition.toLowerCase().includes(search.toLowerCase())
    const matchesCourse = !selectedCourse || term.courses.includes(selectedCourse)
    return matchesSearch && matchesCourse
  })

  return (
    <div className="space-y-5">
      <h1 className="text-[22px] font-medium text-secondary">용어집</h1>

      <SearchBar
        placeholder="개념명으로 검색..."
        value={search}
        onChange={setSearch}
      />

      {/* 과목 필터 */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setSelectedCourse(null)}
          className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            !selectedCourse ? 'bg-primary text-white' : 'bg-surface text-text-secondary hover:bg-border'
          }`}
        >
          전체
        </button>
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => setSelectedCourse(course.id)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              selectedCourse === course.id ? 'bg-primary text-white' : 'bg-surface text-text-secondary hover:bg-border'
            }`}
          >
            {course.name}
          </button>
        ))}
      </div>

      {/* 용어 리스트 */}
      <div className="space-y-0 divide-y divide-border">
        {filtered.map((term) => {
          const relatedTheorist = theorists.find(t => term.theorists.includes(t.id))
          return (
            <Link
              key={term.id}
              href={`/glossary/${term.id}`}
              className="block py-4 hover:bg-surface/50 -mx-2 px-2 rounded transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-medium text-secondary text-[15px]">{term.name}</h3>
                  <p className="mt-1 text-sm text-text-secondary line-clamp-2">{term.definition}</p>
                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    {relatedTheorist && (
                      <Badge variant="primary">{relatedTheorist.name}</Badge>
                    )}
                    {term.courses.slice(0, 2).map(cId => {
                      const course = courses.find(c => c.id === cId)
                      return course ? <Badge key={cId}>{course.name}</Badge> : null
                    })}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-secondary py-8">
          검색 결과가 없습니다.
        </p>
      )}
    </div>
  )
}
