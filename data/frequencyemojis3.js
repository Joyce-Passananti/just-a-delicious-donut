const questions = [
  {
    question: "You will be asked to memorize 6 touch patterns to send emoticons. There is one touch pattern for each emoticon. Press start when ready.",
    emoji: '',
    answers: { id: "1", text: "Start", correct: true },
    vibration: "none",
    vibes: false,
    phase: false,

  },
  {
    question: "Like",
    emoji: "https://www.pinclipart.com/picdir/big/120-1206701_facebook-like-icon-facebook-like-emoji-png-clipart.png",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "thumbsup",
    vibes: true,
    phase: true,
  },
  {
    question: "Love",
    emoji: "http://clipart.info/images/ccovers/1499793238facebook-love-emoji-like-png.png",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "heart",
    vibes: true,
    phase: true,
  },
  {
    question: "Haha",
    emoji: "https://clipart.info/images/ccovers/1499793248facebook-haha.png",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "laugh",
    phase: true,
    vibes: true,
  },
  {
    question: "Sad",
    emoji: "http://clipart.info/images/ccovers/1499793247facebook-sad-emoji-like-png.png",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "crying",
    phase: true,
    vibes: true,
  },
  {
    question: "Angry",
    emoji: "http://clipart.info/images/ccovers/1499793239facebook-angry-emoji-like-png.png",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "angry",
    phase: true,
    vibes: true,
  },
  {
    question: "Yay",
    emoji: "https://cdn150.picsart.com/upscale-245420961007212.png?r1024x1024",
    answers: { id: "1", text: "Next", correct: true },
    back: {text: "Back"},

    vibration: "happy",
    phase: true,
    vibes: true,
  },
  {
    question: "You've now seen the touch pattern for each emoticon. If you would like to practice some more, press the back button for a refresher.",
    emoji: '',
    answers: { id: "1", text: "Continue", correct: true },
    back: {text: "Back"},

    vibration: "none",
    vibes: false,
    phase: false,

  },
  {
    question: 'Freestyle! Now you can use the touch patterns to send emoticons. Press "Start" when ready to begin.',
    answers: { id: "1", text: "Start", correct: true },
    vibration: "none",
    phase: false,
    vibes: false,
    number: 0,

  },
  {
    question: "Freestyle! Perform your touch patterns anywhere in the white area. \n\n Press reset below before sending another emoticon.",
    emoji: '',
    answers: { id: "1", text: "Next", correct: true },
    reset: true,

    vibration: "thumbsup",
    phase: false,
    vibes: true,
    number: 1,
  },
  {
    question: 'You\'re done with this test! Press the "Tests" button in the top left corner to go back.',
    emoji: "https://images.emojiterra.com/google/android-oreo/512px/1f389.png",
    answers: { id: "1", text: "Next", correct: true },
    vibration: "happy",
    phase: false,
    vibes: false,
    number: 7,
  },
];

export default questions;
