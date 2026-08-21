import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { User, BookOpen, Brain, Star, LogIn } from 'lucide-react'

export default function MyPage() {
  // TODO: 실제 인증 상태로 교체
  const isLoggedIn = false

  if (!isLoggedIn) {
    return (
      <div className="space-y-5">
        <h1 className="text-[22px] font-medium text-secondary">마이페이지</h1>
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto">
            <User size={32} className="text-text-secondary" />
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            로그인하면 학습 진도, 즐겨찾기, 퀴즈 오답노트를<br />저장할 수 있습니다.
          </p>
          <div className="mt-4">
            <Button className="inline-flex items-center gap-2">
              <LogIn size={16} />
              Google로 로그인
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-[22px] font-medium text-secondary">마이페이지</h1>

      {/* 프로필 */}
      <Card>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <User size={20} className="text-primary" />
          </div>
          <div>
            <p className="font-medium text-secondary">사회학도</p>
            <div className="flex items-center gap-2 mt-0.5">
              <Badge variant="primary">학교 인증 완료</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* 학습 통계 */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="text-center">
          <BookOpen size={18} className="text-primary-light mx-auto" />
          <p className="mt-1 text-xl font-semibold text-secondary">24</p>
          <p className="text-xs text-text-secondary">학습한 용어</p>
        </Card>
        <Card className="text-center">
          <Brain size={18} className="text-primary-light mx-auto" />
          <p className="mt-1 text-xl font-semibold text-secondary">85%</p>
          <p className="text-xs text-text-secondary">퀴즈 정답률</p>
        </Card>
        <Card className="text-center">
          <Star size={18} className="text-accent mx-auto" />
          <p className="mt-1 text-xl font-semibold text-secondary">7</p>
          <p className="text-xs text-text-secondary">즐겨찾기</p>
        </Card>
      </div>

      {/* 메뉴 */}
      <div className="space-y-1">
        {[
          { label: '즐겨찾기 용어', count: 7 },
          { label: '퀴즈 오답노트', count: 3 },
          { label: '내가 쓴 글', count: 2 },
          { label: '내가 올린 자료', count: 1 },
          { label: '설정' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between py-3 px-1 border-b border-border cursor-pointer hover:bg-surface/50"
          >
            <span className="text-sm text-secondary">{item.label}</span>
            {item.count !== undefined && (
              <span className="text-xs text-text-secondary">{item.count}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
