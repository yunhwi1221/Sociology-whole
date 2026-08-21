import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const samplePosts = [
  {
    id: '1',
    title: '한국여성정책연구원 인턴 후기 공유합니다',
    author: '정책연구자',
    date: '2026-08-11',
    comments: 12,
    tags: ['인턴', '연구원'],
  },
  {
    id: '2',
    title: '사회학과 졸업 후 진로 (대학원 vs 취업) 고민 나눠요',
    author: '졸업예정',
    date: '2026-08-09',
    comments: 15,
    tags: ['진로상담', '대학원'],
  },
  {
    id: '3',
    title: '사회조사분석사 2급 합격 후기 & 공부법',
    author: '자격증러',
    date: '2026-08-06',
    comments: 8,
    tags: ['자격증', '사회조사분석사'],
  },
]

export default function CareerBoardPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/community" className="text-sm text-primary-light hover:text-primary">
            ← 네트워킹
          </Link>
          <h1 className="text-[22px] font-medium text-secondary mt-1">취업·진로 정보</h1>
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
