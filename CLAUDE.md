# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**Sociology-whole** — 전국 사회학과 학생용 통합 학습 플랫폼 (웹 기반)
- 학습 콘텐츠(용어집, 이론가, 시사연결, 퀴즈) + 네트워킹 + 자료 공유를 하나의 플랫폼에서 제공
- PRD: `PRD_6.md`, 디자인 가이드: `design_2.md`

## 프로젝트 구조

이 레포지토리는 두 가지 형태의 프론트엔드가 공존:

1. **`/index.html`** — 단일 HTML 랜딩 페이지 (현재 메인 홈 화면, 빌드 불필요)
2. **`/sociology-whole/`** — Next.js 14 App Router 프로젝트 (전체 앱, 아직 npm install 전)

## 기술 스택 (sociology-whole/)

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS (디자인 토큰은 `tailwind.config.ts`에 정의)
- **Backend/DB**: Supabase (PostgreSQL + Auth + Storage)
- **AI**: Claude API (AI 질답 기능)
- **Icons**: Lucide React
- **Deploy**: Vercel (예정)

## 개발 명령어 (sociology-whole/)

```bash
cd sociology-whole
npm install          # 의존성 설치
npm run dev          # 개발 서버 (localhost:3000)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint
```

## 디자인 시스템

색상 팔레트 (`tailwind.config.ts` 및 `index.html` CSS variables):
- Primary: Deep Forest Green (`#0D3B2E` ~ `#1E4D3B`)
- Accent: Bright Green (`#4ADE80`) — CTA, 강조 요소
- 배경: Off-white (`#FAF9F5`) / Surface (`#F1EFE9`)
- 폰트: **Noto Sans KR + Inter** (고딕 계열)

디자인 원칙 (design_2.md 참조):
- "학구적인 신뢰감 위에, 사람 냄새 나는 따뜻함"
- 리스트형(탐색/스캔) + 카드형(콘텐츠 부각) 하이브리드
- 모서리 반경 8~12px, 미묘한 그림자, 절제된 사용

## 아키텍처 (sociology-whole/)

```
src/
├── app/              # Next.js App Router pages
│   ├── glossary/     # 용어집 (목록 + [id] 상세)
│   ├── theorists/    # 이론가 (목록 + [id] 상세)
│   ├── courses/      # 전공수업 카테고리
│   ├── articles/     # 시사·현실 연결
│   ├── quiz/         # 퀴즈/플래시카드
│   ├── community/    # 네트워킹 (study/, career/)
│   ├── resources/    # 자료실
│   ├── ai-chat/      # AI 질답
│   └── mypage/       # 마이페이지
├── components/
│   ├── layout/       # Header, BottomNav
│   └── ui/           # Button, Card, Badge, SearchBar
└── lib/
    ├── data.ts       # 샘플 데이터 (용어, 이론가, 과목, 아티클)
    └── supabase.ts   # Supabase 클라이언트
```

## 환경변수

`.env.local.example` 참조:
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `ANTHROPIC_API_KEY` (AI 질답용)

## GitHub

- Repository: `yunhwi1221/Sociology-whole`
- Branch: `main`

## 주의사항

- 현재 `sociology-whole/`은 `npm install` 전 상태 — 의존성 설치 후 사용
- `index.html`은 빌드 도구 없이 브라우저에서 직접 열어 확인 가능
- 콘텐츠는 현재 `src/lib/data.ts`에 하드코딩된 샘플 데이터 사용 (추후 Supabase 연동 예정)
- 사용자가 한국어로 소통하며, 코드 외 텍스트/UI 카피는 한국어로 작성

## 반응형
- 모바일 (375)
- 태블릿 (768)
- 데스크탑 (1440)
으로 브레이크 포인트 설정