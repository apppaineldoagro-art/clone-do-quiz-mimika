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
  const selectedValues = isMulti ? ((value as string[]) ?? []) : value ? [value as string] : []

  return (
    <div className="flex flex-col">
      {step.image && (
        <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full bg-muted">
          <Image
            src={step.image || "/placeholder.svg"}
            alt=""
            width={224}
            height={224}
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
              <span className="flex-1 text-base font-medium text-foreground">{opt.label}</span>
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center border-2 transition",
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

      {step.note && (
        <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-4 text-left">
          <h4 className="font-heading text-sm font-semibold text-foreground">{step.note.title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.note.body}</p>
        </div>
      )}
    </div>
  )
}
