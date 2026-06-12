"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

type Props = {
  onNext: () => void
}

export function SocialProofStep({ onNext }: Props) {
  return (
    <div className="flex min-h-[calc(100dvh-2rem)] flex-col items-center text-center">
      <h1 className="text-balance px-2 font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
        2+ milhões de rostos felizes escolheram Mimika
      </h1>

      <div className="mt-6 flex items-center justify-center gap-3">
        <Image
          src="/quiz/laurel-left.webp"
          alt=""
          width={40}
          height={56}
          className="h-12 w-auto opacity-90"
          aria-hidden
        />
        <div className="flex flex-col items-center leading-tight">
          <span className="text-lg font-semibold text-foreground">App of the day</span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <AppleIcon className="h-4 w-4" />
            App store
          </span>
        </div>
        <Image
          src="/quiz/laurel-right.webp"
          alt=""
          width={40}
          height={56}
          className="h-12 w-auto opacity-90"
          aria-hidden
        />
      </div>

      <div className="relative mt-6 w-full max-w-md overflow-hidden rounded-3xl">
        <Image
          src="/quiz/social-collage.webp"
          alt="Mulheres felizes que usam o Mimika"
          width={640}
          height={760}
          priority
          className="h-auto w-full object-cover"
          sizes="(max-width: 640px) 100vw, 480px"
        />
      </div>

      <div className="sticky bottom-0 z-10 mt-auto w-full bg-gradient-to-t from-background via-background to-transparent pb-4 pt-6">
        <Button
          size="lg"
          onClick={onNext}
          className="h-14 w-full max-w-md rounded-2xl text-base font-semibold"
        >
          Próximo
        </Button>
      </div>
    </div>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
    </svg>
  )
}
