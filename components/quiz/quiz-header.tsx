"use client"

import { SECTIONS } from "@/lib/quiz-data"
import { ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  currentSection: string
  sectionProgress: number // 0..1 progress within the current section
  onBack: () => void
  showBack: boolean
}

export function QuizHeader({ currentSection, sectionProgress, onBack, showBack }: Props) {
  const activeIndex = SECTIONS.findIndex((s) => s.id === currentSection)

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-xl items-center gap-2 px-4 py-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted",
            !showBack && "pointer-events-none opacity-0",
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
          mimika
        </span>
      </div>

      <div className="mx-auto flex max-w-xl gap-1.5 px-4 pb-3">
        {SECTIONS.map((section, i) => {
          const fill = i < activeIndex ? 1 : i === activeIndex ? sectionProgress : 0
          return (
            <div key={section.id} className="flex flex-1 flex-col gap-1.5">
              <span
                className={cn(
                  "text-[10px] font-medium uppercase tracking-wide transition-colors sm:text-xs",
                  i <= activeIndex ? "text-foreground" : "text-muted-foreground/60",
                )}
              >
                {section.label}
              </span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${Math.round(fill * 100)}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </header>
  )
}
