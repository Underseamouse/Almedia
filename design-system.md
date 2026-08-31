# Design system — токены и стили в Figma

Главный файл темы «что построено в Figma и откуда взялось». Сырые значения не дублируются
здесь — источник истины остаётся в `design-system/*.pdf`. Здесь фиксируется маппинг
PDF → Figma и решения, принятые там, где источники расходятся или молчат.

Построено в файле https://www.figma.com/design/fJgAaPHYv49oF8MK6uMmcU/Untitled,
страница **«Design System»** (новая, рядом с «Screens» — пустой страницей, на которую
изначально указал Said как рабочий файл).

## Что создано

**Variables → collection «Colors»** (mode «Value»), 131 primitive, нейминг по секциям
самого Colors.pdf: `Primary/Base`, `Primary/Main`, `Primary/Gray Blue`, `Primary/Error`,
`Primary/Warning`, `Primary/Information`, `Secondary/Light Yellow`, `Secondary/Orange`,
`Secondary/Fuchsia`, `Secondary/Blue`, `Secondary/Purple`, `Secondary/Gray`,
`Special/Gold`, `Special/Silver`, `Special/Bronze`, `Special/Overlay`. Scopes `[]`
(примитивы скрыты от пикеров — стандартная практика).

**Variables → collection «Semantic»** (mode «Dark»), 3 алиаса — единственные семантические
токены, выводимые напрямую из Elements.pdf:
- `surface/background` → `Primary/Gray Blue/900` (#141523)
- `surface/container` → `Primary/Gray Blue/500` (#252539)
- `surface/elevated-border` → `Primary/Gray Blue/200` (#525266)

**Text styles** — 44 шт., Poppins, `Heading 2xl…xs` × `Text xl…xs` × Regular/Medium/
SemiBold/Bold (точное написание — из `listAvailableFontsAsync`, не «Semibold»).
Line-height и letter-spacing (2%) — точные px-значения из Typographies.pdf, не проценты.

**Страница «Design System»**, 3 секции: Colors (свотчи всех переменных), Typography
(специмены всех 44 стилей), Elements (композиция фон+контейнер, ровно как в Elements.pdf,
с текстом-подписью из самого PDF).

## Расхождения и пробелы источников — зафиксированы, не молчат

1. **Elements.pdf вопреки описанию в CLAUDE.md не содержит компонентов и состояний** —
   только 2 токена поверхности (см. `surface/*` выше).
2. **Secondary/Gray в Colors.pdf побайтово дублирует Secondary/Blue** (и Primary/
   Information) — те же 11 hex-значений. Похоже на copy-paste в самом PDF, а не мою
   ошибку транскрипции. Сохранил как в источнике (следую данным дословно), но это
   стоит уточнить у самого Freecash перед сдачей — реальный серый пока не отличается
   от синего в системе.

## Шкалы roundness / spacing / size — измерены на freecash.com

`design-system/*.pdf` не описывает ни радиусы, ни отступы, ни высоты контролов.
Источник для них — **живой сайт freecash.com**, снятый через computed styles
(не оценка на глаз): 792 элемента, частотный анализ + точечный замер контролов.

Ключевая находка: у Freecash есть **своя именованная шкала радиусов**, видимая в
классах вёрстки — `rounded-01` = 4px, `rounded-02` = 8px, `rounded-07` = 32px,
`rounded-full`. Нейминг переменных в Figma повторяет её один в один.

- **Collection «Radius»**: `rounded/01…07` + `rounded/full`. Значения 01/02/07/full
  наблюдаются на сайте по имени класса; 03/04/05/06 — интерполяция шага (эти px
  встречаются на сайте как arbitrary-значения). У каждой переменной в description
  указано, наблюдение это или интерполяция.
- **Collection «Spacing»**: `spacing/1…12` — Tailwind-шкала с базой 4px,
  подтверждена классами `gap-1`=4px … `gap-8`=32px. Плюс `spacing/2-75` = 11px
  (реальный `py-2.75` у малой кнопки; точка в имени переменной Figma запрещена)
  и `spacing/5` = 20px (`px-5` — горизонтальный паддинг всех кнопок).
- **Collection «Size»**: `size/control-sm` 38, `control-md` 44, `control-lg` 48 —
  замеренные высоты Sign In / основного CTA / инпута. Плюс `size/icon-sm|md|lg`.

Тип-шкала из Typographies.pdf **подтвердилась сайтом**: 16px (447 элементов),
14px (219), 18/12/20/10/24/32/48 — ровно `Text lg/md/xl/sm/xs` и `Heading xs/sm/md/xl`.

## Исправления после сверки с сайтом

1. **Кнопки были пилюлями — это ошибка.** Реальный радиус кнопки — 8px
   (`rounded-02`). `rounded/full` остаётся только там, где он реально есть: беджи,
   активный таб, прогресс-бар, аватар.
2. **`text/on-primary` был привязан к чистому чёрному** — замер даёт `rgb(20,21,35)`
   = #141523, то есть `Primary/Gray Blue/900`. Исправлено.
3. **Фон инпута** — не `surface/container` (#252539), а #2F3043. Добавлен токен
   `surface/input` → `Primary/Gray Blue/400`.
4. **Добавлены** `action/secondary` (#525266 — реальная вторичная кнопка) и
   `border/subtle` (белый 10% — реальная рамка language-пилюли).
5. **Альфа-каналы из Colors.pdf были потеряны** в первом проходе: PDF явно пишет
   `(10%)` у шагов 25, `(80%)` у Gray Blue/Transparent и `60%` у Overlay, а я сохранил
   их непрозрачными. Исправлено, добавлены `Primary/Base/White 10%` и `Black 10%`,
   которые в PDF идут отдельными стилями.

## Аудит компонентов

Прогнан скриптовый аудит на несвязанные значения. Было **48 нарушений**
(25 паддингов, 12 gap, 6 заливок, 3 радиуса, 2 обводки) → стало **10**, и все
10 — намеренные брендовые цвета Apple/Google/Facebook, задокументированные в
description компонента.

Требования, которым теперь отвечает каждый компонент:
- заливки/обводки → переменные `Colors`/`Semantic`;
- радиусы → `rounded/*`, паддинги и gap → `spacing/*`, высоты → `size/*`;
- весь текст → текстовые стили из Typographies.pdf (ни одного локального шрифта);
- **респонсив**: подпись/текст внутри контрола — `FILL` с центрированием, контейнер —
  фиксированная высота из токена и `FILL`-ready ширина. Проверено на сайте: на 375px
  высота, радиус и паддинги кнопок не меняются — меняется только ширина.
  Длинный текст в Selector Card и Alert row переносится и растит высоту, а не обрезается;
- у каждого сета — description с источником значений.

## Страница «Components» — 16 компонентов, 77 вариантов

Таблица ниже — состояние после аудита (см. [audit.md](audit.md)). Коллекции токенов:
`Colors` (133), `Semantic` (20), `Rounded` (8), `Spacing` (10), `Size` (9), `Border` (3).

| Компонент | Варианты | Спека / источник |
|---|---|---|
| Button | Size×Style×State, 30 | h 38/44, radius 8, padding-x 20, gap 8. State: Default/Pressed/Focus/Disabled/Loading |
| Social Button | Provider×State, 12 | h 44, radius 8. Брендовые цвета — задокументированное отклонение |
| Input Field | State, 5 | h 48, radius 8, padding-x 16, фон #2F3043. Default/Filled/Focused/Disabled/Error |
| Selector Card | State, 4 | radius 12, текст переносится. Default/Selected/Focus/Disabled |
| Pill Selector | State, 4 | h 44, radius 8. Default/Selected/Focus/Disabled |
| Badge | Type, 3 | pill, hug по контенту. Streak/Balance/Rating |
| **Offer Card** | Type, 2 | build-brief §3.E. Guaranteed / Estimated, тип-шкала с freecash.com |
| **Earnings Meter** | State, 2 | build-brief §3.C / R5. Progress / Complete |
| **Coin Voice** | Mood, 2 | build-brief §3.A. Neutral / Celebrating |
| **Stat Block** | Tone, 2 | build-brief §3.F. Gold / Neutral |
| Progress Bar | Tone, 2 | h 8 (`size/track`), pill, FILL-ready |
| Tab Bar Item | State, 2 | active — pill-подложка |
| Avatar | Size, 3 | radius bound к `rounded/full` вместо px/2 |
| Loader | 1 | кольцо 48 (`size/loader`), stroke `border/ring` |
| Tooltip | 1 | radius 12, указатель внутри компонента |
| Alert Row | Severity, 2 | текст переносится, иконка сверху |

Жирным — компоненты, собранные по итогам аудита под требования build-brief.

Страницы «Design System» и «Components» переведены на тёмный фон
(`surface/background`) — компоненты и свотчи показаны в том контексте, в котором
реально работают, иначе состояния на 10%-альфе не читаются.

## Дальше

Готово к сборке экранов онбординга поверх этих компонентов и токенов.
