/*
  Опросник — 9 шагов вопросов + анализ + готово.
  Экраны Figma: 293-8923 (имя), 9944 (интро), 10159 (пол), 10311 (возраст),
  10733 (жанр), 10863 (частота), 10449 (покупки), 10574 (вывод),
  10995 (сколько заработать), 11151 (анализ), 11385 (офферы).
  Порядок задан «бровками»: Nice to meet you → Got it → Halfway there →
  Noted → Almost there → Good to know → Last one.
*/
export const QUIZ = [
  {
    id: 'name',
    kind: 'input',
    title: "And who am I talking to?",
    placeholder: 'Your name...',
    closeIcon: true,          // на первом шаге крестик вместо стрелки
  },
  {
    id: 'hello',
    kind: 'statement',
    // {name} подставляется на лету
    title: "Nice to meet you, {name}! Let's find what fits you - takes about 60 seconds, and you'll start earning right away.",
  },
  {
    id: 'gender',
    kind: 'choice',
    title: "What's your gender?",
    options: ['Female', 'Male', 'Other'],
    cols: 3,
    divider: true,
    skip: true,
  },
  {
    id: 'age',
    kind: 'choice',
    eyebrow: 'Got it, {name}.',
    title: 'How old are you?',
    options: ['Under 18', '18–20', '21–29', '30–39', '40–49', '50+'],
    cols: 2,
    divider: true,
    skip: true,
  },
  {
    id: 'genre',
    kind: 'choice',
    eyebrow: 'Halfway there!',
    title: 'What kind of games do you enjoy most?',
    options: ['Puzzle', 'Three in a row', 'Strategy', "I'm not picky"],
    cols: 2,
    divider: true,
  },
  {
    id: 'frequency',
    kind: 'choice',
    eyebrow: 'Noted.',
    title: 'How often do you play mobile games?',
    options: ['Daily', 'Few times a week', 'Once a week', 'Less than once a week'],
    cols: 2,
    divider: true,
  },
  {
    id: 'purchases',
    kind: 'choice',
    eyebrow: 'Almost there',
    title: 'Have you made in-app purchases in mobile games in the last month?',
    options: ['Yes', 'No'],
    cols: 2,
    divider: true,
    skip: true,
  },
  {
    id: 'cashout',
    kind: 'choice',
    eyebrow: 'Good to know.',
    title: "What's your preferred way to cash out?",
    hint: "Don't worry, you can always change this later.",
    options: ['PayPal', 'Bank Transfer', 'Visa', 'Amazon'],
    cols: 2,
    divider: true,
    skip: true,
  },
  {
    id: 'target',
    kind: 'choice',
    eyebrow: 'Last one, {name}!',
    title: 'How much do you want to earn today?',
    options: ['40 zł', '70 zł', '100 zł', '200+ zł'],
    cols: 2,
    divider: true,
  },
]

// Офферы, которые открываются после опросника (Figma 293-11385)
export const UNLOCKED = [
  { id: 'disney', name: 'Disney solitaire', meta: '10-20 min per day', prize: '€2,180', cta: 'Play and Earn €2,180' },
  { id: 'dice', name: 'Dice dreams', meta: '40 min per day', prize: '€1,890', cta: 'Play and Earn €1,890' },
  { id: 'candy', name: 'Candy crush', meta: '30-50 min per day', prize: '€3,410', cta: 'Play and Earn €2,180' },
]
