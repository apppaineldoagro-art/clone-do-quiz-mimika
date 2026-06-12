"use client"

import { SECTIONS } from "@/lib/quiz-data"
import { ChevronLeft, Star, Flame } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  currentSection: string
  sectionProgress: number // 0..1 progress within the current section
  onBack: () => void
  showBack: boolean
}

export function QuizHeader({ currentSection, sectionProgress, onBack, showBack }: Props) {
  const activeIndex = SECTIONS.findIndex((s) => s.id === currentSection)
  const activeLabel = SECTIONS[activeIndex]?.label ?? ""

  // Overall progress across all sections (continuous bar)
  const overall = SECTIONS.length > 0 ? (activeIndex + sectionProgress) / SECTIONS.length : 0

  return (
    <header className="sticky top-0 z-30 w-full">
      <div className="flex w-full items-center justify-between bg-primary px-4 py-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-foreground/15">
          <Flame className="h-4 w-4 text-primary-foreground" />
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-primary-foreground/90">
          Top app in United States
        </span>
        <span className="flex items-center gap-0.5 text-[11px] font-semibold text-primary-foreground">
          <Star className="h-3 w-3 fill-primary-foreground text-primary-foreground" />
          4.8
        </span>
      </div>

      <div className="bg-background">
        <div className="relative mx-auto flex h-12 max-w-xl items-center justify-center px-4">
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            className={cn(
              "absolute left-3 flex h-8 w-8 items-center justify-center rounded-full text-foreground transition hover:bg-muted",
              !showBack && "pointer-events-none opacity-0",
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="font-heading text-base font-semibold capitalize tracking-tight text-foreground">
            {activeLabel}
          </span>
        </div>

        <div className="h-0.5 w-full bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${Math.round(overall * 100)}%` }}
          />
        </div>
      </div>
    </header>
  )
}
