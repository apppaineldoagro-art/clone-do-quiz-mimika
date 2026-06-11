"use client"

import type { QuizStep } from "@/lib/quiz-data"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Image from "next/image"

type Props = {
  step: Extract<QuizStep, { type: "single" | "multi" | "age" }>
  value: string | string[] | undefined
  onSelect: (value: string) => void
}

export function QuestionStep({ step, value, onSelect }: Props) {
  const isMulti = step.type === "multi"
  const selectedValues = isMulti ? ((value as string[]) ?? []) : value ? [value as string] : []

  const useImageGrid = step.type === "age" || ("hasImages" in step && step.hasImages)

  return (
    <div className="flex flex-col">
      <div className="mb-6 text-center">
        <h1 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
          {step.title}
        </h1>
        {step.subtitle && (
          <p className="mt-2 text-pretty text-sm text-muted-foreground">{step.subtitle}</p>
        )}
      </div>

      {useImageGrid ? (
        <div className="grid grid-cols-2 gap-3">
          {step.options.map((opt) => {
            const selected = selectedValues.includes(opt.value)
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onSelect(opt.value)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border-2 bg-card text-left transition-all",
                  selected ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50",
                )}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  {opt.image && (
                    <Image
                      src={opt.image || "/placeholder.svg"}
                      alt={opt.label}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 280px"
                    />
                  )}
                  {selected && (
                    <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-4 w-4" />
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 px-3 py-2.5">
                  <span className="text-sm font-medium text-foreground">{opt.label}</span>
                </div>
              </button>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {step.options.map((opt) => {
            const selected = selectedValues.includes(opt.value)
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onSelect(opt.value)}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border-2 bg-card px-4 py-4 text-left transition-all",
                  selected
                    ? "border-primary bg-accent/40 ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50 hover:bg-accent/20",
                )}
              >
                {opt.emoji && (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-lg">
                    {opt.emoji}
                  </span>
                )}
                <span className="flex-1 text-base font-medium text-foreground">{opt.label}</span>
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition",
                    isMulti ? "rounded-md" : "rounded-full",
                    selected ? "border-primary bg-primary text-primary-foreground" : "border-border",
                  )}
                >
                  {selected && <Check className="h-4 w-4" />}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
