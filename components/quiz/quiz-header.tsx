"use client"

import { SECTIONS } from "@/lib/quiz-data"
import { ChevronLeft, Star } from "lucide-react"
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

  return (
    <header className="sticky top-0 z-30 w-full">
      <div className="flex w-full items-center justify-center gap-2 bg-secondary px-4 py-1.5">
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          Top app in United States
        </span>
        <span className="flex items-center gap-0.5 text-[11px] font-semibold text-foreground">
          <Star className="h-3 w-3 fill-primary text-primary" />
          4.8
        </span>
      </div>

      <div className="bg-background/90 backdrop-blur-sm">
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

        <div className="mx-auto flex max-w-xl gap-1.5 px-4 pb-2">
          {SECTIONS.map((section, i) => {
            const fill = i < activeIndex ? 1 : i === activeIndex ? sectionProgress : 0
            return (
              <div key={section.id} className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${Math.round(fill * 100)}%` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}
