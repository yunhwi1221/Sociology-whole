import { notFound } from 'next/navigation'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { terms, theorists, courses } from '@/lib/data'

export default function TermDetailPage({ params }: { params: { id: string } }) {
  const term = terms.find(t => t.id === params.id)
  if (!term) notFound()

  const relatedTheoristList = theorists.filter(t => term.theorists.includes(t.id))
  const relatedCourseList = courses.filter(c => term.courses.includes(c.id))
  const relatedTermList = terms.filter(t => term.relatedTerms.includes(t.id))

  return (
    <div className="space-y-6">
      <div>
        <Link href="/glossary" className="text-sm text-primary-light hover:text-primary">
          ← 용어집
        </Link>
      </div>

      <div>
        <h1 className="text-[22px] font-medium text-secondary">{term.name}</h1>
        <p className="mt-4 text-[15px] text-ink leading-relaxed">{term.definition}</p>
      </div>

      {/* 관련 이론가 */}
      {relatedTheoristList.length > 0 && (
        <section>
          <h2 className="text-base font-medium text-secondary mb-2">관련 이론가</h2>
          <div className="space-y-2">
            {relatedTheoristList.map(t => (
              <Link
                key={t.id}
                href={`/theorists/${t.id}`}
                className="flex items-center gap-3 p-3 bg-surface rounded-card hover:bg-border/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-medium text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-medium text-sm text-secondary">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 관련 전공수업 */}
      {relatedCourseList.length > 0 && (
        <section>
          <h2 className="text-base font-medium text-secondary mb-2">관련 전공수업</h2>
          <div className="flex gap-2 flex-wrap">
            {relatedCourseList.map(c => (
              <Link key={c.id} href={`/courses/${c.id}`}>
                <Badge variant="primary">{c.name}</Badge>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 관련 용어 */}
      {relatedTermList.length > 0 && (
        <section>
          <h2 className="text-base font-medium text-secondary mb-2">관련 개념</h2>
          <div className="space-y-1">
            {relatedTermList.map(t => (
              <Link
                key={t.id}
                href={`/glossary/${t.id}`}
                className="block p-3 bg-surface rounded-card hover:bg-border/50 transition-colors"
              >
                <p className="font-medium text-sm text-secondary">{t.name}</p>
                <p className="text-xs text-text-secondary line-clamp-1">{t.definition}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
