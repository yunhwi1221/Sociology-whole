import Link from 'next/link'
import { Users, Briefcase } from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-[22px] font-medium text-secondary">네트워킹</h1>

      <div className="grid gap-3">
        <Link
          href="/community/study"
          className="flex items-start gap-4 p-4 bg-white border border-border rounded-card hover:border-primary/30 transition-colors"
        >
          <Users size={24} className="text-primary-light mt-0.5 shrink-0" />
          <div>
            <h3 className="font-medium text-secondary">스터디·세미나 모집</h3>
            <p className="mt-1 text-sm text-text-secondary">
              함께 공부할 스터디원을 모집하거나 세미나 정보를 공유하세요.
            </p>
          </div>
        </Link>

        <Link
          href="/community/career"
          className="flex items-start gap-4 p-4 bg-white border border-border rounded-card hover:border-primary/30 transition-colors"
        >
          <Briefcase size={24} className="text-primary-light mt-0.5 shrink-0" />
          <div>
            <h3 className="font-medium text-secondary">취업·진로 정보</h3>
            <p className="mt-1 text-sm text-text-secondary">
              공공기관, 연구소, 대학원 진학 등 진로 관련 정보를 나눠보세요.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
