'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { Send, Bot, User } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AiChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '안녕하세요! 사회학 관련 질문을 해주세요. 개념 설명, 이론가 비교, 논점 정리 등을 도와드릴 수 있습니다.',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // TODO: Claude API 연동 후 실제 응답으로 교체
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'AI 질답 기능은 현재 개발 중입니다. Claude API가 연동되면 사회학 개념 설명, 이론가 비교, 에세이 논점 정리 등을 도와드릴 수 있습니다.',
      }])
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)]">
      <h1 className="text-[22px] font-medium text-secondary mb-4">AI 질문·답변</h1>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Bot size={16} className="text-primary" />
              </div>
            )}
            <div
              className={`max-w-[80%] p-3 rounded-card text-sm ${
                msg.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-surface text-ink'
              }`}
            >
              {msg.content}
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center shrink-0">
                <User size={16} className="text-text-secondary" />
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Bot size={16} className="text-primary" />
            </div>
            <div className="bg-surface p-3 rounded-card">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-text-secondary/40 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-text-secondary/40 rounded-full animate-bounce [animation-delay:0.1s]" />
                <span className="w-2 h-2 bg-text-secondary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 입력 영역 */}
      <form onSubmit={handleSubmit} className="flex gap-2 pt-3 border-t border-border">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="사회학 관련 질문을 입력하세요..."
          className="flex-1 px-4 py-2.5 bg-surface border border-border rounded-card text-sm placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
        />
        <Button type="submit" disabled={!input.trim() || loading}>
          <Send size={16} />
        </Button>
      </form>
    </div>
  )
}
