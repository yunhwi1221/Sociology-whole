'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { terms } from '@/lib/data'
import { RotateCcw, Check, HelpCircle } from 'lucide-react'

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [results, setResults] = useState<{ id: string; knew: boolean }[]>([])
  const [finished, setFinished] = useState(false)

  const quizTerms = terms.slice(0, 10)
  const current = quizTerms[currentIndex]

  const handleAnswer = (knew: boolean) => {
    setResults([...results, { id: current.id, knew }])
    if (currentIndex < quizTerms.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setFlipped(false)
    } else {
      setFinished(true)
    }
  }

  const reset = () => {
    setCurrentIndex(0)
    setFlipped(false)
    setResults([])
    setFinished(false)
  }

  if (finished) {
    const knewCount = results.filter(r => r.knew).length
    return (
      <div className="space-y-6">
        <h1 className="text-[22px] font-medium text-secondary">퀴즈 결과</h1>
        <div className="bg-white border border-border rounded-card p-6 text-center">
          <p className="text-4xl font-serif font-semibold text-primary">
            {knewCount}/{quizTerms.length}
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            {knewCount === quizTerms.length ? '완벽합니다!' :
             knewCount >= quizTerms.length * 0.7 ? '잘 하고 있어요!' :
             '조금 더 복습해볼까요?'}
          </p>
          <div className="mt-4">
            <Button onClick={reset}>다시 풀기</Button>
          </div>
        </div>

        {/* 헷갈린 용어 */}
        {results.filter(r => !r.knew).length > 0 && (
          <section>
            <h2 className="text-base font-medium text-secondary mb-3">헷갈린 용어</h2>
            <div className="space-y-2">
              {results.filter(r => !r.knew).map(r => {
                const term = terms.find(t => t.id === r.id)!
                return (
                  <div key={r.id} className="p-3 bg-error/5 border border-error/20 rounded-card">
                    <p className="font-medium text-sm text-secondary">{term.name}</p>
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2">{term.definition}</p>
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-medium text-secondary">퀴즈</h1>
        <span className="text-sm text-text-secondary">
          {currentIndex + 1} / {quizTerms.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${((currentIndex) / quizTerms.length) * 100}%` }}
        />
      </div>

      {/* Flashcard */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="min-h-[280px] bg-white border border-border rounded-card p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-card transition-shadow select-none"
      >
        {!flipped ? (
          <div className="text-center">
            <p className="text-xs text-text-secondary mb-3">개념을 떠올려 보세요</p>
            <h2 className="text-xl font-serif font-medium text-secondary">
              {current.name.split(' (')[0]}
            </h2>
            <p className="mt-4 text-xs text-primary-light">탭하여 정의 확인</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xs text-text-secondary mb-3">정의</p>
            <p className="text-[15px] text-ink leading-relaxed">
              {current.definition}
            </p>
          </div>
        )}
      </div>

      {/* 답변 버튼 */}
      {flipped && (
        <div className="flex gap-3">
          <Button
            variant="secondary"
            className="flex-1 flex items-center justify-center gap-2"
            onClick={() => handleAnswer(false)}
          >
            <HelpCircle size={16} />
            헷갈려요
          </Button>
          <Button
            className="flex-1 flex items-center justify-center gap-2"
            onClick={() => handleAnswer(true)}
          >
            <Check size={16} />
            알고 있어요
          </Button>
        </div>
      )}
    </div>
  )
}
