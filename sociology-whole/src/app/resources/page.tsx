import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FileText, Download } from 'lucide-react'

const sampleResources = [
  {
    id: '1',
    title: '사회학사 중간고사 기출 (2025 2학기)',
    type: '족보',
    course: '사회학사',
    uploader: '선배A',
    date: '2026-08-10',
    downloads: 45,
  },
  {
    id: '2',
    title: '현대사회학 강의 요약 (1~7주차)',
    type: '요약노트',
    course: '현대사회학',
    uploader: '정리왕',
    date: '2026-08-08',
    downloads: 32,
  },
  {
    id: '3',
    title: '사회조사방법론 기말 기출 + 해설',
    type: '족보',
    course: '사회조사방법론',
    uploader: '방법론마스터',
    date: '2026-08-05',
    downloads: 67,
  },
  {
    id: '4',
    title: '사회계층론 핵심 개념 정리노트',
    type: '요약노트',
    course: '사회계층론',
    uploader: '계층이론가',
    date: '2026-08-01',
    downloads: 28,
  },
]

export default function ResourcesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-medium text-secondary">자료실</h1>
        <Button variant="accent">업로드</Button>
      </div>

      <p className="text-sm text-text-secondary">
        족보, 강의 요약노트 등 전공 자료를 공유하고 다운받을 수 있습니다.
      </p>

      {/* 필터 */}
      <div className="flex gap-2">
        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary text-white">
          전체
        </button>
        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface text-text-secondary hover:bg-border">
          족보
        </button>
        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface text-text-secondary hover:bg-border">
          요약노트
        </button>
      </div>

      {/* 자료 리스트 */}
      <div className="divide-y divide-border">
        {sampleResources.map((resource) => (
          <div key={resource.id} className="py-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-card bg-surface flex items-center justify-center shrink-0">
              <FileText size={18} className="text-primary-light" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm text-secondary">{resource.title}</h3>
              <div className="mt-1 flex items-center gap-2 flex-wrap">
                <Badge variant={resource.type === '족보' ? 'primary' : 'accent'}>
                  {resource.type}
                </Badge>
                <Badge>{resource.course}</Badge>
              </div>
              <div className="mt-1.5 flex items-center gap-3 text-xs text-text-secondary">
                <span>{resource.uploader}</span>
                <span>{resource.date}</span>
                <span className="flex items-center gap-0.5">
                  <Download size={12} />
                  {resource.downloads}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
