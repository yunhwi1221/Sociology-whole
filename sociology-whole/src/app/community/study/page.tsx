import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const samplePosts = [
  {
    id: '1',
    title: '[서울] 사회학사 중간고사 대비 스터디 모집 (3명)',
    author: '사학도',
    date: '2026-08-12',
    comments: 4,
    tags: ['사회학사', '시험대비'],
  },
  {
    id: '2',
    title: '부르디외 읽기 세미나 같이 하실 분',
    author: '문화자본러',
    date: '2026-08-10',
    comments: 7,
    tags: ['세미나', '부르디외'],
  },
  {
    id: '3',
    title: '[온라인] 사회조사방법론 SPSS 스터디',
    author: '통계초보',
    date: '2026-08-08',
    comments: 2,
    tags: ['방법론', 'SPSS'],
  },
]

export default function StudyBoardPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/community" className="text-sm text-primary-light hover:text-primary">
            ← 네트워킹
          </Link>
          <h1 className="text-[22px] font-medium text-secondary mt-1">스터디·세미나 모집</h1>
        </div>
        <Button variant="accent">글쓰기</Button>
      </div>

      <div className="divide-y divide-border">
        {samplePosts.map((post) => (
          <div key={post.id} className="py-4">
            <h3 className="font-medium text-sm text-secondary hover:text-primary cursor-pointer">
              {post.title}
            </h3>
            <div className="mt-2 flex items-center gap-3 text-xs text-text-secondary">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>댓글 {post.comments}</span>
            </div>
            <div className="mt-2 flex gap-1.5">
              {post.tags.map(tag => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
