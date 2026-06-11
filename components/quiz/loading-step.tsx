"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  onComplete: () => void
}

const TASKS = [
  "Analyzing your goals",
  "Evaluating your skin profile",
  "Reviewing your lifestyle",
  "Building your face yoga program",
]

export function LoadingStep({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 5200
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct >= 100) {
        clearInterval(interval)
        setTimeout(onComplete, 600)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [onComplete])

  const radius = 54
  const circumference = 2 * Math.PI * radius

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
        Creating your personalized program
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">This will only take a moment…</p>

      <div className="relative my-9 flex h-40 w-40 items-center justify-center">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} className="fill-none stroke-muted" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="fill-none stroke-primary transition-all duration-100 ease-linear"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
          />
        </svg>
        <span className="absolute text-3xl font-semibold text-foreground">{progress}%</span>
      </div>

      <ul className="flex w-full max-w-sm flex-col gap-3">
        {TASKS.map((task, i) => {
          const threshold = ((i + 1) / TASKS.length) * 100
          const done = progress >= threshold
          const active = progress >= (i / TASKS.length) * 100 && !done
          return (
            <li
              key={task}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition",
                done
                  ? "border-primary/30 bg-accent/40 text-foreground"
                  : active
                    ? "border-border bg-card text-foreground"
                    : "border-border bg-card text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition",
                  done ? "bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                {done ? (
                  <Check className="h-4 w-4" />
                ) : active ? (
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
                ) : null}
              </span>
              <span className="font-medium">{task}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
