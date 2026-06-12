"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import Image from "next/image"

type Props = {
  onComplete: () => void
}

export function LoadingStep({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 5000
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

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2">
        <span className="text-xl">🌿</span>
        <span className="font-heading text-2xl font-semibold text-foreground">Mimika</span>
      </div>

      <h1 className="mt-5 text-balance px-2 font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
        Beleza sem Stress: Recupere o seu aspeto fresco
      </h1>

      <div className="mt-6 w-full max-w-md">
        <div className="relative h-6 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="flex h-full items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          >
            <span className="px-2">{progress}%</span>
          </div>
        </div>
        <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
          Carregando o teste...
        </p>
      </div>

      <div className="relative mt-7 w-full max-w-sm">
        <Image
          src="/quiz/before-after.webp"
          alt="Comparação antes e depois do programa"
          width={560}
          height={520}
          priority
          className="h-auto w-full object-contain"
          sizes="(max-width: 640px) 100vw, 360px"
        />
        <span className="absolute bottom-12 left-6 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow">
          Dia 1
        </span>
        <span className="absolute right-8 top-10 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow">
          Dia 28
        </span>
      </div>
    </div>
  )
}
