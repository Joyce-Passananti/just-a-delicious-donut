const questions = [
  {
    question: "You will be asked to memorize a series of emojis through vibration. There are 6 emojis. Press start when ready.",
    emoji: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_large.png?v=1571606089',
    answers: { id: "1", text: "Start", correct: true },
    vibration: "none",
    vibes: true,
    phase: true,

  },
  {
    question: "Thumbs up",
    emoji: "https://lh3.googleusercontent.com/proxy/FU6yPA1p91VgbLSVbmudQzxdc03MrVDfVXKQyxG19lP9X7idD2v-WaRUZDjHDgSbIkhvoSq3NWUb5IfqIp2OfTLc6-X1RXIcOMaNthV5ShSO2hV8wOoe7Afbrw",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "thumbsup",
    vibes: false,
    phase: true,
  },
  {
    question: "Heart",
    emoji: "https://i.pinimg.com/originals/63/d3/8d/63d38d8cbba4335a6d28b5e19f67be8d.png",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "heart",
    vibes: false,
    phase: true,
  },
  {
    question: "Laugh",
    emoji: "https://images.vexels.com/media/users/3/134640/isolated/preview/f2755703f8a93785225a13be336ad9c1-laugh-crying-emoji-emoticon-by-vexels.png",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "laugh",
    phase: true,
    vibes: false,
  },
  {
    question: "Crying",
    emoji: "https://cdn.shopify.com/s/files/1/1061/1924/products/Loudly_Crying_Face_Emoji_grande.png?v=1571606037",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "crying",
    phase: true,
    vibes: false,
  },
  {
    question: "Angry",
    emoji: "https://i.pinimg.com/originals/c2/0a/22/c20a2221cc2eda66004be6e80a704bd5.png",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "angry",
    phase: true,
    vibes: false,
  },
  {
    question: "Happy",
    emoji: "https://lh3.googleusercontent.com/proxy/EJOGBCteqqRECI2tNVvXCnareTox_3SpkRknODYgkZXAO-2E9GutFtXtRnqKGCoQJc_F5bcSWgc1w5-vUJa37xcQTP-4dcE",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "happy",
    phase: true,
    vibes: false,
  },
  {
    question: "Thumbs up",
    emoji: "https://lh3.googleusercontent.com/proxy/FU6yPA1p91VgbLSVbmudQzxdc03MrVDfVXKQyxG19lP9X7idD2v-WaRUZDjHDgSbIkhvoSq3NWUb5IfqIp2OfTLc6-X1RXIcOMaNthV5ShSO2hV8wOoe7Afbrw",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "thumbsup",
    phase: true,
    vibes: false,
  },
  {
    question: "Heart",
    emoji: "https://i.pinimg.com/originals/63/d3/8d/63d38d8cbba4335a6d28b5e19f67be8d.png",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "heart",
    phase: true,
    vibes: false,
  },
  {
    question: "Laugh",
    emoji: "https://images.vexels.com/media/users/3/134640/isolated/preview/f2755703f8a93785225a13be336ad9c1-laugh-crying-emoji-emoticon-by-vexels.png",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "laugh",
    phase: true,
    vibes: false,
  },
  {
    question: "Crying",
    emoji: "https://cdn.shopify.com/s/files/1/1061/1924/products/Loudly_Crying_Face_Emoji_grande.png?v=1571606037",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "crying",
    phase: true,
    vibes: false,
  },
  {
    question: "Angry",
    emoji: "https://i.pinimg.com/originals/c2/0a/22/c20a2221cc2eda66004be6e80a704bd5.png",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "angry",
    phase: true,
    vibes: false,
  },
  {
    question: "Happy",
    emoji: "https://lh3.googleusercontent.com/proxy/EJOGBCteqqRECI2tNVvXCnareTox_3SpkRknODYgkZXAO-2E9GutFtXtRnqKGCoQJc_F5bcSWgc1w5-vUJa37xcQTP-4dcE",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "happy2",
    phase: true,
    vibes: false,
  },
  {
    question: "Now you will be shown an emoji then asked to replicate it from memory. Take the time to familiarize yourself with creating vibrations by pressing the Make Vibration button below. Press Ready when you're ready to start",
    emoji: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_large.png?v=1571606089',
    answers: { id: "1", text: "Start", correct: true },
    vibration: "none",
    phase: false,
    vibes: true,
    number: 0,

  },
  {
    question: "Thumbs up",
    emoji: "https://lh3.googleusercontent.com/proxy/FU6yPA1p91VgbLSVbmudQzxdc03MrVDfVXKQyxG19lP9X7idD2v-WaRUZDjHDgSbIkhvoSq3NWUb5IfqIp2OfTLc6-X1RXIcOMaNthV5ShSO2hV8wOoe7Afbrw",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "thumbsup",
    phase: false,
    vibes: true,
    number: 1,
  },
  {
    question: "Heart",
    emoji: "https://i.pinimg.com/originals/63/d3/8d/63d38d8cbba4335a6d28b5e19f67be8d.png",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "heart",
    phase: false,
    vibes: true,
    number: 2,
  },
  {
    question: "Laugh",
    emoji: "https://images.vexels.com/media/users/3/134640/isolated/preview/f2755703f8a93785225a13be336ad9c1-laugh-crying-emoji-emoticon-by-vexels.png",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "laugh",
    phase: false,
    vibes: true,
    number: 3,
  },
  {
    question: "Crying",
    emoji: "https://cdn.shopify.com/s/files/1/1061/1924/products/Loudly_Crying_Face_Emoji_grande.png?v=1571606037",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "crying",
    phase: false,
    vibes: true,
    number: 4,
  },
  {
    question: "Angry",
    emoji: "https://i.pinimg.com/originals/c2/0a/22/c20a2221cc2eda66004be6e80a704bd5.png",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "angry",
    phase: false,
    vibes: true,
    number: 5,
  },
  {
    question: "Happy",
    emoji: "https://lh3.googleusercontent.com/proxy/EJOGBCteqqRECI2tNVvXCnareTox_3SpkRknODYgkZXAO-2E9GutFtXtRnqKGCoQJc_F5bcSWgc1w5-vUJa37xcQTP-4dcE",
    answers: { id: "1", text: "Next", correct: true },

    vibration: "happy",
    phase: false,
    vibes: true,
    number: 6,
  },
  {
    question: "You're done! Please screenshot and send us these results.",
    emoji: "https://images.emojiterra.com/google/android-oreo/512px/1f389.png",
    answers: { id: "1", text: "Next", correct: true },
    vibration: "happy",
    phase: true,
    vibes: true,
    number: 7,
  },
];

export default questions;
