import Link from 'next/link'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { BookOpen, Users, Brain, Newspaper, GraduationCap, FolderOpen } from 'lucide-react'
import { articles, courses } from '@/lib/data'

export default function HomePage() {
  const latestArticle = articles[0]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-8">
        <h1 className="text-2xl md:text-[32px] font-semibold text-secondary leading-tight">
          사회학의 총체를,<br />한 곳에서
        </h1>
        <p className="mt-3 text-text-secondary text-sm md:text-base max-w-md mx-auto">
          개념·이론가·시사 연결부터 퀴즈, 네트워킹, 자료 공유까지<br />
          사회학 전공생을 위한 통합 학습 플랫폼
        </p>
      </section>

      {/* 오늘의 시사 연결 */}
      {latestArticle && (
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium text-secondary">시사·현실 연결</h2>
            <Link href="/articles" className="text-xs text-primary-light hover:text-primary">
              전체보기
            </Link>
          </div>
          <Card href={`/articles/${latestArticle.id}`} className="bg-surface">
            <Badge variant="accent">NEW</Badge>
            <h3 className="mt-2 font-serif font-medium text-secondary">
              {latestArticle.title}
            </h3>
            <p className="mt-1 text-sm text-text-secondary line-clamp-2">
              {latestArticle.summary}
            </p>
          </Card>
        </section>
      )}

      {/* 전공수업 카테고리 */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-medium text-secondary">전공수업</h2>
          <Link href="/courses" className="text-xs text-primary-light hover:text-primary">
            전체보기
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {courses.slice(0, 6).map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="p-3 bg-white border border-border rounded-card hover:border-primary/30 transition-colors"
            >
              <p className="font-medium text-sm text-secondary">{course.name}</p>
              <p className="mt-1 text-xs text-text-secondary">
                용어 {course.termCount}개 · 이론가 {course.theoristCount}명
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 빠른 접근 */}
      <section>
        <h2 className="text-lg font-medium text-secondary mb-3">탐색하기</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: '/glossary', icon: BookOpen, label: '용어집', desc: '핵심 개념 빠르게 검색' },
            { href: '/theorists', icon: Users, label: '이론가', desc: '주요 이론가 프로필' },
            { href: '/articles', icon: Newspaper, label: '시사연결', desc: '이론의 현실 적용' },
            { href: '/quiz', icon: Brain, label: '퀴즈', desc: '플래시카드로 복습' },
            { href: '/community', icon: GraduationCap, label: '네트워킹', desc: '스터디·진로 정보' },
            { href: '/resources', icon: FolderOpen, label: '자료실', desc: '족보·요약노트' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 p-3 bg-white border border-border rounded-card hover:border-primary/30 transition-colors"
            >
              <item.icon size={20} className="text-primary-light mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm text-secondary">{item.label}</p>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
