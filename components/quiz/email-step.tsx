"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"

type Props = {
  onSubmit: (email: string) => void
}

export function EmailStep({ onSubmit }: Props) {
  const [email, setEmail] = useState("")
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-balance font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
        Your personalized program is ready!
      </h1>
      <p className="mt-2 max-w-md text-pretty text-base text-muted-foreground">
        Enter your email to see your results and receive your custom 28-day face yoga plan.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (valid) onSubmit(email)
        }}
        className="mt-7 flex w-full max-w-md flex-col gap-3"
      >
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="h-14 w-full rounded-2xl border-2 border-border bg-card px-5 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
        />
        <Button
          type="submit"
          size="lg"
          disabled={!valid}
          className="h-14 w-full rounded-full text-base font-semibold"
        >
          Show my results
        </Button>
      </form>

      <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="h-3.5 w-3.5" />
        We respect your privacy. Your email is safe with us.
      </p>
    </div>
  )
}
