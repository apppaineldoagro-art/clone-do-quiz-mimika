"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

type Props = {
  onStart: () => void
}

export function IntroStep({ onStart }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-secondary-foreground">
        Face Yoga
      </span>
      <h1 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        Look younger in 28 days — no needles, no surgery
      </h1>
      <p className="mt-3 max-w-md text-pretty text-base text-muted-foreground">
        Take a 1-minute quiz and get a personalized face yoga program tailored to your face, skin, and lifestyle.
      </p>

      <div className="relative my-7 aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl bg-muted">
        <Image
          src="/quiz/intro-hero.png"
          alt="Woman practicing face yoga"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 480px"
        />
      </div>

      <Button
        size="lg"
        onClick={onStart}
        className="h-14 w-full max-w-md rounded-full text-base font-semibold"
      >
        Take the quiz
      </Button>

      <div className="mt-5 flex items-center justify-center gap-6 text-xs text-muted-foreground">
        <span className="flex flex-col items-center gap-0.5">
          <strong className="text-base font-semibold text-foreground">1M+</strong>
          users
        </span>
        <span className="h-8 w-px bg-border" />
        <span className="flex flex-col items-center gap-0.5">
          <strong className="text-base font-semibold text-foreground">4.8★</strong>
          avg. rating
        </span>
        <span className="h-8 w-px bg-border" />
        <span className="flex flex-col items-center gap-0.5">
          <strong className="text-base font-semibold text-foreground">28</strong>
          days
        </span>
      </div>
    </div>
  )
}
