export type Section = {
  id: string
  label: string
}

export const SECTIONS: Section[] = [
  { id: "goals", label: "Goals" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "nutrition", label: "Nutrition" },
  { id: "skin", label: "Your skin" },
  { id: "feelings", label: "Feelings" },
]

export type Option = {
  value: string
  label: string
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
      image?: string
      options: Option[]
      note?: { title: string; body: string }
    }
  | {
      type: "info"
      id: string
      section: string
      title: string
      body?: string
      image?: string
      cta: string
      stat?: { value: string; label: string }
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

  // ---- GOALS ----
  {
    type: "single",
    id: "notice-changes",
    section: "goals",
    title: "Do you notice any facial age-related changes?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    type: "multi",
    id: "worries-most",
    section: "goals",
    title: "What age-related change worries you the most?",
    options: [
      { value: "drooping", label: "Facial Drooping" },
      { value: "sagging", label: "Sagging skin or Wrinkles" },
      { value: "fat", label: "Excess Fat or Puffiness" },
      { value: "imbalance", label: "Imbalance in Proportions" },
    ],
  },
  {
    type: "multi",
    id: "improve-eyes",
    section: "goals",
    title: "Which of these are you looking to improve?",
    options: [
      { value: "eyelids", label: "Drooping Eyelids" },
      { value: "eye-bags", label: "Eye Bags" },
      { value: "puffiness", label: "Puffiness" },
      { value: "under-eye", label: "Under-Eye Wrinkles" },
    ],
  },
  {
    type: "multi",
    id: "improve-lower",
    section: "goals",
    title: "Which of these are you looking to improve?",
    options: [
      { value: "double-chin", label: "Double Chin" },
      { value: "saggy-neck", label: "Saggy Neck" },
      { value: "cheekbones", label: "Cheekbones" },
      { value: "thin-lips", label: "Thin Lips" },
    ],
  },
  {
    type: "multi",
    id: "wrinkles-attention",
    section: "goals",
    title: "Which wrinkles catch your attention?",
    options: [
      { value: "nasolabial", label: "Nasolabial Fold" },
      { value: "fine-lines", label: "Full-face Fine Lines" },
      { value: "forehead", label: "Forehead Creases" },
      { value: "deep-line", label: "Full-face Deep Line" },
    ],
  },
  {
    type: "multi",
    id: "faced",
    section: "goals",
    title: "Which of these have you faced?",
    options: [
      { value: "tired", label: "Tired look" },
      { value: "thin-skin", label: "Thin skin" },
      { value: "dry", label: "Dry or itchy skin" },
      { value: "sensitive", label: "Sensitive skin" },
    ],
  },
  {
    type: "info",
    id: "customizing",
    section: "goals",
    title: "We're customizing the program to suit you",
    image: "/quiz/customizing.png",
    cta: "Let's increase my program fit!",
  },

  // ---- LIFESTYLE ----
  {
    type: "single",
    id: "routine-time",
    section: "lifestyle",
    title: "How long should your self-care routine take?",
    options: [
      { value: "15-less", label: "15 mins or less a day" },
      { value: "20-more", label: "At least 20 min. a day" },
    ],
  },
  {
    type: "single",
    id: "when-practice",
    section: "lifestyle",
    title: "We got you! When would you like to practice self-care?",
    options: [
      { value: "morning", label: "Morning" },
      { value: "evening", label: "Evening" },
    ],
  },
  {
    type: "info",
    id: "schedule",
    section: "lifestyle",
    title: "Mimika will suit your schedule!",
    body: "We value your time",
    image: "/quiz/schedule.png",
    stat: { value: "68% of our users", label: "prefer to exercise in the morning" },
    cta: "Next",
  },
  {
    type: "multi",
    id: "unhealthy-habits",
    section: "lifestyle",
    title: "Do you engage in any of these unhealthy habits?",
    options: [
      { value: "smoking", label: "Smoking" },
      { value: "drinking", label: "Drinking alcohol" },
      { value: "junk-food", label: "Eating junk food" },
      { value: "late", label: "Staying up late" },
      { value: "none", label: "None of the above" },
    ],
  },
  {
    type: "single",
    id: "meals",
    section: "lifestyle",
    title: "How many meals do you typically eat per day?",
    options: [
      { value: "3", label: "Around 3 meals a day" },
      { value: "less-3", label: "Less than 3 meals a day" },
      { value: "depends", label: "It depends on my day" },
      { value: "snack", label: "I'm more of a snack person" },
    ],
  },
  {
    type: "single",
    id: "lifestyle-activity",
    section: "lifestyle",
    title: "How would you сharacterize your lifestyle?",
    options: [
      { value: "very-inactive", label: "Very inactive" },
      { value: "not-active", label: "Not really active" },
      { value: "somewhat", label: "Somewhat active" },
      { value: "very-active", label: "Very active" },
    ],
  },
  {
    type: "single",
    id: "working-schedule",
    section: "lifestyle",
    title: "What describes your working schedule?",
    options: [
      { value: "9-5", label: "Weekdays, 9 to 5" },
      { value: "night", label: "Night shift" },
      { value: "freelancer", label: "Freelancer or contractor" },
      { value: "no-work", label: "I don't work" },
    ],
  },
  {
    type: "single",
    id: "sleep",
    section: "lifestyle",
    title: "How long do you typically sleep at night?",
    options: [
      { value: "less-5", label: "Less than 5 hours" },
      { value: "5-6", label: "5-6 hours" },
      { value: "7-8", label: "7-8 hours" },
      { value: "more-8", label: "More than 8 hours" },
    ],
  },
  {
    type: "single",
    id: "pregnant",
    section: "lifestyle",
    title: "Are you pregnant or breastfeeding?",
    options: [
      { value: "pregnant", label: "Yes, I'm pregnant" },
      { value: "no", label: "No" },
      { value: "breastfeeding", label: "Breastfeeding" },
      { value: "no-answer", label: "Prefer not to answer" },
    ],
  },
  {
    type: "single",
    id: "dark-circles",
    section: "lifestyle",
    title: "Do you have dark circles or wrinkles under your eyes?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    type: "info",
    id: "well-done",
    section: "lifestyle",
    title: "Well done",
    body: "Your personal program is almost ready! Just a few more questions…",
    cta: "Next",
  },

  // ---- NUTRITION ----
  {
    type: "single",
    id: "added-sugar",
    section: "nutrition",
    title: "Do you eat products with added sugar?",
    options: [
      { value: "everyday", label: "Everyday" },
      { value: "often", label: "Often" },
      { value: "sometimes", label: "Sometimes" },
      { value: "never", label: "Never" },
    ],
  },
  {
    type: "single",
    id: "salt",
    section: "nutrition",
    title: "How much salt do you generally use?",
    options: [
      { value: "love", label: "I love salty food" },
      { value: "moderate", label: "In moderate amounts" },
      { value: "not-much", label: "Not much" },
      { value: "none", label: "I don't add salt" },
    ],
  },
  {
    type: "single",
    id: "vegetables",
    section: "nutrition",
    title: "How often do you eat vegetables?",
    options: [
      { value: "everyday", label: "Everyday" },
      { value: "often", label: "Often" },
      { value: "sometimes", label: "Sometimes" },
      { value: "never", label: "Never" },
    ],
  },
  {
    type: "single",
    id: "water",
    section: "nutrition",
    title: "How many glasses of water do you drink per day?",
    options: [
      { value: "1-2", label: "1-2 glasses" },
      { value: "2-4", label: "2-4 glasses" },
      { value: "5-9", label: "5-9 glasses" },
      { value: "none", label: "I don't drink pure water" },
    ],
  },
  {
    type: "single",
    id: "puffy-morning",
    section: "nutrition",
    title: "Do you swell or get puffy in the morning?",
    options: [
      { value: "yes-often", label: "Yes, often" },
      { value: "sometimes", label: "Sometimes" },
      { value: "rarely", label: "Rarely" },
      { value: "never", label: "No, never" },
    ],
  },
  {
    type: "info",
    id: "skin-type-test",
    section: "skin",
    title: "Do you know your skin type?",
    body: "Take a simple test to receive your personal program with useful recommendations",
    image: "/quiz/skintype.png",
    cta: "Let's go!",
  },

  // ---- YOUR SKIN ----
  {
    type: "single",
    id: "oily-shine",
    section: "skin",
    title: "Do you notice an oily shine on your face?",
    options: [
      { value: "never", label: "No, never" },
      { value: "occasionally", label: "Occasionally" },
      { value: "t-zone", label: "Only in my T-zone" },
      { value: "all-over", label: "Yes, all over my face" },
    ],
  },
  {
    type: "single",
    id: "after-cleansing",
    section: "skin",
    title: "How do you feel after cleansing your face?",
    options: [
      { value: "fine", label: "Just fine" },
      { value: "tightness", label: "Tightness in the cheek area" },
      { value: "moisturizing", label: "Uncomfortable, I need more moisturizing" },
      { value: "cleansing", label: "Uncomfortable, I need more deep cleansing" },
    ],
  },
  {
    type: "single",
    id: "acne-prone",
    section: "skin",
    title: "Do you agree that your skin is acne-prone?",
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
      { value: "t-zone", label: "Only in my T-zone" },
    ],
  },
  {
    type: "single",
    id: "uneven-texture",
    section: "skin",
    title: "Do you agree that your skin has an uneven texture?",
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
    ],
  },
  {
    type: "single",
    id: "stress-face",
    section: "skin",
    title: "Does stress show on your face?",
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
    ],
    note: {
      title: "Did you know?",
      body: "Exercising with Mimika for only 5 minutes a day will reduce your stress level significantly",
    },
  },
  {
    type: "multi",
    id: "allergies",
    section: "skin",
    title: "Do you have any ingredient allergies?",
    options: [
      { value: "fragrances", label: "Fragrances" },
      { value: "alcohol", label: "Alcohol" },
      { value: "essential-oils", label: "Essential oils" },
      { value: "retinol", label: "Retinol" },
      { value: "vitamin-c", label: "Vitamin C" },
      { value: "acids", label: "Acids" },
      { value: "sulfates", label: "Sulfates" },
      { value: "none", label: "None of above" },
    ],
  },
  {
    type: "single",
    id: "skin-color",
    section: "skin",
    title: "How would you best identify your skin color?",
    options: [
      { value: "sand", label: "Sand or Warm ivory" },
      { value: "fair", label: "Fair or Pale ivory" },
      { value: "olive", label: "Olive or Light brown" },
      { value: "brown", label: "Brown or Black brown" },
    ],
  },
  {
    type: "multi",
    id: "skin-problems",
    section: "skin",
    title: "Do you experience any of these skin problems?",
    options: [
      { value: "acne", label: "Acne, post-acne and scars" },
      { value: "wrinkles", label: "Wrinkles" },
      { value: "dullness", label: "Dullness" },
      { value: "pigmentation", label: "Pigmentation" },
      { value: "texture", label: "Texture issues" },
      { value: "firmness", label: "Loss of firmness" },
      { value: "redness", label: "Redness/rosacea" },
      { value: "sensitive", label: "Sensitive skin" },
      { value: "fine", label: "My skin is just fine" },
    ],
  },
  {
    type: "multi",
    id: "skincare-goals",
    section: "skin",
    title: "What are your skincare goals?",
    options: [
      { value: "moisturizing", label: "Moisturizing" },
      { value: "anti-aging", label: "Anti-aging" },
      { value: "oil-control", label: "Oil control" },
      { value: "pores", label: "Reducing pores" },
      { value: "acne", label: "Acne treatment" },
      { value: "soothing", label: "Soothing sensitive skin" },
    ],
  },
  {
    type: "info",
    id: "skin-tips",
    section: "skin",
    title: "Skin сare tips based on your answers:",
    body: "Skin type: Normal — Lucky you! You don't experience a glossy shine or dryness. Your skin tone is fresh and healthy, and you can easily add new products or rituals to your beauty routine.\n\nCare with: Peach Oil — This oil will soften your skin and protect it from negative external factors.\n\nSkin color: Sand or Warm ivory — SPF and Moisturizer must be incorporated into your skin care routine! Don't forget to protect your skin, even when it's not that sunny.",
    cta: "Continue",
  },
  {
    type: "info",
    id: "changes",
    section: "skin",
    title: "See noticeable changes in 4 weeks",
    image: "/quiz/changes.png",
    body: "Keep moving — Do simple routine daily and enjoy long-lasting results",
    cta: "Great!",
  },

  // ---- FEELINGS ----
  {
    type: "single",
    id: "age",
    section: "feelings",
    title: "Let's get to know each other What's your age?",
    options: [
      { value: "18-24", label: "18-24" },
      { value: "25-34", label: "25-34" },
      { value: "35-44", label: "35-44" },
      { value: "45-54", label: "45-54" },
      { value: "55-64", label: "55-64" },
      { value: "65+", label: "65+" },
    ],
  },
  {
    type: "single",
    id: "face-shape",
    section: "feelings",
    title: "How would you describe your face shape?",
    options: [
      { value: "oval", label: "Oval" },
      { value: "square", label: "Square" },
      { value: "round", label: "Round" },
      { value: "diamond", label: "Diamond" },
      { value: "rectangular", label: "Rectangular" },
      { value: "triangle", label: "Triangle" },
    ],
  },
  {
    type: "single",
    id: "feel-area",
    section: "feelings",
    title: "“I'm unhappy with a specific area of my face”",
    image: "/quiz/feel-area.png",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    type: "single",
    id: "feel-jawline",
    section: "feelings",
    title: "“I want to have a more sculpted jawline”",
    image: "/quiz/feel-jawline.png",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    type: "single",
    id: "feel-surgery",
    section: "feelings",
    title: "“Only plastic surgery can transform my face”",
    image: "/quiz/feel-surgery.png",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    type: "single",
    id: "feel-beauty",
    section: "feelings",
    title: "“I'm afraid I will lose my beauty as I age”",
    image: "/quiz/feel-beauty.png",
    options: [
      { value: "yes", label: "Yes, totally" },
      { value: "no", label: "No, not at all" },
    ],
  },
  {
    type: "single",
    id: "feel-stress",
    section: "feelings",
    title: "“My appearance is the reason why I'm stressed”",
    image: "/quiz/feel-stress.png",
    options: [
      { value: "yes", label: "Yes, totally" },
      { value: "no", label: "No, not at all" },
    ],
  },
  {
    type: "multi",
    id: "add-to-plan",
    section: "feelings",
    title: "What you'd like to add to your plan?",
    options: [
      { value: "mewing", label: "Mewing" },
      { value: "face-yoga", label: "Face Yoga" },
      { value: "face-fitness", label: "Face Fitness" },
      { value: "glowing", label: "Glowing" },
      { value: "12-step", label: "12-Step face care routine" },
    ],
  },

  { type: "loading", id: "loading", section: "feelings" },
  { type: "email", id: "email", section: "feelings" },
  { type: "plan", id: "plan", section: "feelings" },
]

export const TOTAL_QUESTIONS = STEPS.filter((s) => s.type === "single" || s.type === "multi").length
