import { STEPS, SECTIONS, type QuizStep } from "@/lib/quiz-data"

/** Maps a step to its real route path. */
export function hrefForStep(step: QuizStep): string {
  switch (step.type) {
    case "intro":
      return "/"
    case "social":
      return "/social"
    case "loading":
      return "/loading"
    case "email":
      return "/email"
    case "plan":
      return "/plano"
    default:
      return `/quiz/${step.id}`
  }
}

export function stepById(id: string): { step: QuizStep; index: number } | null {
  const index = STEPS.findIndex((s) => s.id === id)
  if (index === -1) return null
  return { step: STEPS[index], index }
}

export function nextHref(index: number): string | null {
  const next = STEPS[index + 1]
  return next ? hrefForStep(next) : null
}

export function prevHref(index: number): string | null {
  const prev = STEPS[index - 1]
  return prev ? hrefForStep(prev) : null
}

/** Section + progress used by the header, derived from a step. */
export function sectionProgressForStep(step: QuizStep) {
  if (step.type === "intro" || step.type === "social" || !("section" in step)) {
    return { section: SECTIONS[0].id, progress: 0 }
  }
  const sectionId = step.section
  const sectionSteps = STEPS.filter((s) => "section" in s && s.section === sectionId)
  const posInSection = sectionSteps.findIndex((s) => s.id === step.id)
  const progress = (posInSection + 1) / sectionSteps.length
  return { section: sectionId, progress }
}
