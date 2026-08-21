import { notFound } from 'next/navigation'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { courses, terms, theorists, articles } from '@/lib/data'

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find(c => c.id === params.id)
  if (!course) notFound()

  const courseTerms = terms.filter(t => t.courses.includes(course.id))
  const courseTheoristIds = [...new Set(courseTerms.flatMap(t => t.theorists))]
  const courseTheorists = theorists.filter(t => courseTheoristIds.includes(t.id))
  const courseArticles = articles.filter(a =>
    a.relatedConcepts.some(c => courseTerms.some(t => t.id === c))
  )

  return (
    <div className="space-y-6">
      <div>
        <Link href="/courses" className="text-sm text-primary-light hover:text-primary">
          ← 전공수업
        </Link>
      </div>

      <div>
        <h1 className="text-[22px] font-medium text-secondary">{course.name}</h1>
        <p className="mt-2 text-sm text-text-secondary">{course.description}</p>
      </div>

      {/* 관련 용어 */}
      {courseTerms.length > 0 && (
        <section>
          <h2 className="text-base font-medium text-secondary mb-3">관련 용어</h2>
          <div className="space-y-2">
            {courseTerms.map((term) => (
              <Link
                key={term.id}
                href={`/glossary/${term.id}`}
                className="block p-3 bg-surface rounded-card hover:bg-border/50 transition-colors"
              >
                <p className="font-medium text-sm text-secondary">{term.name}</p>
                <p className="text-xs text-text-secondary line-clamp-1 mt-0.5">{term.definition}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 관련 이론가 */}
      {courseTheorists.length > 0 && (
        <section>
          <h2 className="text-base font-medium text-secondary mb-3">관련 이론가</h2>
          <div className="space-y-2">
            {courseTheorists.map((t) => (
              <Link
                key={t.id}
                href={`/theorists/${t.id}`}
                className="flex items-center gap-3 p-3 bg-surface rounded-card hover:bg-border/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-serif font-medium text-sm shrink-0">
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

      {/* 관련 시사 아티클 */}
      {courseArticles.length > 0 && (
        <section>
          <h2 className="text-base font-medium text-secondary mb-3">관련 시사·현실 연결</h2>
          <div className="space-y-2">
            {courseArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="block p-3 bg-surface rounded-card hover:bg-border/50 transition-colors"
              >
                <p className="font-medium text-sm text-secondary">{article.title}</p>
                <p className="text-xs text-text-secondary mt-1">{article.createdAt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
