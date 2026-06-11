"use client"

import { useMemo, useState } from "react"
import { STEPS, SECTIONS, type QuizStep } from "@/lib/quiz-data"
import { QuizHeader } from "./quiz-header"
import { IntroStep } from "./intro-step"
import { QuestionStep } from "./question-step"
import { InfoStep } from "./info-step"
import { LoadingStep } from "./loading-step"
import { EmailStep } from "./email-step"
import { PlanStep } from "./plan-step"
import { Button } from "@/components/ui/button"

type Answers = Record<string, string | string[]>

export function QuizFlow() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})

  const step = STEPS[index]

  const goNext = () => setIndex((i) => Math.min(i + 1, STEPS.length - 1))
  const goBack = () => setIndex((i) => Math.max(i - 1, 0))

  const sectionProgress = useMemo(() => {
    if (step.type === "intro" || !("section" in step)) {
      return { section: SECTIONS[0].id, progress: 0 }
    }
    const sectionId = step.section
    const sectionSteps = STEPS.filter((s) => "section" in s && s.section === sectionId)
    const posInSection = sectionSteps.findIndex((s) => s.id === step.id)
    const progress = (posInSection + 1) / sectionSteps.length
    return { section: sectionId, progress }
  }, [step])

  const handleSelect = (value: string) => {
    if (step.type === "multi") {
      const current = (answers[step.id] as string[]) ?? []
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      setAnswers((a) => ({ ...a, [step.id]: next }))
      return
    }
    // single + age: select and auto-advance
    setAnswers((a) => ({ ...a, [step.id]: value }))
    setTimeout(goNext, 280)
  }

  const renderStep = (s: QuizStep) => {
    switch (s.type) {
      case "intro":
        return <IntroStep onStart={goNext} />
      case "single":
      case "age":
      case "multi":
        return <QuestionStep step={s} value={answers[s.id]} onSelect={handleSelect} />
      case "info":
        return <InfoStep step={s} onNext={goNext} />
      case "loading":
        return <LoadingStep onComplete={goNext} />
      case "email":
        return (
          <EmailStep
            onSubmit={(email) => {
              setAnswers((a) => ({ ...a, email }))
              goNext()
            }}
          />
        )
      case "plan":
        return <PlanStep />
      default:
        return null
    }
  }

  const showHeader = step.type !== "intro" && step.type !== "plan"
  const isMulti = step.type === "multi"
  const multiHasSelection = isMulti && ((answers[step.id] as string[]) ?? []).length > 0

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      {showHeader && (
        <QuizHeader
          currentSection={sectionProgress.section}
          sectionProgress={sectionProgress.progress}
          onBack={goBack}
          showBack={index > 0}
        />
      )}

      <main className="flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-4 py-8 sm:py-10">
          <div
            key={step.id}
            className="animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            {renderStep(step)}
          </div>

          {isMulti && (
            <div className="sticky bottom-0 z-10 mt-8 bg-gradient-to-t from-background via-background to-transparent pb-4 pt-6">
              <Button
                size="lg"
                onClick={goNext}
                disabled={!multiHasSelection}
                className="h-14 w-full rounded-full text-base font-semibold shadow-lg"
              >
                Continue
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
