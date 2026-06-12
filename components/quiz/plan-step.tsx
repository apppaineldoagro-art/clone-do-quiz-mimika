"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Plan = {
  id: string
  label: string
  total: string
  perDay: string
  old?: string
  popular?: boolean
}

const PLANS: Plan[] = [
  { id: "1-week", label: "1-Week Plan", total: "$9.99", perDay: "$1.43" },
  { id: "4-week", label: "4-Week Plan", total: "$19.99", perDay: "$0.71", old: "$39.99", popular: true },
  { id: "12-week", label: "12-Week Plan", total: "$39.99", perDay: "$0.47", old: "$79.99" },
]

const BENEFITS = [
  "Personalized daily face yoga routine",
  "Video-guided exercises for every area",
  "Progress tracking & reminders",
  "Skin-care & lifestyle tips",
  "New programs added every week",
]

export function PlanStep() {
  const [selected, setSelected] = useState("4-week")

  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h1 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
          Your personalized Face Yoga plan is ready
        </h1>
        <p className="mt-2 text-pretty text-sm text-muted-foreground">
          Based on your answers, here's the program designed just for you.
        </p>
      </div>

      <div className="my-6 grid grid-cols-2 gap-3">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative aspect-square w-full bg-muted">
            <Image src="/quiz/result-before.webp" alt="Before" fill className="object-cover" sizes="240px" />
          </div>
          <p className="py-2 text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">Now</p>
        </div>
        <div className="overflow-hidden rounded-2xl border-2 border-primary bg-card">
          <div className="relative aspect-square w-full bg-muted">
            <Image src="/quiz/result-after.webp" alt="After" fill className="object-cover" sizes="240px" />
          </div>
          <p className="py-2 text-center text-xs font-semibold uppercase tracking-wide text-primary">
            After 28 days
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-card p-5 shadow-[var(--shadow-card)]">
        <h2 className="font-heading text-lg font-semibold text-foreground">What's included</h2>
        <ul className="mt-3 flex flex-col gap-2.5">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3.5 w-3.5" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="mb-3 mt-7 text-center font-heading text-xl font-semibold text-foreground">
        Choose your plan
      </h2>
      <div className="flex flex-col gap-3">
        {PLANS.map((plan) => {
          const active = selected === plan.id
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelected(plan.id)}
              className={cn(
                "relative flex items-center gap-3 rounded-2xl border-2 bg-card px-4 py-4 text-left transition-all",
                active ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-2.5 left-4 flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                  <Star className="h-3 w-3 fill-current" />
                  Most popular
                </span>
              )}
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition",
                  active ? "border-primary bg-primary text-primary-foreground" : "border-border",
                )}
              >
                {active && <Check className="h-4 w-4" />}
              </span>
              <div className="flex-1">
                <p className="text-base font-semibold text-foreground">{plan.label}</p>
                <p className="text-sm text-muted-foreground">
                  {plan.old && <span className="mr-1.5 line-through">{plan.old}</span>}
                  {plan.total}
                </p>
              </div>
              <div className="text-right">
                <p className="font-heading text-xl font-semibold text-foreground">{plan.perDay}</p>
                <p className="text-xs text-muted-foreground">per day</p>
              </div>
            </button>
          )
        })}
      </div>

      <Button size="lg" className="mt-6 h-14 w-full rounded-full text-base font-semibold shadow-[var(--shadow-btn)]">
        Get my plan
      </Button>

      <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
        30-day money-back guarantee. Cancel anytime. By continuing you agree to our Terms and Privacy Policy.
      </p>

      <div className="mt-6 flex items-center justify-center gap-1 text-sm text-muted-foreground">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
        <span className="ml-1">Loved by 1,000,000+ women</span>
      </div>
    </div>
  )
}
