# Research — мудборд и дискавери

Главный файл темы «откуда взялись решения в spec/build-brief». Сами требования и копирайт
не дублируются здесь — источник истины остаётся в `freecash-onboarding-prd.md`,
`freecash-onboarding-spec.md`, `freecash-onboarding-build-brief.md` (корень среды).

Источник: Figma-файл мудборда —
https://www.figma.com/design/fJgAaPHYv49oF8MK6uMmcU/Untitled (страница «Moodboard», node `0:1`).

---

## Структура мудборда

Одна страница, два типа контента:

- 15 фреймов с онбордингами сторонних приложений (референсы стиля/флоу) — страница «Moodboard» (`0:1`).
- Отдельная страница «Discovery» (`42:384`) → Section 1 (`42:385`) — реальные скриншоты
  текущего онбординга Freecash + стикеры с находками.
- Пустая страница «Screens» (`42:383`) — тот самый файл/нода, на который указал Said
  при выборе рабочего файла; целевое место для дизайн-системы и экранов.

## Дискавери ↔ PRD: сверено, расхождений нет

Все находки из стикеров в Section 1 уже дословно перенесены в
`freecash-onboarding-prd.md` (раздел 3, Problem statement). Ключевые:

- «New users are dropped into a black box for their entire first session...» → Problem #1.
- Стикер про Q7/Q8 (обещание "find the best offer to reach your 200+ zł goal" →
  на деле всегда один и тот же Disney Solitaire) → Problem #2, дословно.
- «Post-onboarding offer list artificially shows 1 offer...» → согласуется с R8.
- «Whole onboarding session takes 80–90 sec», «Generic ABCD questionnaire — functional
  but forgettable, no emotional investment», «No possible future earnings mentioned»,
  «The motivating moment is sequenced too late» — фоновый контекст, не противоречат PRD.

Тезис-стикер, задающий направление всего редизайна (автор — Said Isaev):

> The onboarding doesn't feel friendly, doesn't feel gamified enough. I think it can be
> improved to bring more emotions to the onboarding, introduce user to the product and
> bring more emotions at the same time.

Вывод: PRD/spec/build-brief точно отражают дискавери — можно опираться на все три
документа без повторной сверки с мудбордом.

## Паттерны, выведенные из референсов

Референсы делятся на два кластера. Freecash концептуально попадает в первый —
это само по себе аргумент в пользу решений, уже принятых в spec/build-brief
(не просто вкусовщина, а совпадение с работающими аналогами):

- **Кластер А — квиз → ценность → потом ask** (Cal AI, Duolingo, stoic., Gentler Streak,
  How We Feel, Ahead).
- **Кластер B — utility/business, ask сразу** (Slack, Shopify, Cash App, TikTok,
  Withings Health Mate, Shop, Arc Search, Any Distance) — не релевантен для Freecash.

| # | Паттерн | Источник (node) | Где уже отражено у нас |
|---|---|---|---|
| 1 | Непрерывный прогресс (тонкая полоса, наполняется на каждый ответ, не сбрасывается по экранам) — не точки | Duolingo `37:109`, stoic. `38:296`, Cal AI `37:2` | Progress bar + Earnings Meter, build-brief §3.B/C |
| 2 | Маскот-голос: представляется по имени → сразу спрашивает имя пользователя → держит голос до конца флоу | Gentler Streak `38:358` («...and who are you?»), Duolingo `37:109`, Ahead `38:376` | Coin Voice, spec.md §1 + build-brief §3.A |
| 3 | Trust cold-open без единого ask на первом экране, дальше — стек verified-стата (иконка+число+подпись) | Ahead `38:376` | Screen 0 + Stat block, build-brief §5/§3.F |
| 4 | Реальная, а не декоративная расплата за квиз — план/оффер должен явно опираться на ответы | Cal AI `37:2` (генерирует персональный план с цифрами) | Бенчмарк для Screen 14 Matched Offers — если офферы не персонализируются по-настоящему, это будет заметно на фоне такого уровня референсов |
| 5 | Reward-ready экран перед хардовым коммитом (оплата/аккаунт) | Cal AI `37:2`, stoic. `38:296` | Screen 12 Reward Unlocked |
| 6 | Микро-жест как инвестиция перед стартом (нарисовать галочку — «я обещаю себе») | Ahead `38:376` | Не в текущем build-brief — потенциальное усиление, не обязательное |

## Открытый вопрос

Паттерн 4 (реальная персонализация) — самое слабое место R8 без данных бэкенда
(см. PRD §8, п.4: matching logic depth). Если backend не потянет честный матчинг к
дедлайну кейс-стади, держать fallback-копию из build-brief Screen 14
(«Your starter offer, {name}» вместо «Picked for your goal») — иначе на фоне Cal AI-уровня
референсов разрыв между обещанием и фактом будет так же заметен, как у оригинального Freecash.
