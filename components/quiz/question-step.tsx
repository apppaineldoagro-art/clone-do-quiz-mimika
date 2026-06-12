"use client"

import type { QuizStep } from "@/lib/quiz-data"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Image from "next/image"

type Props = {
  step: Extract<QuizStep, { type: "single" | "multi" }>
  value: string | string[] | undefined
  onSelect: (value: string) => void
}

export function QuestionStep({ step, value, onSelect }: Props) {
  const isMulti = step.type === "multi"
  const layout = step.layout ?? "list"
  const selectedValues = isMulti ? ((value as string[]) ?? []) : value ? [value as string] : []

  return (
    <div className="flex flex-col">
      {step.image && (
        <div className="mx-auto mb-5 h-44 w-44 overflow-hidden rounded-3xl bg-muted">
          <Image
            src={step.image || "/placeholder.svg"}
            alt=""
            width={352}
            height={352}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="mb-6 text-center">
        <h1 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
          {step.title}
        </h1>
        {step.subtitle && (
          <p className="mt-2 text-pretty text-sm text-muted-foreground">{step.subtitle}</p>
        )}
      </div>

      {layout === "grid" ? (
        <div className="grid grid-cols-2 gap-3">
          {step.options.map((opt) => {
            const selected = selectedValues.includes(opt.value)
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onSelect(opt.value)}
                className={cn(
                  "relative flex flex-col items-center justify-between gap-3 rounded-2xl bg-card px-4 pb-5 pt-4 text-center transition-all",
                  selected ? "ring-2 ring-primary" : "ring-1 ring-transparent hover:ring-border",
                )}
              >
                <span
                  className={cn(
                    "absolute left-3 top-3 flex h-5 w-5 items-center justify-center rounded-md border transition",
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/30 bg-background",
                  )}
                >
                  {selected && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
                {opt.icon ? (
                  <span className="flex h-24 w-24 items-center justify-center">
                    <Image
                      src={opt.icon || "/placeholder.svg"}
                      alt=""
                      width={120}
                      height={120}
                      className="h-full w-full object-contain"
                    />
                  </span>
                ) : (
                  opt.emoji && <span className="mt-4 text-4xl leading-none">{opt.emoji}</span>
                )}
                <span className="text-pretty text-[15px] font-medium leading-tight text-foreground">{opt.label}</span>
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
                  "flex items-center gap-3 rounded-2xl bg-card px-5 py-4 text-left transition-all",
                  selected ? "ring-2 ring-primary" : "ring-1 ring-transparent hover:ring-border",
                )}
              >
                {opt.emoji && <span className="text-2xl leading-none">{opt.emoji}</span>}
                <span className="flex-1 text-base font-medium text-foreground">{opt.label}</span>
                {isMulti && (
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition",
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground/30 bg-background",
                    )}
                  >
                    {selected && <Check className="h-4 w-4" strokeWidth={3} />}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}

      {step.note && (
        <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-4 text-left">
          <h4 className="font-heading text-sm font-semibold text-foreground">{step.note.title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.note.body}</p>
        </div>
      )}
    </div>
  )
}
