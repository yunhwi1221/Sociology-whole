import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { articles, terms, theorists } from '@/lib/data'

export default function ArticlesPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[22px] font-medium text-secondary">시사·현실 연결</h1>
        <p className="mt-1 text-sm text-text-secondary">
          최근 시사 이슈를 사회학 개념과 이론으로 해석합니다.
        </p>
      </div>

      <div className="space-y-4">
        {articles.map((article) => {
          const relatedTheorist = theorists.find(t => article.relatedTheorists.includes(t.id))
          return (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="block p-4 bg-white border border-border rounded-card hover:shadow-card transition-shadow"
            >
              <p className="text-xs text-text-secondary">{article.createdAt}</p>
              <h3 className="mt-1 font-serif font-medium text-secondary">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                {article.summary}
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {relatedTheorist && (
                  <Badge variant="primary">{relatedTheorist.name}</Badge>
                )}
                {article.relatedConcepts.slice(0, 2).map(cId => {
                  const term = terms.find(t => t.id === cId)
                  return term ? <Badge key={cId}>{term.name.split(' (')[0]}</Badge> : null
                })}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
