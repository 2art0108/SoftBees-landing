# SoftBees Home: current text vs manager version

**Current:** `SoftBees.dc.html` (Home view) + `softbees-data.js` + child DCs (`FinalCTA`, `FeaturedPost`, `PortfolioCard`, `Testimonial`)
**Manager:** `uploads/homepage-content-audit.md` (UA)
**Status:** Read-only comparison. Nothing changed.

Legend: ✅ exact match · ✏️ text differs · ❌ missing in current · ➕ extra in current (not in manager version)

---

## 0. Header (global)

| Element | Current | Manager | Status |
|---|---|---|---|
| Logo alt | SoftBees | SoftBees | ✅ |
| Nav 1–5 | Головна · Продукти · Портфоліо · Про компанію · Блог | same | ✅ |
| Language switch | UA · EN | UA · EN | ✅ |
| Header CTA | Замовити консультацію | Замовити консультацію | ✅ |

**Products dropdown.** All 8 titles match ✅. The dropdown uses number markers `01`–`08` plus icons, where the manager version uses letter markers (С, О, A…) ✏️. The descriptions come from the same data as the product cards (see section 2), so they have the same 7 differences.

---

## 1. Hero

| Element | Current | Manager | Status |
|---|---|---|---|
| Eyebrow | Партнер із запуску необанків | Партнер із запуску необанків | ✅ |
| H1 | Будуємо цифрові банки, якими користуються щодня *(line break after the comma)* | Будуємо цифрові банки, якими користуються щодня | ✅ |
| Subtitle | SoftBees — українська fintech-команда: банківська експертиза, власна платформа та AI-автоматизація, щоб фінансові компанії запускали цифрові продукти швидше, ніж будуючи все з нуля. | same | ✅ |
| Button 1 | Замовити консультацію | Замовити консультацію | ✅ |
| Button 2 | Переглянути портфоліо | Переглянути портфоліо | ✅ |
| Trust chips | — *(defined in code, not rendered)* | ISO 27001 · Diia.City resident · Money20/20 Europe 2026 · Web Summit 2024 & 2025 | ❌ |
| Hero image + alt | — *(animated background instead)* | `brand_hero.jpg`, alt "SoftBees — Neobank Launch Partner" | ❌ |
| Floating badge | — | 5 / необанків за 3 роки | ❌ |

---

## 2. Products

| Element | Current | Manager | Status |
|---|---|---|---|
| Eyebrow | Наша платформа | Наші продукти | ✏️ |
| H2 | Одна платформа, готові модулі | Готові рішення, а не розробка з нуля | ✏️ |
| Description | Кожен продукт — це модуль нашої SaaS/FaaS-платформи, який ми адаптуємо під ваш бренд і ринок, а не будуємо з нуля під кожне замовлення. | Кожен продукт — окреме готове рішення: онбординг, AI-агент, PayBees, SaaS-платформа. Ми впроваджуємо потрібне й адаптуємо під ваш бренд, ринок і комплаєнс — замість того, щоб будувати все з нуля під кожне замовлення. | ✏️ |
| Section button | Усі продукти | — | ➕ |
| Card link label (×8) | Дізнатись більше | Дізнатися більше | ✏️ *(«Дізнатись» vs «Дізнатися»)* |
| Card markers | 01–08 + icon | 1–8 | ✏️ |

**Cards.** All 8 titles match ✅.

| # | Current description | Manager description | Status |
|---|---|---|---|
| 1 | Ядро нашої екосистеми — Fintech-as-a-Service платформа з готовими модулями. | same | ✅ |
| 2 | Готовий **модуль** верифікації через Дію — вбудовується за дні, не місяці. | Готове **рішення для** верифікації через **«Дію»** — вбудовується за дні, не місяці. | ✏️ |
| 3 | Готовий AI-**модуль** для перевірки виписок і документів фінмоніторингу. | Готове AI-**рішення** для перевірки виписок і документів фінмоніторингу. | ✏️ |
| 4 | Той самий движок, ваш бренд — модуль застосунків нашої платформи. | Повнофункціональний мобільний і веб-банкінг під вашим брендом. | ✏️ *(fully different)* |
| 5 | Готовий **модуль** приймання платежів за IBAN на базі QR НБУ. | Готове **рішення для** приймання платежів за IBAN на базі QR НБУ. | ✏️ |
| 6 | Дизайн-система нашої платформи, адаптована під ваш бренд і комплаєнс. | Інтерфейси для фінансових продуктів: UX-дослідження, дизайн-система, прототип. | ✏️ *(fully different)* |
| 7 | Готові модулі онбордингу, комплаєнсу й платежів — без паперу та Excel. | Онбординг, комплаєнс і платежі в цифрі — без паперу та Excel. | ✏️ |
| 8 | Готові модулі нашої платформи, розгорнуті та кастомізовані під ваш бренд і ринок. | Готові рішення, розгорнуті та кастомізовані під ваш бренд, ліцензію та ринок. | ✏️ |

Main difference: the current copy frames products as **"модулі платформи"**; the manager version frames them as **"готові рішення"**.

---

## 3. Stats

| # | Current | Manager | Status |
|---|---|---|---|
| 1 | 5 — **Н**еобанків запущено за 3 роки | 5 — **н**еобанків запущено за 3 роки | ✏️ *(capitalization only)* |
| 2 | 27 — **Б**анківських та інженерних фахівців | 27 — **б**анківських та інженерних фахівців | ✏️ *(capitalization only)* |
| 3 | 20+ — **Р**оків банківського досвіду команди | 20+ — **р**оків банківського досвіду команди | ✏️ *(capitalization only)* |
| 4 | ISO 27001 — **С**ертифікація інформаційної безпеки | ISO 27001 — **с**ертифікація інформаційної безпеки | ✏️ *(capitalization only)* |

Both versions have no heading ✅.

---

## 4. Portfolio

| Element | Current | Manager | Status |
|---|---|---|---|
| Eyebrow | Портфоліо | Портфоліо | ✅ |
| H2 | Продукти, які вже працюють | Продукти, які вже працюють | ✅ |
| Description | — | — | ✅ |
| Button | Усі кейси *(header button + bottom arrow link)* | Усі кейси | ✅ *(the arrow link is an extra repeat ➕)* |
| Number of cards | 5 | 3 | ➕ 2 extra |
| Card link label | Дізнатися більше | Читати кейс | ✏️ |
| Card tags | Uppercase badges: domain · country · MOBILE | Plain tag: "Необанк · Нігерія" etc. | ✏️ |
| Card descriptions | — *(not shown)* | 1 per card | ❌ |

| # | Current title | Current badges | Manager title | Manager tag | Status |
|---|---|---|---|---|---|
| 1 | jejebank: запуск необанку в Нігерії | FINTECH · НІГЕРІЯ · MOBILE | jejebank: стратегічне партнерство із запуску необанку | Необанк · Нігерія | ✏️ title shortened |
| 2 | SaaS/FaaS-платформа для EMI на Кіпрі | EMI · КІПР · MOBILE | SaaS/FaaS-платформа для ліцензованої EMI на Кіпрі | EMI · Кіпр | ✏️ «ліцензованої» removed |
| 3 | MVP необанку для фізичних осіб за 3 місяці | FINTECH · УКРАЇНА · MOBILE | MVP необанку для фізичних осіб за 3 місяці | Необанк · Україна | ✅ title |
| 4 | ASVIO Business: цифрова платформа для банку під ключ | FINTECH · УКРАЇНА · MOBILE | — | — | ➕ |
| 5 | PayBees для LAD: сучасні платежі для ОСББ | ПЛАТЕЖІ · PROPTECH · MOBILE | — | — | ➕ |

Card descriptions missing from the current Home ❌:
1. SoftBees — стратегічний технічний партнер запуску jejebank у Нігерії: від розробки застосунку до участі в побудові core-системи.
2. Мультивалютні рахунки, транзакційний рушій, онбординг клієнтів, back office та звітність.
3. Мобільний банкінг для фізичних осіб: перекази, кілька карток на один рахунок, депозити й накопичення.

Two badge values are wrong on the current cards: every card is tagged MOBILE, including EMI (a platform) and PayBees (payments), and «Необанк» is relabelled FINTECH.

---

## 5. Testimonial

| Element | Current | Manager | Status |
|---|---|---|---|
| Quote | Вибір АСВІО Банку на користь SoftBees був продиктований потребою розробити застосунок у рекордні терміни — і SoftBees впорались із цим завданням. Особливо ми оцінили швидке перемикання між компаніями та інтуїтивний інтерфейс. | same | ✅ |
| Name | Дмитро Бондаренко | Дмитро Бондаренко | ✅ |
| Role | Член Правління, Керівник департаменту розвитку проєктів, АТ «АСВІО БАНК» | same | ✅ |

---

## 6. AI-native

| Element | Current | Manager | Status |
|---|---|---|---|
| Eyebrow | — | AI-native | ❌ |
| Badge | Insights | — | ➕ |
| H2 | Ми трансформуємось в AI-native компанію | same | ✅ |
| Description | Для нас це не про використання чат-ботів. AI-native — це про вміння керувати знаннями, процесами й відповідальністю так, щоб AI міг стати частиною системи, а не замінити її. Людина завжди приймає фінальне рішення. | same | ✅ |
| Button | Читати статтю | Читати про наш підхід | ✏️ |
| Button target | Blog post `#post/ai-native-transformation-2026` | Blog index | ✏️ |
| Image alt | Ми трансформуємось в AI-native компанію | AI-native starts not with AI | ✏️ |

---

## 7. Media

| Element | Current | Manager | Status |
|---|---|---|---|
| Eyebrow | Медіа | Медіа | ✅ |
| H2 | Про нас пишуть | Про нас пишуть | ✅ |
| Description | Forbes, Delano, Vector, FF News та профільні fintech-видання — про наші запуски, сцену Money20/20 і сертифікацію. | same | ✅ |
| Outlet chips | Forbes Ukraine · Delano / Paperjam · Vector · FF News · IT Ukraine · FinTechNews.ch *(looping ticker, list repeated)* | same 6 | ✅ |
| Button | Дивитися всі публікації | Дивитися всі публікації | ✅ |
| Images + alts | 3 images: "Vector про SoftBees" · "Forbes про SoftBees" · "Delano про SoftBees" | 1 collage: "Forbes, Delano, Vector" | ✏️ |

---

## 8. Final CTA band

| Element | Current | Manager | Status |
|---|---|---|---|
| Title | Готові прискорити запуск вашого банку? | same | ✅ |
| Description | Розкажіть, що плануєте будувати — підберемо модулі платформи та команду під ваш ринок. | same | ✅ |
| Button | Замовити консультацію | Замовити консультацію | ✅ |

---

## 9. Footer (global)

| Element | Current | Manager | Status |
|---|---|---|---|
| Logo alt | SoftBees | SoftBees | ✅ |
| Blurb | Партнер із запуску необанків. Технічна експертиза, власна платформа та AI-автоматизація для фінансових компаній. | same | ✅ |
| Column titles | Навігація · Продукти · Контакти | same | ✅ |
| Navigation links | Головна · Продукти · **Про компанію · Портфоліо** · Блог | Головна · Продукти · **Портфоліо · Про компанію** · Блог | ✏️ *(order)* |
| Product links | 8 titles | 8 titles | ✅ |
| Email | info@softbees.com | info@softbees.com | ✅ |
| Kyiv address | Київ, вул. Межигірська, 79А | **Україна,** Київ, вул. Межигірська, 79А | ✏️ |
| Warsaw address | — | Польща, Варшава, Szpitalna 8/6 | ❌ |
| LinkedIn | LinkedIn | LinkedIn | ✅ |
| Facebook | — | Facebook | ❌ |
| Bottom left | © 2026 SoftBees. Усі права захищені. | same | ✅ |
| Bottom right | Київ · Варшава | Київ · Варшава | ✅ |

---

## Summary

**Exact matches.** These sections match fully:
- Header nav and CTA
- Hero text: eyebrow, H1, subtitle and both buttons
- All 8 product titles, and product description #1
- Portfolio eyebrow, H2 and button
- Testimonial: quote, name and role
- AI-native H2 and description
- Media: eyebrow, H2, description, chips and button
- Final CTA: title, description and button
- Footer: blurb, column titles, product links, email, LinkedIn and bottom bar

**Text differences (✏️):**
1. Products section: eyebrow, H2 and description all differ.
2. Product descriptions #2–#8 differ. They also feed the header dropdown.
3. Product card link: «Дізнатись більше» → «Дізнатися більше».
4. Stats labels: current copy starts with a capital letter; the manager version uses lowercase.
5. Portfolio: case titles #1 and #2 are shortened. Tags are shown as uppercase badges. The link reads «Дізнатися більше» instead of «Читати кейс».
6. AI-native: the button reads «Читати статтю» instead of «Читати про наш підхід», it links to a post instead of the Blog index, and the image alt text differs.
7. Media: current has 3 images with their own alt texts; the manager version has 1 collage.
8. Footer: the order of Портфоліо and Про компанію is swapped, and the Kyiv address has no «Україна,».

**Missing in current (❌):**
1. Hero trust chips (4). They are defined in the code but not rendered.
2. Hero image with its alt text.
3. Hero floating badge «5 / необанків за 3 роки».
4. Portfolio card descriptions (3).
5. AI-native eyebrow «AI-native».
6. Footer: the Warsaw address and the Facebook link.

**Extra in current (➕):**
1. Products: an «Усі продукти» button.
2. Portfolio: 2 extra cards (ASVIO Business, PayBees для LAD), a repeated «Усі кейси» arrow link, and the MOBILE platform badge on every card.
3. AI-native: an «Insights» badge.
4. Header dropdown and product cards: number markers and icons.
