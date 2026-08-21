import { notFound } from 'next/navigation'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { theorists, terms } from '@/lib/data'

export default function TheoristDetailPage({ params }: { params: { id: string } }) {
  const theorist = theorists.find(t => t.id === params.id)
  if (!theorist) notFound()

  const relatedTerms = terms.filter(t => t.theorists.includes(theorist.id))

  return (
    <div className="space-y-6">
      <div>
        <Link href="/theorists" className="text-sm text-primary-light hover:text-primary">
          ← 이론가 목록
        </Link>
      </div>

      {/* 프로필 카드 */}
      <div className="bg-white border border-border rounded-card p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-serif font-semibold text-2xl shrink-0">
            {theorist.name[0]}
          </div>
          <div>
            <h1 className="text-xl font-medium text-secondary">{theorist.name}</h1>
            <p className="text-sm text-text-secondary">{theorist.nameEn}</p>
            <p className="text-sm text-text-secondary mt-1">
              {theorist.birth}–{theorist.death} · {theorist.nationality}
            </p>
          </div>
        </div>
        <p className="mt-4 text-[15px] text-ink font-medium">{theorist.summary}</p>
      </div>

      {/* 상세 설명 */}
      <section>
        <p className="text-[15px] text-ink leading-relaxed">{theorist.description}</p>
      </section>

      {/* 핵심 개념 */}
      <section>
        <h2 className="text-base font-medium text-secondary mb-3">핵심 개념</h2>
        <div className="flex gap-2 flex-wrap">
          {theorist.keyConcepts.map((concept) => (
            <Badge key={concept} variant="primary">{concept}</Badge>
          ))}
        </div>
      </section>

      {/* 대표 저서 */}
      <section>
        <h2 className="text-base font-medium text-secondary mb-3">대표 저서</h2>
        <ul className="space-y-1.5">
          {theorist.majorWorks.map((work) => (
            <li key={work} className="text-sm text-ink flex items-start gap-2">
              <span className="text-primary-light mt-1">•</span>
              {work}
            </li>
          ))}
        </ul>
      </section>

      {/* 관련 용어 */}
      {relatedTerms.length > 0 && (
        <section>
          <h2 className="text-base font-medium text-secondary mb-3">관련 용어</h2>
          <div className="space-y-2">
            {relatedTerms.map((term) => (
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
    </div>
  )
}
