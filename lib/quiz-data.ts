export type Section = {
  id: string
  label: string
}

export const SECTIONS: Section[] = [
  { id: "goal", label: "Goal" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "nutrition", label: "Nutrition" },
  { id: "skin", label: "Your skin" },
  { id: "feelings", label: "Feelings" },
]

export type Option = {
  value: string
  label: string
  description?: string
  emoji?: string
  image?: string
}

export type QuizStep =
  | {
      type: "intro"
      id: string
    }
  | {
      type: "single" | "multi"
      id: string
      section: string
      title: string
      subtitle?: string
      options: Option[]
      hasImages?: boolean
    }
  | {
      type: "age"
      id: string
      section: string
      title: string
      subtitle?: string
      options: Option[]
    }
  | {
      type: "info"
      id: string
      section: string
      title: string
      body: string
      image?: string
      cta: string
      source?: string
    }
  | {
      type: "slider"
      id: string
      section: string
      title: string
      subtitle?: string
      min: number
      max: number
      step: number
      unit: string
      default: number
    }
  | {
      type: "loading"
      id: string
      section: string
    }
  | {
      type: "email"
      id: string
      section: string
    }
  | {
      type: "plan"
      id: string
      section: string
    }

export const STEPS: QuizStep[] = [
  { type: "intro", id: "intro" },

  // ---- GOAL ----
  {
    type: "age",
    id: "age",
    section: "goal",
    title: "Get your personalized Face Yoga program",
    subtitle: "Select your age group to begin",
    options: [
      { value: "18-29", label: "Age: 18-29", image: "/quiz/age-18-29.png" },
      { value: "30-39", label: "Age: 30-39", image: "/quiz/age-30-39.png" },
      { value: "40-49", label: "Age: 40-49", image: "/quiz/age-40-49.png" },
      { value: "50+", label: "Age: 50+", image: "/quiz/age-50.png" },
    ],
  },
  {
    type: "multi",
    id: "goals",
    section: "goal",
    title: "What are your main goals?",
    subtitle: "Select all that apply",
    options: [
      { value: "jawline", label: "Define my jawline", emoji: "💎" },
      { value: "double-chin", label: "Reduce my double chin", emoji: "🙂" },
      { value: "wrinkles", label: "Smooth wrinkles & fine lines", emoji: "✨" },
      { value: "cheeks", label: "Lift my cheeks", emoji: "🍑" },
      { value: "eyes", label: "Reduce puffy eyes & dark circles", emoji: "👁️" },
      { value: "neck", label: "Tighten my neck", emoji: "🦢" },
      { value: "glow", label: "Get a natural glow", emoji: "🌟" },
    ],
  },
  {
    type: "single",
    id: "problem-area",
    section: "goal",
    title: "Which area bothers you the most?",
    options: [
      { value: "forehead", label: "Forehead", emoji: "😟" },
      { value: "eyes", label: "Around the eyes", emoji: "👀" },
      { value: "cheeks", label: "Cheeks", emoji: "😊" },
      { value: "mouth", label: "Around the mouth", emoji: "👄" },
      { value: "jaw", label: "Jaw & chin", emoji: "😬" },
      { value: "neck", label: "Neck", emoji: "🦢" },
    ],
  },
  {
    type: "single",
    id: "tried-before",
    section: "goal",
    title: "Have you tried face yoga before?",
    options: [
      { value: "never", label: "No, this is new to me", emoji: "🆕" },
      { value: "little", label: "A little, but not consistently", emoji: "🤏" },
      { value: "yes", label: "Yes, I practice regularly", emoji: "💪" },
    ],
  },
  {
    type: "info",
    id: "info-results",
    section: "goal",
    title: "You're in the right place",
    body: "Just like the muscles in your body, the 57 muscles in your face and neck can be trained. Regular face yoga helps lift, tone, and firm your skin — naturally, without needles or surgery.",
    image: "/quiz/info-muscles.png",
    cta: "Increase my program",
    source: "Based on a study published in JAMA Dermatology",
  },

  // ---- LIFESTYLE ----
  {
    type: "single",
    id: "skin-type-feel",
    section: "lifestyle",
    title: "How would you describe your skin?",
    options: [
      { value: "dry", label: "Dry & tight", emoji: "🏜️" },
      { value: "oily", label: "Oily & shiny", emoji: "💧" },
      { value: "combination", label: "Combination", emoji: "🌗" },
      { value: "normal", label: "Normal & balanced", emoji: "🙂" },
      { value: "sensitive", label: "Sensitive & reactive", emoji: "🌸" },
    ],
  },
  {
    type: "single",
    id: "sleep",
    section: "lifestyle",
    title: "How many hours do you sleep per night?",
    options: [
      { value: "less-5", label: "Less than 5 hours", emoji: "😴" },
      { value: "5-6", label: "5–6 hours", emoji: "🥱" },
      { value: "7-8", label: "7–8 hours", emoji: "😌" },
      { value: "more-8", label: "More than 8 hours", emoji: "😍" },
    ],
  },
  {
    type: "single",
    id: "stress",
    section: "lifestyle",
    title: "How often do you feel stressed?",
    options: [
      { value: "rarely", label: "Rarely", emoji: "😎" },
      { value: "sometimes", label: "Sometimes", emoji: "🙂" },
      { value: "often", label: "Often", emoji: "😩" },
      { value: "always", label: "Almost always", emoji: "😫" },
    ],
  },
  {
    type: "single",
    id: "screen-time",
    section: "lifestyle",
    title: "How much time do you spend looking down at screens?",
    options: [
      { value: "less-2", label: "Less than 2 hours", emoji: "📵" },
      { value: "2-4", label: "2–4 hours", emoji: "📱" },
      { value: "5-7", label: "5–7 hours", emoji: "💻" },
      { value: "more-8", label: "More than 8 hours", emoji: "🖥️" },
    ],
  },
  {
    type: "info",
    id: "info-tech-neck",
    section: "lifestyle",
    title: '"Tech neck" is real',
    body: "Looking down at your phone for hours weakens neck muscles and deepens lines. The good news: targeted face yoga exercises can counteract this and restore a defined, youthful neckline.",
    image: "/quiz/info-techneck.png",
    cta: "Continue",
  },

  // ---- NUTRITION ----
  {
    type: "single",
    id: "water",
    section: "nutrition",
    title: "How much water do you drink daily?",
    options: [
      { value: "less-1", label: "Less than 1 glass", emoji: "🚱" },
      { value: "2-3", label: "2–3 glasses", emoji: "🥤" },
      { value: "4-6", label: "4–6 glasses", emoji: "💧" },
      { value: "more-7", label: "7+ glasses", emoji: "🌊" },
    ],
  },
  {
    type: "multi",
    id: "diet",
    section: "nutrition",
    title: "What does your diet usually include?",
    subtitle: "Select all that apply",
    options: [
      { value: "vegetables", label: "Fresh fruits & vegetables", emoji: "🥗" },
      { value: "protein", label: "Lean protein", emoji: "🍗" },
      { value: "sugar", label: "Sweets & sugar", emoji: "🍰" },
      { value: "fast-food", label: "Fast food", emoji: "🍔" },
      { value: "coffee", label: "Coffee", emoji: "☕" },
      { value: "alcohol", label: "Alcohol", emoji: "🍷" },
    ],
  },
  {
    type: "single",
    id: "smoke",
    section: "nutrition",
    title: "Do you smoke?",
    options: [
      { value: "no", label: "No, never", emoji: "🚭" },
      { value: "occasionally", label: "Occasionally", emoji: "🤏" },
      { value: "yes", label: "Yes, regularly", emoji: "🚬" },
    ],
  },

  // ---- YOUR SKIN ----
  {
    type: "single",
    id: "skin-elasticity",
    section: "skin",
    title: "How elastic is your skin?",
    subtitle: "Pinch the skin on the back of your hand — how quickly does it bounce back?",
    options: [
      { value: "fast", label: "Instantly", emoji: "⚡" },
      { value: "medium", label: "After a second or two", emoji: "🙂" },
      { value: "slow", label: "It takes a while", emoji: "🐢" },
    ],
  },
  {
    type: "single",
    id: "wrinkle-depth",
    section: "skin",
    title: "How deep are your wrinkles?",
    options: [
      { value: "none", label: "Barely noticeable", image: "/quiz/wrinkle-none.png" },
      { value: "fine", label: "Fine lines", image: "/quiz/wrinkle-fine.png" },
      { value: "moderate", label: "Moderate", image: "/quiz/wrinkle-moderate.png" },
      { value: "deep", label: "Deep", image: "/quiz/wrinkle-deep.png" },
    ],
    hasImages: true,
  },
  {
    type: "single",
    id: "skincare-routine",
    section: "skin",
    title: "Do you have a skincare routine?",
    options: [
      { value: "none", label: "No routine at all", emoji: "🤷" },
      { value: "basic", label: "Just cleansing", emoji: "🧼" },
      { value: "moderate", label: "Cleanse & moisturize", emoji: "🧴" },
      { value: "full", label: "Full multi-step routine", emoji: "✨" },
    ],
  },
  {
    type: "single",
    id: "sun-exposure",
    section: "skin",
    title: "How much sun exposure do you get?",
    options: [
      { value: "low", label: "Rarely in the sun", emoji: "🌥️" },
      { value: "medium", label: "Moderate exposure", emoji: "⛅" },
      { value: "high", label: "Lots of sun", emoji: "☀️" },
    ],
  },

  // ---- FEELINGS ----
  {
    type: "single",
    id: "feel-when-mirror",
    section: "feelings",
    title: "How do you feel when you look in the mirror?",
    options: [
      { value: "confident", label: "Confident & happy", emoji: "😄" },
      { value: "okay", label: "Mostly okay", emoji: "🙂" },
      { value: "insecure", label: "A bit insecure", emoji: "😕" },
      { value: "unhappy", label: "Unhappy with what I see", emoji: "😞" },
    ],
  },
  {
    type: "single",
    id: "commitment",
    section: "feelings",
    title: "How much time can you commit each day?",
    options: [
      { value: "5", label: "5 minutes", emoji: "⏱️" },
      { value: "10", label: "10 minutes", emoji: "⏰" },
      { value: "15", label: "15 minutes", emoji: "🕐" },
      { value: "20+", label: "20+ minutes", emoji: "💪" },
    ],
  },
  {
    type: "single",
    id: "motivation",
    section: "feelings",
    title: "What motivates you the most?",
    options: [
      { value: "confidence", label: "Feeling confident again", emoji: "💖" },
      { value: "natural", label: "A natural, needle-free approach", emoji: "🌿" },
      { value: "event", label: "An upcoming event", emoji: "🎉" },
      { value: "habit", label: "Building a healthy habit", emoji: "🧘" },
    ],
  },
  {
    type: "info",
    id: "info-ready",
    section: "feelings",
    title: "1,000,000+ women trust Mimika",
    body: "You're just one step away from your personalized program. We'll use your answers to build a face yoga plan tailored to your goals, skin, and lifestyle.",
    image: "/quiz/info-community.png",
    cta: "Continue",
  },
  { type: "loading", id: "loading", section: "feelings" },
  { type: "email", id: "email", section: "feelings" },
  { type: "plan", id: "plan", section: "feelings" },
]

export const TOTAL_QUESTIONS = STEPS.filter(
  (s) => s.type === "single" || s.type === "multi" || s.type === "age" || s.type === "slider",
).length
