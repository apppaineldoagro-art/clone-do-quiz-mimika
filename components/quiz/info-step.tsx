"use client"

import type { QuizStep } from "@/lib/quiz-data"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Props = {
  step: Extract<QuizStep, { type: "info" }>
  onNext: () => void
}

export function InfoStep({ step, onNext }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
        {step.title}
      </h1>

      {step.image && (
        <div className="relative my-6 aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] bg-muted shadow-[var(--shadow-card)]">
          <Image
            src={step.image || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 480px"
          />
        </div>
      )}

      {step.body && (
        <div className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
          {step.body.split("\n\n").map((para, i) => (
            <p key={i} className={i > 0 ? "mt-4" : undefined}>
              {para}
            </p>
          ))}
        </div>
      )}

      {step.stat && (
        <div className="mt-6 rounded-2xl bg-card px-7 py-5 shadow-[var(--shadow-card)]">
          <p className="font-heading text-3xl font-semibold text-primary">{step.stat.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{step.stat.label}</p>
        </div>
      )}

      <Button
        size="lg"
        onClick={onNext}
        className="mt-7 h-14 w-full max-w-md rounded-full text-base font-semibold shadow-[var(--shadow-btn)]"
      >
        {step.cta}
      </Button>
    </div>
  )
}
