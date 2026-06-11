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
        <div className="relative my-6 aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl bg-muted">
          <Image
            src={step.image || "/placeholder.svg"}
            alt={step.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 480px"
          />
        </div>
      )}

      <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
        {step.body}
      </p>

      {step.source && (
        <p className="mt-3 text-xs italic text-muted-foreground/70">{step.source}</p>
      )}

      <Button
        size="lg"
        onClick={onNext}
        className="mt-7 h-14 w-full max-w-md rounded-full text-base font-semibold"
      >
        {step.cta}
      </Button>
    </div>
  )
}
