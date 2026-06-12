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
  emoji?: string
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
      // "list" = vertical rows (emoji on the left)
      // "grid" = 2-column cards with a large emoji on top
      layout?: "list" | "grid"
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
    layout: "list",
    options: [
      { value: "yes", label: "Yes", emoji: "🥺" },
      { value: "no", label: "No", emoji: "🙆‍♀️" },
    ],
  },
  {
    type: "multi",
    id: "worries-most",
    section: "goals",
    title: "What age-related change worries you the most?",
    layout: "grid",
    options: [
      { value: "drooping", label: "Facial Drooping", emoji: "😟" },
      { value: "sagging", label: "Sagging skin or Wrinkles", emoji: "😔" },
      { value: "fat", label: "Excess Fat or Puffiness", emoji: "🫥" },
      { value: "imbalance", label: "Imbalance in Proportions", emoji: "🙃" },
    ],
  },
  {
    type: "multi",
    id: "improve-eyes",
    section: "goals",
    title: "Which of these are you looking to improve?",
    layout: "grid",
    options: [
      { value: "eyelids", label: "Drooping Eyelids", emoji: "😪" },
      { value: "eye-bags", label: "Eye Bags", emoji: "😣" },
      { value: "puffiness", label: "Puffiness", emoji: "😶‍🌫️" },
      { value: "under-eye", label: "Under-Eye Wrinkles", emoji: "😬" },
    ],
  },
  {
    type: "multi",
    id: "improve-lower",
    section: "goals",
    title: "Which of these are you looking to improve?",
    layout: "grid",
    options: [
      { value: "double-chin", label: "Double Chin", emoji: "🙂" },
      { value: "saggy-neck", label: "Saggy Neck", emoji: "🦢" },
      { value: "cheekbones", label: "Cheekbones", emoji: "💎" },
      { value: "thin-lips", label: "Thin Lips", emoji: "👄" },
    ],
  },
  {
    type: "multi",
    id: "wrinkles-attention",
    section: "goals",
    title: "Which wrinkles catch your attention?",
    layout: "grid",
    options: [
      { value: "nasolabial", label: "Nasolabial Fold", emoji: "😮" },
      { value: "fine-lines", label: "Full-face Fine Lines", emoji: "〰️" },
      { value: "forehead", label: "Forehead Creases", emoji: "😯" },
      { value: "deep-line", label: "Full-face Deep Line", emoji: "➰" },
    ],
  },
  {
    type: "multi",
    id: "faced",
    section: "goals",
    title: "Which of these have you faced?",
    layout: "grid",
    options: [
      { value: "tired", label: "Tired look", emoji: "🪞" },
      { value: "thin-skin", label: "Thin skin", emoji: "🍃" },
      { value: "dry", label: "Dry or itchy skin", emoji: "🌵" },
      { value: "sensitive", label: "Sensitive skin", emoji: "🪶" },
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
    layout: "list",
    options: [
      { value: "15-less", label: "15 mins or less a day", emoji: "⏱️" },
      { value: "20-more", label: "At least 20 min. a day", emoji: "⏰" },
    ],
  },
  {
    type: "single",
    id: "when-practice",
    section: "lifestyle",
    title: "We got you! When would you like to practice self-care?",
    layout: "list",
    options: [
      { value: "morning", label: "Morning", emoji: "🌅" },
      { value: "evening", label: "Evening", emoji: "🌙" },
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
    layout: "list",
    options: [
      { value: "smoking", label: "Smoking", emoji: "🚬" },
      { value: "drinking", label: "Drinking alcohol", emoji: "🍷" },
      { value: "junk-food", label: "Eating junk food", emoji: "🍔" },
      { value: "late", label: "Staying up late", emoji: "🌃" },
      { value: "none", label: "None of the above", emoji: "✨" },
    ],
  },
  {
    type: "single",
    id: "meals",
    section: "lifestyle",
    title: "How many meals do you typically eat per day?",
    layout: "list",
    options: [
      { value: "3", label: "Around 3 meals a day", emoji: "🍽️" },
      { value: "less-3", label: "Less than 3 meals a day", emoji: "🥗" },
      { value: "depends", label: "It depends on my day", emoji: "🤷‍♀️" },
      { value: "snack", label: "I'm more of a snack person", emoji: "🍿" },
    ],
  },
  {
    type: "single",
    id: "lifestyle-activity",
    section: "lifestyle",
    title: "How would you сharacterize your lifestyle?",
    layout: "list",
    options: [
      { value: "very-inactive", label: "Very inactive", emoji: "🛋️" },
      { value: "not-active", label: "Not really active", emoji: "🚶‍♀️" },
      { value: "somewhat", label: "Somewhat active", emoji: "🏃‍♀️" },
      { value: "very-active", label: "Very active", emoji: "🤸‍♀️" },
    ],
  },
  {
    type: "single",
    id: "working-schedule",
    section: "lifestyle",
    title: "What describes your working schedule?",
    layout: "list",
    options: [
      { value: "9-5", label: "Weekdays, 9 to 5", emoji: "🏢" },
      { value: "night", label: "Night shift", emoji: "🌙" },
      { value: "freelancer", label: "Freelancer or contractor", emoji: "💻" },
      { value: "no-work", label: "I don't work", emoji: "🏖️" },
    ],
  },
  {
    type: "single",
    id: "sleep",
    section: "lifestyle",
    title: "How long do you typically sleep at night?",
    layout: "list",
    options: [
      { value: "less-5", label: "Less than 5 hours", emoji: "😵" },
      { value: "5-6", label: "5-6 hours", emoji: "😴" },
      { value: "7-8", label: "7-8 hours", emoji: "😌" },
      { value: "more-8", label: "More than 8 hours", emoji: "🛌" },
    ],
  },
  {
    type: "single",
    id: "pregnant",
    section: "lifestyle",
    title: "Are you pregnant or breastfeeding?",
    layout: "list",
    options: [
      { value: "pregnant", label: "Yes, I'm pregnant", emoji: "🤰" },
      { value: "no", label: "No", emoji: "🙅‍♀️" },
      { value: "breastfeeding", label: "Breastfeeding", emoji: "🤱" },
      { value: "no-answer", label: "Prefer not to answer", emoji: "🤐" },
    ],
  },
  {
    type: "single",
    id: "dark-circles",
    section: "lifestyle",
    title: "Do you have dark circles or wrinkles under your eyes?",
    layout: "list",
    options: [
      { value: "yes", label: "Yes", emoji: "😔" },
      { value: "no", label: "No", emoji: "😊" },
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
    layout: "list",
    options: [
      { value: "everyday", label: "Everyday", emoji: "🍰" },
      { value: "often", label: "Often", emoji: "🍪" },
      { value: "sometimes", label: "Sometimes", emoji: "🍫" },
      { value: "never", label: "Never", emoji: "🚫" },
    ],
  },
  {
    type: "single",
    id: "salt",
    section: "nutrition",
    title: "How much salt do you generally use?",
    layout: "list",
    options: [
      { value: "love", label: "I love salty food", emoji: "🧂" },
      { value: "moderate", label: "In moderate amounts", emoji: "🍲" },
      { value: "not-much", label: "Not much", emoji: "🥄" },
      { value: "none", label: "I don't add salt", emoji: "🚫" },
    ],
  },
  {
    type: "single",
    id: "vegetables",
    section: "nutrition",
    title: "How often do you eat vegetables?",
    layout: "list",
    options: [
      { value: "everyday", label: "Everyday", emoji: "🥦" },
      { value: "often", label: "Often", emoji: "🥕" },
      { value: "sometimes", label: "Sometimes", emoji: "🥗" },
      { value: "never", label: "Never", emoji: "🚫" },
    ],
  },
  {
    type: "single",
    id: "water",
    section: "nutrition",
    title: "How many glasses of water do you drink per day?",
    layout: "list",
    options: [
      { value: "1-2", label: "1-2 glasses", emoji: "💧" },
      { value: "2-4", label: "2-4 glasses", emoji: "🥤" },
      { value: "5-9", label: "5-9 glasses", emoji: "🚰" },
      { value: "none", label: "I don't drink pure water", emoji: "🚫" },
    ],
  },
  {
    type: "single",
    id: "puffy-morning",
    section: "nutrition",
    title: "Do you swell or get puffy in the morning?",
    layout: "list",
    options: [
      { value: "yes-often", label: "Yes, often", emoji: "😵‍💫" },
      { value: "sometimes", label: "Sometimes", emoji: "😕" },
      { value: "rarely", label: "Rarely", emoji: "🙂" },
      { value: "never", label: "No, never", emoji: "😊" },
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
    layout: "list",
    options: [
      { value: "never", label: "No, never", emoji: "😊" },
      { value: "occasionally", label: "Occasionally", emoji: "🙂" },
      { value: "t-zone", label: "Only in my T-zone", emoji: "🔆" },
      { value: "all-over", label: "Yes, all over my face", emoji: "✨" },
    ],
  },
  {
    type: "single",
    id: "after-cleansing",
    section: "skin",
    title: "How do you feel after cleansing your face?",
    layout: "list",
    options: [
      { value: "fine", label: "Just fine", emoji: "😌" },
      { value: "tightness", label: "Tightness in the cheek area", emoji: "😬" },
      { value: "moisturizing", label: "Uncomfortable, I need more moisturizing", emoji: "💧" },
      { value: "cleansing", label: "Uncomfortable, I need more deep cleansing", emoji: "🧼" },
    ],
  },
  {
    type: "single",
    id: "acne-prone",
    section: "skin",
    title: "Do you agree that your skin is acne-prone?",
    layout: "list",
    options: [
      { value: "no", label: "No", emoji: "😊" },
      { value: "yes", label: "Yes", emoji: "😔" },
      { value: "t-zone", label: "Only in my T-zone", emoji: "🔆" },
    ],
  },
  {
    type: "single",
    id: "uneven-texture",
    section: "skin",
    title: "Do you agree that your skin has an uneven texture?",
    layout: "list",
    options: [
      { value: "no", label: "No", emoji: "😊" },
      { value: "yes", label: "Yes", emoji: "😔" },
    ],
  },
  {
    type: "single",
    id: "stress-face",
    section: "skin",
    title: "Does stress show on your face?",
    layout: "list",
    options: [
      { value: "no", label: "No", emoji: "😌" },
      { value: "yes", label: "Yes", emoji: "😣" },
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
    layout: "list",
    options: [
      { value: "fragrances", label: "Fragrances", emoji: "🌸" },
      { value: "alcohol", label: "Alcohol", emoji: "🧴" },
      { value: "essential-oils", label: "Essential oils", emoji: "🪔" },
      { value: "retinol", label: "Retinol", emoji: "💊" },
      { value: "vitamin-c", label: "Vitamin C", emoji: "🍊" },
      { value: "acids", label: "Acids", emoji: "🧪" },
      { value: "sulfates", label: "Sulfates", emoji: "🫧" },
      { value: "none", label: "None of above", emoji: "✨" },
    ],
  },
  {
    type: "single",
    id: "skin-color",
    section: "skin",
    title: "How would you best identify your skin color?",
    layout: "list",
    options: [
      { value: "sand", label: "Sand or Warm ivory", emoji: "🌝" },
      { value: "fair", label: "Fair or Pale ivory", emoji: "🤍" },
      { value: "olive", label: "Olive or Light brown", emoji: "🫒" },
      { value: "brown", label: "Brown or Black brown", emoji: "🤎" },
    ],
  },
  {
    type: "multi",
    id: "skin-problems",
    section: "skin",
    title: "Do you experience any of these skin problems?",
    layout: "list",
    options: [
      { value: "acne", label: "Acne, post-acne and scars", emoji: "🔴" },
      { value: "wrinkles", label: "Wrinkles", emoji: "〰️" },
      { value: "dullness", label: "Dullness", emoji: "😶" },
      { value: "pigmentation", label: "Pigmentation", emoji: "🟤" },
      { value: "texture", label: "Texture issues", emoji: "🪨" },
      { value: "firmness", label: "Loss of firmness", emoji: "🎈" },
      { value: "redness", label: "Redness/rosacea", emoji: "🌹" },
      { value: "sensitive", label: "Sensitive skin", emoji: "🪶" },
      { value: "fine", label: "My skin is just fine", emoji: "✨" },
    ],
  },
  {
    type: "multi",
    id: "skincare-goals",
    section: "skin",
    title: "What are your skincare goals?",
    layout: "list",
    options: [
      { value: "moisturizing", label: "Moisturizing", emoji: "💧" },
      { value: "anti-aging", label: "Anti-aging", emoji: "⏳" },
      { value: "oil-control", label: "Oil control", emoji: "🪞" },
      { value: "pores", label: "Reducing pores", emoji: "🔬" },
      { value: "acne", label: "Acne treatment", emoji: "🔴" },
      { value: "soothing", label: "Soothing sensitive skin", emoji: "🪶" },
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
    layout: "grid",
    options: [
      { value: "18-24", label: "18-24", emoji: "🌷" },
      { value: "25-34", label: "25-34", emoji: "🌸" },
      { value: "35-44", label: "35-44", emoji: "🌺" },
      { value: "45-54", label: "45-54", emoji: "🌻" },
      { value: "55-64", label: "55-64", emoji: "🌹" },
      { value: "65+", label: "65+", emoji: "💐" },
    ],
  },
  {
    type: "single",
    id: "face-shape",
    section: "feelings",
    title: "How would you describe your face shape?",
    layout: "grid",
    options: [
      { value: "oval", label: "Oval", emoji: "🥚" },
      { value: "square", label: "Square", emoji: "⬛" },
      { value: "round", label: "Round", emoji: "⚪" },
      { value: "diamond", label: "Diamond", emoji: "💎" },
      { value: "rectangular", label: "Rectangular", emoji: "▭" },
      { value: "triangle", label: "Triangle", emoji: "🔺" },
    ],
  },
  {
    type: "single",
    id: "feel-area",
    section: "feelings",
    title: "“I'm unhappy with a specific area of my face”",
    image: "/quiz/feel-area.png",
    layout: "list",
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
    layout: "list",
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
    layout: "list",
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
    layout: "list",
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
    layout: "list",
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
    layout: "list",
    options: [
      { value: "mewing", label: "Mewing", emoji: "😶" },
      { value: "face-yoga", label: "Face Yoga", emoji: "🧘‍♀️" },
      { value: "face-fitness", label: "Face Fitness", emoji: "💪" },
      { value: "glowing", label: "Glowing", emoji: "✨" },
      { value: "12-step", label: "12-Step face care routine", emoji: "🧴" },
    ],
  },

  { type: "loading", id: "loading", section: "feelings" },
  { type: "email", id: "email", section: "feelings" },
  { type: "plan", id: "plan", section: "feelings" },
]

export const TOTAL_QUESTIONS = STEPS.filter((s) => s.type === "single" || s.type === "multi").length
