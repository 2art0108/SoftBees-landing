# Missing Blog/News/Event Posts — Migration Package

Source: `ui_kits/website` (Website UI kit), default Ukrainian locale (`data.js` + `details.js`). All 11 posts below are card + detail-page content, extracted verbatim (no rewriting/summarizing).

Shared elements on every post detail page (structure, not repeated per post below except where content differs):
- **Breadcrumb (`crumb`):** `Блог`
- **Hero:** `h1` (title) → `lede` (intro paragraph, larger/lighter than body)
- **Body structure order:** hero image (with optional caption paragraph in muted small text) → paragraphs → `<h2>` section headings → paragraphs / `feature-rows` (icon-bullet label+value rows) / `chip-cloud` (pill list) / `blockquote.pull-quote` (+ small attribution line) → closing hashtag line (`.85rem`, muted color, `#Tag #Tag …`)
- Card face shows: category+date tag (kicker), title, one-line subtitle (`body` field truncated on card), and either a small icon image or a full image thumbnail.

---

## Full Blog/News/Events order (32 posts total, newest → oldest)

The destination project must reproduce this exact sequence. Existing posts are unmarked; the 11 posts to migrate are marked **[MISSING]** with their position.

1. Зустріч з Послом України у Швейцарії: новий етап технологічного діалогу (News · 24.08.2026)
2. SoftBees — у ТОП-10 фінтех-стартапів TechEmbassy FinTech Season 2026 (News · 18.07.2026)
3. AI-native — це не про AI (Insights · 15.07.2026)
4. SoftBees на Swiss FinTech Week (Events · 19.06.2026)
5. **[MISSING] Money20/20 Europe 2026: чому «люди обирають людей»** (Events · 05.06.2026)
6. **[MISSING] Менторство як драйвер інновацій: як SoftBees допоміг стартапу Briefix** (Insights · 13.05.2026)
7. SoftBees на MWC Barcelona & 4YFN (Events · 12.03.2026)
8. Forbes: український фінтех підкорює Нігерію (News · 02.02.2026)
9. Чому ISO 27001 — маст-хев для фінтеху у 2026 році (Insights · 30.01.2026)
10. SoftBees на WEF 2026 (Events · 16.01.2026)
11. SoftBees на Web Summit 2025 (Events · 05.12.2025)
12. SoftBees на Slush 2025 (Events · 18.11.2025)
13. 5000 кілометрів — не перешкода для fintech: SoftBees × straitPay (Projects · 13.11.2025)
14. **[MISSING] IT Arena 2025: SoftBees у центрі найбільшого tech-експо Львова** (Events · 30.09.2025)
15. **[MISSING] CEO SoftBees Тетяна Дашевська — в ТОП-50 найвпливовіших жінок фінтеху 2025** (News · 02.09.2025)
16. **[MISSING] Як український фінтех став обличчям Web Summit** (Insights · 27.08.2025)
17. Шлях до сертифікації ISO 27001 (Security · 14.07.2025)
18. SoftBees знову офіційний спонсор Money20/20 Europe (Events · 19.05.2025)
19. **[MISSING] CEO SoftBees долучилась до FinTech-комітету IT Ukraine Association** (News · 21.03.2025)
20. SoftBees на Ukrainian Resilience Business Forum 2025 (Events · 03.03.2025)
21. SoftBees на Web Summit Qatar 2025 (Events · 17.02.2025)
22. SoftBees на «DIGITAL CODE: Successful Cases – 2025» (Events · 12.02.2025)
23. SoftBees на World Economic Forum 2025, Давос (Events · 23.01.2025)
24. **[MISSING] SoftBees — у ТОП-6 найперспективніших українських FinTech стартапів** (News · 20.12.2024)
25. SoftBees на Web Summit 2024, Лісабон (Events · 08.11.2024)
26. SoftBees на Valencia Digital Summit 2024 (Events · 17.10.2024)
27. **[MISSING] CEO SoftBees — фіналістка Digital Transformation Leader of the Year Award 2024** (News · 27.08.2024)
28. **[MISSING] Зустрічайте наш перший проєкт для ASVIO BANK — ASVIO Business App** (Projects · 27.06.2024)
29. SoftBees на Nexus 2050, Люксембург (Events · 20.06.2024)
30. **[MISSING] SoftBees — офіційний спонсор Money20/20 Europe 2024** (Events · 22.05.2024)
31. SoftBees на «Digitalization Banking: The Next Stage – 2024» (Events · 18.04.2024)
32. **[MISSING] SoftBees на Money Motion 2024, Загреб** (Events · 19.03.2024)

---

## 1. Money20/20 Europe 2026: чому «люди обирають людей»
**Position in feed:** #5 of 32 — directly below "SoftBees на Swiss FinTech Week" (#4), directly above "Менторство як драйвер інновацій: Briefix" (#6)

- **Type:** Event
- **Slug:** `money2020-2026`
- **Card title:** Money20/20 Europe 2026: чому «люди обирають людей»
- **Card subtitle:** SoftBees обрали одним із семи стартапів у світі для виступу на закритій Start-Up Media Panel Session в Амстердамі — на ювілейному, десятому Money20/20 Europe.
- **Card tag/date:** Events · 05.06.2026
- **Card image:** `img/media_collage.jpg` (full image card, not icon)

### Detail page
- **Breadcrumb:** Блог
- **H1:** Money20/20 Europe 2026: чому «люди обирають людей»
- **Lede:** SoftBees обрали одним із семи стартапів у світі для виступу на закритій Start-Up Media Panel Session в Амстердамі — на ювілейному, десятому Money20/20 Europe.
- **Hero image:** `img/media_collage.jpg`, alt "SoftBees у медіа", rounded 16px, margin-bottom 24px (no caption)
- **Paragraph:** Money20/20 Europe відсвяткував 10-річчя: понад 7 500 учасників з більш ніж 105 країн, понад 450 спікерів на шести сценах. З сотень заявок організатори обрали лише сім стартапів для Start-Up Media Session — SoftBees представляла Тетяна Дашевська, CEO та співзасновниця компанії, поруч із командами Aviel Intelligence, Fraudio, Vouchsafe, SAPI та Serene.
- **H2:** Головна теза виступу
  - Виступ Тетяни базувався на практичному досвіді команди: за останні три роки SoftBees реалізувала 7 складних fintech-продуктів на абсолютно різних ринках — в Україні, ЄС та Африці. Головний висновок цього шляху вона сформулювала так: універсальної цифрової банківської платформи не існує в принципі. Кожен ринок має власну «ДНК» — інше регулювання, іншу платіжну інфраструктуру, іншу поведінку клієнтів. Тому швидкість і здатність адаптуватися між ринками стали, за її словами, єдиною справжньою валютою сучасної фінансової системи.
- **H2:** Перевикористовувані модулі та AI-native підхід
  - Щоб розв'язати цю проблему, SoftBees побудувала інфраструктуру на основі перевикористовуваних fintech-модулів у поєднанні з глибокою банківською експертизою команди. Це дозволяє фінансовим установам і необанкам, що масштабуються, збирати потрібну конфігурацію платформи — від клієнтських застосунків до онбордингу й комплаєнс-механізмів — як конструктор, замість багаторічної розробки з нуля. Паралельно компанія трансформується в AI-native — вбудовує AI у власні інженерні процеси, щоб іще сильніше скоротити час виходу продукту на ринок.
- **H2:** «Люди обирають людей»
  - Завершуючи виступ, Тетяна наголосила, що за будь-якою технологією стоять люди — і подякувала команді, клієнтам та інвесторам, які повірили в компанію на етапах масштабування.
  - **Pull-quote:** Технології важливі. AI важливий. Але зрештою люди обирають людей. І інвестори інвестують у людей.
  - Виступ завершився зверненням до Збройних сил України — подякою за можливість українським технологічним компаніям продовжувати працювати, зберігати робочі місця та представляти українські інновації на глобальній сцені. Цей момент отримав глибокий, щирий відгук європейської аудиторії.
- **H2:** Що далі
  - Виступ на Money20/20 Europe започаткував нову хвилю стратегічних розмов SoftBees з європейськими корпоративними клієнтами та венчурними фондами щодо модульних рішень компанії та подальшого глобального масштабування.
- **No closing hashtag line on this post.**

---

## 2. Менторство як драйвер інновацій: як SoftBees допоміг стартапу Briefix
**Position in feed:** #6 of 32 — directly below "Money20/20 Europe 2026" (#5), directly above "SoftBees на MWC Barcelona & 4YFN" (#7)

- **Type:** Blog / Insights
- **Slug:** `briefix-mentorship-2026`
- **Card title:** Менторство як драйвер інновацій: як SoftBees допоміг стартапу Briefix
- **Card subtitle:** У межах програми стажування PERSH1 від YEP Accelerator ми вийшли за межі класичної розробки й спробували себе в ролі менторів.
- **Card tag/date:** Insights · 13.05.2026
- **Card icon:** `icon_lightbulb`

### Detail page
- **Breadcrumb:** Блог
- **H1:** Менторство як драйвер інновацій: як SoftBees допоміг стартапу Briefix
- **Lede:** (same as card subtitle) У межах програми стажування PERSH1 від YEP Accelerator ми вийшли за межі класичної розробки й спробували себе в ролі менторів.
- **Hero image:** `icon_lightbulb.png`, alt = post title, rounded 16px, margin-bottom 8px, no caption
- **Paragraph:** Успіх стартапу залежить не лише від чистоти коду, а й від здатності продукту виживати в умовах жорстких бізнес-обмежень. Часто молодим командам бракує не технічних навичок, а «продуктового зору» — розуміння того, як AI-технологія перетворюється на інструмент, за який клієнт готовий платити. Нашим партнером у цьому експерименті став стартап Briefix.
- **H2:** Три кити менторства
  - **Feature-rows list (icon-bullet label + value):**
    - Прямий діалог — Регулярні сесії з нашими профільними фахівцями Sales, Marketing, Product — кожне питання заохочувалося.
    - Бізнес-контекст — Ми вчили команду не просто «кодити», а розуміти, як технологія впливає на бізнес-рішення.
    - Жорсткі дедлайни — Реальний світ не чекає — швидкість і вимірний результат були пріоритетом.
- **H2:** Результат: два робочі AI-інструменти
  - **Feature-rows list:**
    - AI HR Assistant — Сканує публічні Telegram-канали, аналізує резюме та миттєво ідентифікує топ-кандидатів за заданими критеріями.
    - AI Research System — Картографує конкурентів, відстежує популярні продуктові фічі та допомагає приймати рішення на основі даних, а не інтуїції.
  - **Pull-quote:** AI-агенти для малого та середнього бізнесу — це майбутнє, і ми були раді підтримати розвиток стартапу, який спеціалізується саме на цьому.
  - **Attribution (small text, .85rem):** — Тетяна Дашевська, CEO SoftBees
- **H2:** Чесність як рідкісний ресурс
  - У SoftBees ми віримо, що менторство — це не лише похвала, а й вказівка на слабкі місця. Ми відкрито говорили про те, як працюють продажі, чому деякі ідеї не «злітають» і як складно масштабувати AI-рішення за межі пілотного проєкту. Ця «радикальна чесність» допомогла Briefix не просто створити інструменти, а зрозуміти саму психологію стартап-життя.
  - Для нас менторство Briefix стало підтвердженням того, що модульний підхід, який ми сповідуємо у власній SaaS-платформі, працює і в навчанні: дайте талановитим людям правильну інфраструктуру, знання та свободу дій — і вони створять продукт, що вражає.
- **Closing hashtag line:** #SoftBees #Briefix #Mentorship #YEPAccelerator #AI #Innovation

---

## 3. IT Arena 2025: SoftBees у центрі найбільшого tech-експо Львова
**Position in feed:** #14 of 32 — directly below "5000 кілометрів — не перешкода для fintech: SoftBees × straitPay" (#13), directly above "CEO SoftBees Тетяна Дашевська — в ТОП-50" (#15)

- **Type:** Event
- **Slug:** `it-arena-2025`
- **Card title:** IT Arena 2025: SoftBees у центрі найбільшого tech-експо Львова
- **Card subtitle:** 6000+ учасників, стенд у центрі Startup Expo, нові партнерства й інтерес до платформи для фінансових компаній Європи та Африки.
- **Card tag/date:** Events · 30.09.2025
- **Card icon:** `icon_building`

### Detail page
- **Breadcrumb:** Блог
- **H1:** IT Arena 2025: SoftBees у центрі найбільшого tech-експо Львова
- **Lede:** (same as card subtitle)
- **Hero image:** `media_collage.jpg`, alt = post title, rounded 16px, margin-bottom 8px, no caption
- **Paragraphs (no section headings, plain body):**
  1. IT Arena 2025 (25–28 вересня, Львів) завершилась, і для SoftBees це були три дні інновацій та нових знайомств. Наш стенд у центрі Startup Expo став майданчиком зустрічей з фінтех-експертами з Європи — ми поділилися планами розвитку та інтересом до нашого рішення.
  2. Ми вже вкотре не втомлюємось дивуватися стійкому інтересу до платформи, яку вибудовуємо саме зараз, коли фінансові компанії все більше потребують швидких і безпечних рішень.
  3. Разом з IT Arena 2025 ми відзначили ще одну важливу віху — команда SoftBees продовжує зростати з кожним роком.
- **Closing hashtag line:** #SoftBees #ITArena #FinTech #StartupExpo #Networking

---

## 4. CEO SoftBees Тетяна Дашевська — в ТОП-50 найвпливовіших жінок фінтеху 2025
**Position in feed:** #15 of 32 — directly below "IT Arena 2025" (#14), directly above "Як український фінтех став обличчям Web Summit" (#16)

- **Type:** News
- **Slug:** `top50-women-fintech-2025`
- **Card title:** CEO SoftBees Тетяна Дашевська — в ТОП-50 найвпливовіших жінок фінтеху 2025
- **Card subtitle:** Тетяна стоїть у витоків фінтеху України і вже понад 20 років формує майбутнє фінансових технологій.
- **Card tag/date:** News · 02.09.2025
- **Card icon:** `icon_award`

### Detail page
- **Breadcrumb:** Блог
- **H1:** CEO SoftBees Тетяна Дашевська — в ТОП-50 найвпливовіших жінок фінтеху 2025
- **Lede:** (same as card subtitle)
- **Hero image:** `media_collage.jpg`, alt = post title, rounded 16px, margin-bottom 8px, no caption
- **Paragraph:** Ми пишаємось! Наша CEO Тетяна Дашевська увійшла до ТОП-50 найвпливовіших жінок фінтеху 2025. Її сміливість, стратегічне бачення та віра в інновації дозволяють команді SoftBees щодня будувати продукти, що змінюють банківську індустрію.
- **Pull-quote:** Це визнання — не лише моє особисте досягнення, а й результат щоденної ефективної праці нашої команди, і я вдячна кожному за внесок та професіоналізм.
- **Attribution (.85rem):** — Тетяна Дашевська, CEO SoftBees
- **Paragraph:** За три роки Тетяна реалізувала п'ять цифрових банківських застосунків для трьох українських банків та запустила SaaS-рішення Fintech-as-a-Service для Європи. Вона представляє Україну на Web Summit, Money20/20, Nexus2050, Valencia Digital Summit — і є членкинею FinTech-комітету IT Ukraine, LUCC, WomenTech, Women in Davos.
- **Closing hashtag line:** #SoftBees #FinTech #Leadership #WomenInFinTech #Top50

---

## 5. Як український фінтех став обличчям Web Summit
**Position in feed:** #16 of 32 — directly below "CEO SoftBees Тетяна Дашевська — в ТОП-50" (#15), directly above "Шлях до сертифікації ISO 27001" (#17)

- **Type:** Blog / Insights
- **Slug:** `web-summit-viral-photo-2025`
- **Card title:** Як український фінтех став обличчям Web Summit
- **Card subtitle:** Кадр, зроблений на стенді SoftBees на Web Summit 2024, через пів року став обличчям глобальної рекламної кампанії Web Summit 2025 — і зібрав мільйони переглядів.
- **Card tag/date:** Insights · 27.08.2025
- **Card icon:** `icon_camera`

### Detail page
- **Breadcrumb:** Блог
- **H1:** Як український фінтех став обличчям Web Summit
- **Lede:** (same as card subtitle)
- **Hero image:** `icon_camera.png`, alt = post title, rounded 16px, margin-bottom 8px, no caption
- **Paragraph:** Уявіть: ви занурені у свої проєкти, плануєте нові запуски, і раптом телефон розривається від повідомлень з усього світу: «Таня, ми бачили тебе і команду SoftBees у рекламі Web Summit!» Німеччина, Польща, Ірландія, Валенсія — географія вражала.
- **Pull-quote:** Чесно кажучи, тоді, у Лісабоні, я й не думала, що один знімок так «пролетить» планетою.
- **Attribution (.85rem):** — Тетяна Дашевська, CEO SoftBees
- **H2:** Стратегія максимум: чотири заявки замість однієї
  - Коли компанія вперше подавалася на Web Summit у 2024 році, план був прагматичним — отримати стенд і зустрітися з потенційними клієнтами. Але атмосфера великих можливостей надихнула команду податися одразу на чотири активності: Mentor Hours, PITCH, Startup Showcase та 40 Words. За два тижні до саміту прийшла новина — SoftBees пройшли у Startup Showcase.
- **H2:** 30 дублів заради 60 секунд
  - Шлях до сцени розпочався зі створення 60-секундного відео-заявки, до якого команда підійшла як до запуску нового продукту: сценарій, відточене формулювання, кожна секунда працює на результат. Далі — підготовка до 2-хвилинного виступу на сцені: без слайдів, без суфлера, без права на помилку. Компанія залучила професійного консультанта з пітчингу, і разом вони відрепетирували виступ до найдрібніших деталей.
- **H2:** Єдиний стартап зі Східної Європи
  - Кульмінацією стала участь у Startup Showcase в межах престижної секції The Future of Money — SoftBees стала єдиним стартапом зі Східної Європи в цій програмі. На стенді бренд компанії теж привертав увагу: брендовані футболки з українським орнаментом зафіксував навіть офіційний фотограф Web Summit. Саме ці кадри згодом розійшлися світом.
- **H2:** Неочікуваний бонус — Катар
  - Одразу після Лісабона компанії запропонували вигідні умови участі у Web Summit 2025, а згодом — і безкоштовний стенд на Web Summit у Катарі. Абсолютно неочікувана, але надзвичайно приємна можливість.
- **H2:** Лайфхаки для майбутніх учасників
  - **Chip-cloud (pill list):** Максимальна залученість CEO · Сценарій, а не імпровізація · Репетиція — ключ до впевненості · Універсальний пакет матеріалів · Продуманий нетворкінг · Візуальна айдентика
  - **Pull-quote:** Журі завжди відчуває, коли ви підходите до подачі формально, а коли — вкладаєте сенс у кожне слово.
  - **Attribution (.85rem):** — Тетяна Дашевська, CEO SoftBees
- **Closing hashtag line:** #SoftBees #WebSummit #TheFutureOfMoney #StartupShowcase #UkrainianTech

---

## 6. CEO SoftBees долучилась до FinTech-комітету IT Ukraine Association
**Position in feed:** #19 of 32 — directly below "SoftBees знову офіційний спонсор Money20/20 Europe" (#18), directly above "SoftBees на Ukrainian Resilience Business Forum 2025" (#20)

- **Type:** News
- **Slug:** `fintech-committee-join-2025`
- **Card title:** CEO SoftBees долучилась до FinTech-комітету IT Ukraine Association
- **Card subtitle:** Тетяна Дашевська офіційно приєдналась до FinTech-комітету IT Ukraine Association — команди, що працює над розвитком фінансових технологій в Україні.
- **Card tag/date:** News · 21.03.2025
- **Card icon:** `icon_flag`

### Detail page
- **Breadcrumb:** Блог
- **H1:** CEO SoftBees долучилась до FinTech-комітету IT Ukraine Association
- **Lede:** (same as card subtitle)
- **Hero image:** `media_collage.jpg`, alt = post title, rounded 16px, margin-bottom 8px, no caption
- **Paragraph:** З 13.03.2025 Тетяна Дашевська, CEO та співзасновниця SoftBees, стала частиною команди FinTech-комітету IT Ukraine Association, яка працюватиме над розвитком фінансових технологій в Україні та сприятиме впровадженню інновацій у галузі.
- **Paragraph:** Ми щасливі усвідомлювати, що її експертиза та досвід приноситимуть користь не лише SoftBees, а й усьому українському FinTech-сектору.
- **Closing hashtag line:** #SoftBees #FinTech #ITUkraine #Innovation #Leadership #DigitalBanking

---

## 7. SoftBees — у ТОП-6 найперспективніших українських FinTech стартапів
**Position in feed:** #24 of 32 — directly below "SoftBees на World Economic Forum 2025, Давос" (#23), directly above "SoftBees на Web Summit 2024, Лісабон" (#25)

- **Type:** News
- **Slug:** `top6-ukrainian-fintech-2024`
- **Card title:** SoftBees — у ТОП-6 найперспективніших українських FinTech стартапів
- **Card subtitle:** Компанія увійшла до Ukrainian FinTech Industry Navigator, створеного IT Ukraine Association.
- **Card tag/date:** News · 20.12.2024
- **Card icon:** `icon_trophy2`

### Detail page
- **Breadcrumb:** Блог
- **H1:** SoftBees — у ТОП-6 найперспективніших українських FinTech стартапів
- **Lede:** (same as card subtitle)
- **Hero image:** `media_collage.jpg`, alt = post title, rounded 16px, margin-bottom 8px, no caption
- **Paragraph:** Приємна новина для SoftBees Dev та наших партнерів наприкінці року! Компанія SoftBees увійшла до Ukrainian FinTech Industry Navigator, створеного IT Ukraine Association, та отримала визнання як один з ТОП-6 найперспективніших українських FinTech стартапів.
- **Paragraph:** Дякуємо нашій команді за неймовірну відданість, клієнтам і партнерам — за довіру та підтримку, а також журі — за високу оцінку нашої роботи.
- **Closing hashtag line:** #SoftBees #FinTech #Innovation #UkrainianFinTech #Growth #ITU

---

## 8. CEO SoftBees — фіналістка Digital Transformation Leader of the Year Award 2024
**Position in feed:** #27 of 32 — directly below "SoftBees на Valencia Digital Summit 2024" (#26), directly above "Зустрічайте наш перший проєкт для ASVIO BANK" (#28)

- **Type:** News
- **Slug:** `digital-transformation-leader-2024`
- **Card title:** CEO SoftBees — фіналістка Digital Transformation Leader of the Year Award 2024
- **Card subtitle:** Тетяна Дашевська стала фіналісткою премії Digital Transformation Leader 2024 від WomenTech Network — визнання роботи всієї команди.
- **Card tag/date:** News · 27.08.2024
- **Card icon:** `icon_award`

### Detail page
- **Breadcrumb:** Блог
- **H1:** CEO SoftBees — фіналістка Digital Transformation Leader of the Year Award 2024
- **Lede:** (same as card subtitle)
- **Hero image:** `media_collage.jpg`, alt = post title, rounded 16px, margin-bottom 8px, no caption
- **Paragraph:** Чудові новини! Наша CEO Тетяна Дашевська стала фіналісткою премії Digital Transformation Leader 2024 від WomenTech Network — у межах Global Diversity Awards.
- **Paragraph:** Це визнання роботи всієї команди, яка щодня допомагає банкам впроваджувати інновації й будувати цифрові рішення. Такі досягнення важливі для України та для того, щоб дати світу побачити наш банківський прогрес.
- **Closing hashtag line:** #SoftBees #DigitalTransformationLeader #WomenTechNetwork #FinTech

---

## 9. Зустрічайте наш перший проєкт для ASVIO BANK — ASVIO Business App
**Position in feed:** #28 of 32 — directly below "CEO SoftBees — фіналістка Digital Transformation Leader" (#27), directly above "SoftBees на Nexus 2050, Люксембург" (#29)

- **Type:** Project
- **Slug:** `asvio-business-launch-2024`
- **Card title:** Зустрічайте наш перший проєкт для ASVIO BANK — ASVIO Business App
- **Card subtitle:** Шість місяців роботи — і результат: mobile-first інтернет-банкінг для бізнесу та веб-версія для бухгалтерів.
- **Card tag/date:** Projects · 27.06.2024
- **Card image:** `img/asvio_solo.jpg` (full image card)

### Detail page
- **Breadcrumb:** Блог
- **H1:** Зустрічайте наш перший проєкт для ASVIO BANK — ASVIO Business App
- **Lede:** (same as card subtitle)
- **Hero image:** `asvio_solo.jpg`, alt "ASVIO Business", rounded 16px, margin-bottom 8px, no caption
- **Paragraph:** Шість місяців роботи — і результат: ASVIO Business, mobile-first інтернет-банкінг для бізнесу з інтуїтивним інтерфейсом, а також веб-версія для бухгалтерів і довірених осіб.
- **H2:** Що вже доступно
  - **Chip-cloud (pill list):** Реєстрація ФОП за 3 хвилини через «Дію» · Виписка за рахунком у два кліки · Створення платежів і робота з шаблонами · Груповий підпис документів · Однаковий функціонал у застосунку й у браузері · Керування доступами та КЕП для співробітників
- **Paragraph:** Завантажуйте ASVIO Business в App Store та Google Play.
- **Closing hashtag line:** #SoftBees #ASVIOBusiness #Fintech #DigitalBanking

---

## 10. SoftBees — офіційний спонсор Money20/20 Europe 2024
**Position in feed:** #30 of 32 — directly below "SoftBees на Nexus 2050, Люксембург" (#29), directly above "SoftBees на «Digitalization Banking: The Next Stage – 2024»" (#31)

- **Type:** Event
- **Slug:** `money2020-europe-2024`
- **Card title:** SoftBees — офіційний спонсор Money20/20 Europe 2024
- **Card subtitle:** 4–6 червня, Амстердам — перша поява SoftBees на головній фінтех-сцені Європи, стенд SH29.
- **Card tag/date:** Events · 22.05.2024
- **Card icon:** `icon_calendar`

### Detail page
- **Breadcrumb:** Блог
- **H1:** SoftBees — офіційний спонсор Money20/20 Europe 2024
- **Lede:** (same as card subtitle)
- **Hero image:** `media_collage.jpg`, alt = post title, rounded 16px, margin-bottom 8px, no caption
- **Paragraph:** SoftBees — інноваційна компанія, що розробляє ПЗ та надає IT-послуги для необанків і фінтех-компаній. Ми — спонсор Money2020 Europe 2024, провідної платформи для спілкування та співпраці у сфері платежів і фінансових послуг.
- **H2:** Де нас знайти
  - Відвідайте наш стенд SH29 у зоні стартапів на Money2020 Europe 2024. Поспілкуйтеся з нашою CEO Тетяною Дашевською.
- **Closing hashtag line:** #SoftBees #Money2020

---

## 11. SoftBees на Money Motion 2024, Загреб
**Position in feed:** #32 of 32 — the last/oldest post in the feed, directly below "SoftBees на «Digitalization Banking: The Next Stage – 2024»" (#31)

- **Type:** Event
- **Slug:** `money-motion-2024`
- **Card title:** SoftBees на Money Motion 2024, Загреб
- **Card subtitle:** 21–22 березня SoftBees, ваш надійний партнер у створенні інноваційних банківських додатків, взяв участь у конференції Money Motion.
- **Card tag/date:** Events · 19.03.2024
- **Card icon:** `icon_calendar`

### Detail page
- **Breadcrumb:** Блог
- **H1:** SoftBees на Money Motion 2024, Загреб
- **Lede:** (same as card subtitle)
- **Hero image:** `media_collage.jpg`, alt = post title, rounded 16px, margin-bottom 8px, no caption
- **Paragraph:** SoftBees, ваш надійний партнер у створенні інноваційних банківських додатків, взяв участь у конференції Money Motion. Не можемо дочекатися возз'єднання одного з найбільш прогресивних ком'юніті, зустрічей з друзями та нових знайомств.
- **Paragraph:** 21–22 березня, Загреб.
- **Closing hashtag line:** #MoneyMotion2024 #SoftBees
