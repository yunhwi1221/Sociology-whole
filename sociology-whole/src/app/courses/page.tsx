import Link from 'next/link'
import { courses } from '@/lib/data'

export default function CoursesPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-[22px] font-medium text-secondary">전공수업</h1>
      <p className="text-sm text-text-secondary">
        전공수업 카테고리별로 관련 용어와 이론가를 모아볼 수 있습니다.
      </p>

      <div className="grid gap-3">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
            className="p-4 bg-white border border-border rounded-card hover:border-primary/30 hover:shadow-card transition-all"
          >
            <h3 className="font-serif font-medium text-secondary">{course.name}</h3>
            <p className="mt-1 text-sm text-text-secondary">{course.description}</p>
            <p className="mt-2 text-xs text-primary-light">
              용어 {course.termCount}개 · 이론가 {course.theoristCount}명
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
