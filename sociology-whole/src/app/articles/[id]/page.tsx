import { notFound } from 'next/navigation'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { articles, terms, theorists } from '@/lib/data'

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === params.id)
  if (!article) notFound()

  const relatedTermList = terms.filter(t => article.relatedConcepts.includes(t.id))
  const relatedTheoristList = theorists.filter(t => article.relatedTheorists.includes(t.id))

  return (
    <div className="space-y-6">
      <div>
        <Link href="/articles" className="text-sm text-primary-light hover:text-primary">
          ← 시사·현실 연결
        </Link>
      </div>

      <article>
        <p className="text-xs text-text-secondary">{article.createdAt}</p>
        <h1 className="mt-2 text-xl font-medium text-secondary">{article.title}</h1>
        <p className="mt-4 text-[15px] text-ink leading-relaxed">{article.summary}</p>
      </article>

      {/* 관련 개념 */}
      {relatedTermList.length > 0 && (
        <section>
          <h2 className="text-base font-medium text-secondary mb-3">관련 개념</h2>
          <div className="space-y-2">
            {relatedTermList.map((term) => (
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
      {relatedTheoristList.length > 0 && (
        <section>
          <h2 className="text-base font-medium text-secondary mb-3">관련 이론가</h2>
          <div className="space-y-2">
            {relatedTheoristList.map((t) => (
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
    </div>
  )
}
