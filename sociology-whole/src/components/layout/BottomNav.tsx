'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Users, MessageSquare, FolderOpen } from 'lucide-react'

const items = [
  { href: '/', icon: Home, label: '홈' },
  { href: '/glossary', icon: BookOpen, label: '용어집' },
  { href: '/quiz', icon: MessageSquare, label: '퀴즈' },
  { href: '/community', icon: Users, label: '네트워킹' },
  { href: '/resources', icon: FolderOpen, label: '자료실' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="flex justify-around items-center h-14">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 text-xs ${
                isActive ? 'text-primary' : 'text-text-secondary'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
