const questions = [
  {
    question: "You will be asked to memorize a series of emoticons through vibration. There are 6 emoticons. Press start when ready.",
    emoji: '',
    answers: { id: "1", text: "Start", correct: true },
    vibration: "none",
    vibes: true,
    phase: true,

  },
  {
    question: "Like",
    emoji: "https://www.pinclipart.com/picdir/big/120-1206701_facebook-like-icon-facebook-like-emoji-png-clipart.png",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "thumbsup",
    vibes: false,
    phase: true,
  },
  {
    question: "Love",
    emoji: "http://clipart.info/images/ccovers/1499793238facebook-love-emoji-like-png.png",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "heart",
    vibes: false,
    phase: true,
  },
  {
    question: "Haha",
    emoji: "https://clipart.info/images/ccovers/1499793248facebook-haha.png",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "laugh",
    phase: true,
    vibes: false,
  },
  {
    question: "Sad",
    emoji: "https://cdn.shopify.com/s/files/1/1061/1924/products/Loudly_Crying_Face_Emoji_grande.png?v=1571606037",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "crying",
    phase: true,
    vibes: false,
  },
  {
    question: "Angry",
    emoji: "http://clipart.info/images/ccovers/1499793239facebook-angry-emoji-like-png.png",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "angry",
    phase: true,
    vibes: false,
  },
  {
    question: "Yay",
    emoji: "https://cdn150.picsart.com/upscale-245420961007212.png?r1024x1024",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "happy",
    phase: true,
    vibes: false,
  },
  {
    question: "You've now seen each emoticon. If you're not confident you've memorized each emoticon, press the back button for a refresher.",
    emoji: '',
    answers: { id: "1", text: "Continue", correct: true },
    back: {text: "Back"},

    vibration: "none",
    vibes: true,
    phase: true,

  },
  {
    question: 'Now you will be shown a vibration then asked to identify the emoticon. Press "Start" when ready.',
    answers: { id: "1", text: "Start", correct: true },
    vibration: "none",
    phase: true,
    vibes: false,
    number: 0,

  },
  {
    question: "Identify the emoticon to your researcher.",
    emoji: '',
    answers: { id: "1", text: "Next", correct: true },

    vibration: "thumbsup",
    phase: false,
    vibes: false,
    number: 1,
  },
  {
    question: "Identify the emoticon to your researcher.",
    emoji: '',
    answers: { id: "1", text: "Next", correct: true },

    vibration: "heart",
    phase: false,
    vibes: false,
    number: 2,
  },
  {
    question: "Identify the emoticon to your researcher.",
    emoji: '',
    answers: { id: "1", text: "Next", correct: true },

    vibration: "laugh",
    phase: false,
    vibes: false,
    number: 3,
  },
  {
    question: "Identify the emoticon to your researcher.",
    emoji: '',
    answers: { id: "1", text: "Next", correct: true },

    vibration: "crying",
    phase: true,
    vibes: false,
    number: 4,
  },
  {
    question: "Identify the emoticon to your researcher.",
    emoji: '',
    answers: { id: "1", text: "Next", correct: true },

    vibration: "angry",
    phase: true,
    vibes: false,
    number: 5,
  },
  {
    question: "Identify the emoticon to your researcher.",
    emoji: '',
    answers: { id: "1", text: "Next", correct: true },

    vibration: "happy",
    phase: true,
    vibes: false,
    number: 6,
  },
  {
    question: 'You\'re done with this test! Press the "Tests" button in the top left corner to go back.',
    emoji: "https://images.emojiterra.com/google/android-oreo/512px/1f389.png",
    answers: { id: "1", text: "Next", correct: true },
    vibration: "happy",
    phase: true,
    vibes: false,
    number: 7,
  },
];

export default questions;
