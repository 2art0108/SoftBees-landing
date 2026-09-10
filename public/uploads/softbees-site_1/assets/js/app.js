/* ================= helpers ================= */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const ARROW = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function ctaBand(title, body, i) {
  return `<section class="sect sect--tight"><div class="wrap"><div class="cta rv">
    <h2>${title}</h2><p>${body}</p>
    <a class="btn btn--primary btn--lg" data-nav="#contact" role="link" tabindex="0">Замовити консультацію ${ARROW}</a>
  </div></div></section>`;
}
function productCard(p, i) {
  return `<article class="card rv" style="--i:${i}">
    <span class="num">${p.n}</span>
    <h3>${p.title}</h3><p>${p.desc}</p>
    <span class="link-arrow">Дізнатися більше ${ARROW}</span>
    <a class="card-link" data-nav="#product/${p.slug}" role="link" tabindex="0" aria-label="${p.title}"></a>
  </article>`;
}
function caseCard(c, i) {
  return `<article class="card pcard rv" style="--i:${i}">
    <div class="media">${viz(c.kind, c.seed)}</div>
    <div class="body">
      <div class="meta"><span class="tag">${c.tag}</span></div>
      <h3>${c.title}</h3><p>${c.desc}</p>
      <span class="link-arrow">Читати кейс ${ARROW}</span>
    </div>
    <a class="card-link" data-nav="#case/${c.slug}" role="link" tabindex="0" aria-label="${c.title}"></a>
  </article>`;
}
function postCard(p, i) {
  return `<article class="card pcard rv" data-cat="${p.cat}" style="--i:${i}">
    <div class="media">${viz(p.kind, p.seed)}</div>
    <div class="body">
      <div class="meta"><span class="tag">${p.catLabel}</span><span>${p.date}</span></div>
      <h3>${p.title}</h3><p>${p.desc}</p>
      <span class="link-arrow">Читати ${ARROW}</span>
    </div>
    <a class="card-link" data-nav="#post/${p.slug}" role="link" tabindex="0" aria-label="${p.title}"></a>
  </article>`;
}
function crumbs(items) {
  return `<nav class="crumbs" aria-label="Хлібні крихти">` + items.map((it, i) =>
    (it.href ? `<a data-nav="${it.href}" role="link" tabindex="0">${it.label}</a>` : `<span>${it.label}</span>`) +
    (i < items.length - 1 ? '<span>/</span>' : '')).join('') + `</nav>`;
}

/* ================= pages ================= */
function pageHome() {
  return `
  <section class="hero">
    <div class="grid-lines"></div>
    <div class="aura" style="width:620px;height:620px;background:rgba(255,138,33,.30);top:-180px;left:-120px"></div>
    <div class="aura" style="width:560px;height:560px;background:rgba(129,99,255,.28);top:-60px;right:-160px"></div>
    <div class="wrap">
      <span class="eyebrow rv">Партнер із запуску необанків</span>
      <h1 class="rv" style="--i:1">Будуємо цифрові банки, якими <span class="grad-text">користуються щодня</span></h1>
      <p class="lede rv" style="--i:2">SoftBees — українська fintech-команда: банківська експертиза, власна платформа та AI-автоматизація, щоб фінансові компанії запускали цифрові продукти швидше, ніж будуючи все з нуля.</p>
      <div class="hero-actions rv" style="--i:3">
        <a class="btn btn--primary btn--lg" data-nav="#contact" role="link" tabindex="0">Замовити консультацію ${ARROW}</a>
        <a class="btn btn--lg" data-nav="#portfolio" role="link" tabindex="0">Переглянути портфоліо</a>
      </div>
      <div class="hero-trust chips rv" style="--i:4">
        ${["ISO 27001","Diia.City resident","Money20/20 Europe 2026","Web Summit 2024 & 2025"].map(c => `<span class="chip">${c}</span>`).join('')}
      </div>
      <div class="hero-visual rv" style="--i:5">
        <div class="hero-frame" id="heroFrame">
          <div class="scan"></div>
          <div class="console-bar">
            <span class="dots"><i></i><i></i><i></i></span>
            <span class="console-title">SoftBees Platform — модулі</span>
            <span class="console-live"><i></i>у продакшні</span>
          </div>
          <div class="modules">
            ${PRODUCTS.map(p => `<a class="module" data-nav="#product/${p.slug}" role="link" tabindex="0">
              <span class="n">${p.n}</span><b>${p.title}</b><small>модуль</small></a>`).join('')}
          </div>
        </div>
        <div class="stat-badge"><b>5</b><span>необанків за 3 роки</span></div>
      </div>
    </div>
  </section>

  <section class="sect">
    <div class="wrap">
      <div class="head-row">
        <div class="head-block rv">
          <span class="eyebrow">Наша платформа</span>
          <h2>Одна платформа, готові модулі</h2>
          <p class="lede">Кожен продукт — це модуль нашої SaaS/FaaS-платформи, який ми адаптуємо під ваш бренд і ринок, а не будуємо з нуля під кожне замовлення.</p>
        </div>
        <a class="btn rv" data-nav="#products" role="link" tabindex="0">Усі продукти ${ARROW}</a>
      </div>
      <div class="grid g-4">${PRODUCTS.map(productCard).join('')}</div>
    </div>
  </section>

  <section class="sect sect--tight">
    <div class="wrap"><div class="stats rv">
      <div class="item"><b>5</b><p>необанків запущено за 3 роки</p></div>
      <div class="item"><b>27</b><p>банківських та інженерних фахівців</p></div>
      <div class="item"><b>20+</b><p>років банківського досвіду команди</p></div>
      <div class="item"><b>ISO 27001</b><p>сертифікація інформаційної безпеки</p></div>
    </div></div>
  </section>

  <section class="sect">
    <div class="wrap">
      <div class="head-row">
        <div class="head-block rv">
          <span class="eyebrow">Портфоліо</span>
          <h2>Продукти, які вже працюють</h2>
        </div>
        <a class="btn rv" data-nav="#portfolio" role="link" tabindex="0">Усі кейси ${ARROW}</a>
      </div>
      <div class="grid g-3">${CASES.slice(0, 3).map(caseCard).join('')}</div>
    </div>
  </section>

  <section class="sect sect--tight">
    <div class="wrap"><div class="band-light rv">
      <p class="q">Вибір АСВІО Банку на користь SoftBees був продиктований потребою розробити застосунок у рекордні терміни — і SoftBees впорались із цим завданням. <span>Особливо ми оцінили швидке перемикання між компаніями та інтуїтивний інтерфейс.</span></p>
      <div class="who"><span class="av"></span><span><b>Дмитро Бондаренко</b><small>Член Правління, Керівник департаменту розвитку проєктів, АТ «АСВІО БАНК»</small></span></div>
    </div></div>
  </section>

  <section class="sect">
    <div class="wrap"><div class="split">
      <div class="rv">
        <span class="eyebrow">AI-native</span>
        <h2>Ми трансформуємось в AI-native компанію</h2>
        <p class="lede" style="margin-top:22px">Для нас це не про використання чат-ботів. AI-native — це про вміння керувати знаннями, процесами й відповідальністю так, щоб AI міг стати частиною системи, а не замінити її. Людина завжди приймає фінальне рішення.</p>
        <a class="btn" data-nav="#blog" role="link" tabindex="0" style="margin-top:32px">Читати про наш підхід ${ARROW}</a>
      </div>
      <div class="media-frame rv" style="--i:1">${viz('flow', 2)}</div>
    </div></div>
  </section>

  ${ctaBand('Готові прискорити запуск вашого банку?', 'Розкажіть, що плануєте будувати — підберемо модулі платформи та команду під ваш ринок.')}
  `;
}

function pageProducts() {
  return `
  <section class="phero">
    <div class="grid-lines"></div>
    <div class="aura" style="width:520px;height:520px;background:rgba(255,138,33,.24);top:-160px;right:-120px"></div>
    <div class="wrap">
      ${crumbs([{label:'Головна', href:'#home'}, {label:'Продукти'}])}
      <span class="eyebrow rv">Платформа SoftBees</span>
      <h1 class="rv" style="--i:1">Продукти та послуги</h1>
      <p class="lede rv" style="--i:2">Кожен напрям — модуль нашої SaaS/FaaS-платформи або окрема команда: адаптуємо під ваш бренд, ліцензію та ринок замість побудови з нуля.</p>
      <div class="chips rv" style="--i:3">${["ISO 27001","Diia.City resident","5 необанків за 3 роки"].map(c => `<span class="chip">${c}</span>`).join('')}</div>
    </div>
  </section>
  <section class="sect sect--tight"><div class="wrap">
    <div class="grid g-3">${PRODUCTS.map(productCard).join('')}</div>
  </div></section>
  ${ctaBand('Не впевнені, який модуль потрібен?', 'Опишіть задачу — підберемо конфігурацію платформи та дамо орієнтовні терміни запуску.')}
  `;
}

function pagePortfolio() {
  return `
  <section class="phero">
    <div class="grid-lines"></div>
    <div class="aura" style="width:520px;height:520px;background:rgba(129,99,255,.26);top:-150px;left:-140px"></div>
    <div class="wrap">
      ${crumbs([{label:'Головна', href:'#home'}, {label:'Портфоліо'}])}
      <span class="eyebrow rv">Портфоліо</span>
      <h1 class="rv" style="--i:1">Кейси, які вже в продакшні</h1>
      <p class="lede rv" style="--i:2">Від необанку в Нігерії до логістичної екосистеми в Канаді та США. Частина проєктів під NDA — про них розповідаємо на дзвінку.</p>
    </div>
  </section>
  <section class="sect sect--tight"><div class="wrap">
    <div class="grid g-3">
      ${CASES.map(caseCard).join('')}
      <article class="card nda rv" style="--i:8">
        <span class="num">NDA</span>
        <h3>Ще більше проєктів під NDA</h3>
        <p>Ми розробили значно більше застосунків, але обмеження NDA не дозволяють ділитися ними публічно.</p>
      </article>
    </div>
  </div></section>
  ${ctaBand('Схожий проєкт на горизонті?', 'Розкажіть про ринок і терміни — покажемо, які модулі закривають задачу.')}
  `;
}

function pageBlog() {
  const logos = ["Web Summit","Money20/20 Europe","MWC Barcelona","Slush","World Economic Forum","Forbes"];
  const strip = logos.concat(logos).map(l => `<span>${l}</span>`).join('');
  return `
  <section class="phero">
    <div class="grid-lines"></div>
    <div class="aura" style="width:480px;height:480px;background:rgba(255,194,74,.20);top:-140px;right:-100px"></div>
    <div class="wrap">
      ${crumbs([{label:'Головна', href:'#home'}, {label:'Блог'}])}
      <span class="eyebrow rv">Блог</span>
      <h1 class="rv" style="--i:1">Новини та експертиза</h1>
      <p class="lede rv" style="--i:2">Про запуск необанків, події індустрії та технології, які ми використовуємо щодня.</p>
      <div class="rv" style="--i:3;margin-top:48px">
        <p class="strip-label">На сцені разом з нами були</p>
        <div class="marquee"><div class="marquee-track">${strip}</div></div>
      </div>
    </div>
  </section>
  <section class="sect sect--tight"><div class="wrap">
    <div class="filters rv" role="group" aria-label="Категорії">
      ${CATEGORIES.map(c => {
        const n = c.k === 'all' ? POSTS.length : POSTS.filter(p => p.cat === c.k).length;
        return `<button class="filter" data-cat="${c.k}" aria-pressed="${c.k === 'all'}">${c.label}<b>${n}</b></button>`;
      }).join('')}
    </div>
    <div class="grid g-3" id="postGrid">${POSTS.map(postCard).join('')}</div>
  </div></section>
  ${ctaBand('Обговорімо ваш проєкт', 'Розкажіть про задачу — запропонуємо конкретне рішення й орієнтовні терміни.')}
  `;
}

function pageAbout() {
  return `
  <section class="phero">
    <div class="grid-lines"></div>
    <div class="aura" style="width:560px;height:560px;background:rgba(255,138,33,.24);top:-170px;left:-120px"></div>
    <div class="wrap">
      ${crumbs([{label:'Головна', href:'#home'}, {label:'Про компанію'}])}
      <span class="eyebrow rv">Про компанію</span>
      <h1 class="rv" style="--i:1">Банківська експертиза, яка вміє запускати продукт</h1>
      <p class="lede rv" style="--i:2">SoftBees — українсько-польська fintech-компанія та партнер із запуску необанків. Заснована 2022 року, офіси в Києві та Варшаві.</p>
    </div>
  </section>

  <section class="sect sect--tight"><div class="wrap">
    <p class="pull rv">Багато компаній можуть створити застосунок. <span class="grad-text">Дуже мало хто може запустити банк.</span></p>
  </div></section>

  <section class="sect"><div class="wrap"><div class="split" style="align-items:start">
    <div class="rv">
      <span class="eyebrow">Кому підходить</span>
      <h2>Наші клієнти</h2>
      <div class="rows" style="margin-top:32px">
        <div class="row"><span class="k">Роздрібні та SME-банки</span><span class="v">потрібен цифровий канал для клієнтів</span></div>
        <div class="row"><span class="k">Фінансові установи</span><span class="v">що оновлюють застарілі системи</span></div>
        <div class="row"><span class="k">EMI та платіжні компанії</span><span class="v">потрібна платформа з ліцензійним контуром</span></div>
      </div>
    </div>
    <div class="rv" style="--i:1">
      <span class="eyebrow">Чому обирають нас</span>
      <h2>Наша відмінність</h2>
      <div class="rows" style="margin-top:32px">
        <div class="row"><span class="k">На відміну від жорстких платформ</span><span class="v">наші модулі адаптуються під ваш бренд, ринок і комплаєнс</span></div>
        <div class="row"><span class="k">На відміну від класичних вендорів</span><span class="v">ми говоримо мовою банківських процесів, а не лише коду</span></div>
      </div>
    </div>
  </div></div></section>

  <section class="sect"><div class="wrap">
    <div class="head-block rv mb"><span class="eyebrow">Досягнення</span><h2>Визнання ринку</h2></div>
    <div class="grid g-3">
      <article class="card rv"><span class="num">Рейтинги</span><h3>TOP-6 українських fintech-компаній</h3><p>А також ТОП-10 TechEmbassy FinTech Season 2026.</p></article>
      <article class="card rv" style="--i:1"><span class="num">Виступи</span><h3>Money20/20 Europe</h3><p>1 з 7 стартапів світу на Start-Up Panel.</p></article>
      <article class="card rv" style="--i:2"><span class="num">Сертифікація</span><h3>ISO/IEC 27001</h3><p>Інформаційна безпека, повторна сертифікація 2026.</p></article>
    </div>
  </div></section>

  <section class="sect"><div class="wrap">
    <div class="head-block rv mb"><span class="eyebrow">Хронологія</span><h2>Наш шлях подіями</h2></div>
    <div class="tl">
      <div class="tl-item rv"><span class="tl-year">2024</span><div class="tl-list"><div>Резидентство Дія.City</div><div>Відкриття офісу у Варшаві</div><div>Web Summit, Лісабон</div></div></div>
      <div class="tl-item rv"><span class="tl-year">2025</span><div class="tl-list"><div>TOP-6 Ukrainian FinTech Navigator</div><div>FinTech Committee, IT Ukraine</div><div>World Economic Forum, Давос</div></div></div>
      <div class="tl-item rv"><span class="tl-year">2026</span><div class="tl-list"><div>World Economic Forum, Давос</div><div>Повторна сертифікація ISO/IEC 27001</div><div>Money20/20 Europe — Start-Up Panel</div></div></div>
    </div>
  </div></section>

  <section class="sect sect--tight"><div class="wrap">
    <div class="head-block rv mb"><span class="eyebrow">Технології</span><h2>Наш стек</h2></div>
    <div class="chips rv">${["Kotlin","Swift","React","Node.js","Java","PostgreSQL","Kubernetes","AWS","Kafka","Дія.Підпис","КЕП","QR НБУ"].map(t => `<span class="chip">${t}</span>`).join('')}</div>
  </div></section>

  <section class="sect sect--tight"><div class="wrap"><div class="band-light rv">
    <p class="q">Реєстрація для чинних підприємців та юридичних осіб займає лише кілька хвилин, що надзвичайно зручно.</p>
    <div class="who"><span class="av"></span><span><b>Дмитро Бондаренко</b><small>АТ «АСВІО БАНК»</small></span></div>
  </div></div></section>

  <section class="sect" id="contact"><div class="wrap"><div class="contact-grid">
    <div class="rv">
      <span class="eyebrow">Контакти</span>
      <h2>Обговорімо ваш проєкт</h2>
      <p class="lede" style="margin-top:20px">Розкажіть, що плануєте будувати — відповімо протягом одного робочого дня.</p>
      <div class="rows" style="margin-top:40px">
        <div class="row"><span class="k">Email</span><span class="v"><a href="mailto:info@softbees.com">info@softbees.com</a></span></div>
        <div class="row"><span class="k">Україна</span><span class="v">Київ, вул. Межигірська, 79А, 04080</span></div>
        <div class="row"><span class="k">Польща</span><span class="v">Варшава, Szpitalna 8/6, 00-031</span></div>
      </div>
    </div>
    <div class="rv" style="--i:1">
      <form id="contactForm" novalidate>
        <div class="field"><input id="f-name" type="text" placeholder=" " autocomplete="name"><label for="f-name">Ваше ім'я</label></div>
        <div class="field"><input id="f-mail" type="email" placeholder=" " autocomplete="email"><label for="f-mail">Email</label></div>
        <div class="field"><textarea id="f-msg" placeholder=" "></textarea><label for="f-msg">Розкажіть про проєкт</label></div>
        <button class="btn btn--primary btn--lg" type="submit">Надіслати ${ARROW}</button>
        <p class="form-note">Натискаючи «Надіслати», ви погоджуєтесь, що ми зв'яжемось з вами електронною поштою.</p>
      </form>
    </div>
  </div></div></section>
  `;
}

/* ================= detail template ================= */
function renderBlocks(blocks) {
  return blocks.map(b => {
    switch (b.t) {
      case 'h2': return `<h2>${b.x}</h2>`;
      case 'h3': return `<h3>${b.x}</h3>`;
      case 'p': return `<p>${b.x}</p>`;
      case 'ul': return `<ul>${b.x.map(i => `<li>${i}</li>`).join('')}</ul>`;
      case 'f': return `<div class="frows">${b.x.map(r => `<div class="frow"><span class="k">${r[0]}</span><span class="v">${r[1]}</span></div>`).join('')}</div>`;
      case 'tags': return `<div class="chips" style="margin:22px 0 6px">${b.x.map(t => `<span class="chip">${t}</span>`).join('')}</div>`;
      case 'stats': return `<div class="sgrid">${b.x.map(s => `<div class="s"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div>`;
      case 'q': return `<blockquote class="aquote"><p>${b.x}</p>${b.by ? `<cite>— ${b.by}</cite>` : ''}</blockquote>`;
      case 'img': return `<figure class="figure">${viz(b.kind, b.seed)}<figcaption>${b.cap}</figcaption></figure>`;
      case 'hash': return `<p class="hashtags">${b.x}</p>`;
      default: return '';
    }
  }).join('');
}
const PARENTS = {
  product: {label: 'Продукти', href: '#products'},
  case: {label: 'Портфоліо', href: '#portfolio'},
  post: {label: 'Блог', href: '#blog'}
};
function pageDetail(type, slug) {
  const d = DETAILS[slug];
  const parent = PARENTS[type];
  if (!d || d.kind !== type) {
    return `<section class="phero"><div class="wrap"><div class="notfound">
      <h2>Сторінку не знайдено</h2><p>Матеріал ще не перенесено в кит.</p>
      <a class="btn btn--primary" data-nav="${parent ? parent.href : '#home'}" role="link" tabindex="0">До розділу «${parent ? parent.label : 'Головна'}» ${ARROW}</a>
    </div></div></section>`;
  }
  const isPost = type === 'post';
  const meta = isPost ? `<div class="meta rv"><span class="tag">${d.tag}</span>${d.date ? `<span>${d.date}</span>` : ''}</div>` : '';
  return `
  <section class="phero">
    <div class="grid-lines"></div>
    <div class="aura" style="width:480px;height:480px;background:rgba(255,138,33,.20);top:-170px;right:-130px"></div>
    <div class="wrap"><div class="detail-layout"><div class="article">
      ${crumbs([{label: parent.label, href: parent.href}, {label: d.title}])}
      ${meta}
      <h1 class="rv" style="--i:1">${d.title}</h1>
      ${d.lede ? `<p class="lede rv" style="--i:2">${d.lede}</p>` : ''}
    </div></div></div>
  </section>
  <section class="sect sect--tight" style="padding-top:0"><div class="wrap"><div class="detail-layout"><div class="article rv">
    ${renderBlocks(d.blocks)}
    ${isPost ? `<div class="share">
      <span>Поділитися</span>
      <button class="btn" data-share="linkedin">LinkedIn</button>
      <button class="btn" data-share="facebook">Facebook</button>
      <button class="btn" data-share="x">X</button>
      <button class="btn" data-share="copy">Копіювати посилання</button>
    </div>` : ''}
  </div></div></div></section>
  ${ctaBand(isPost ? 'Обговорімо ваш проєкт' : 'Готові прискорити запуск?', 'Розкажіть про задачу — запропонуємо конкретне рішення й орієнтовні терміни.')}
  `;
}

/* ================= router ================= */
const app = $('#app');
let currentHash = (location.hash && location.hash.length > 1) ? location.hash : '#home';
function parseRoute(hash) {
  const h = (hash === undefined ? currentHash : hash).replace(/^#/, '');
  if (!h || h === 'home') return {page: 'home'};
  if (h.indexOf('/') > -1) {
    const [t, s] = h.split('/');
    if (['product', 'case', 'post'].includes(t)) return {page: 'detail', type: t, slug: s};
    return {page: 'home'};
  }
  if (h === 'contact') return {page: 'about', anchor: 'contact'};
  if (['products', 'portfolio', 'blog', 'about'].includes(h)) return {page: h};
  return {page: 'home'};
}
function markNav(r) {
  const key = r.page === 'detail'
    ? ({product: 'products', case: 'portfolio', post: 'blog'})[r.type]
    : r.page;
  $$('#nav a[data-key]').forEach(a => a.classList.toggle('active', a.dataset.key === key));
  $('#megaBtn').classList.toggle('active', key === 'products');
}
function render(replaceScroll) {
  const r = parseRoute();
  let html = '';
  if (r.page === 'home') html = pageHome();
  else if (r.page === 'products') html = pageProducts();
  else if (r.page === 'portfolio') html = pagePortfolio();
  else if (r.page === 'blog') html = pageBlog();
  else if (r.page === 'about') html = pageAbout();
  else if (r.page === 'detail') html = pageDetail(r.type, r.slug);
  app.innerHTML = html;
  markNav(r);
  document.title = titleFor(r);
  closeMega();
  document.body.classList.remove('menu-open', 'lock');
  observeReveals();
  bindPage();
  if (r.anchor) {
    const target = document.getElementById(r.anchor);
    requestAnimationFrame(() => target && target.scrollIntoView({behavior: prefersReduced() ? 'auto' : 'smooth', block: 'start'}));
  } else if (replaceScroll !== false) {
    window.scrollTo({top: 0, behavior: 'auto'});
  }
}
function titleFor(r) {
  if (r.page === 'detail') {
    const d = DETAILS[r.slug];
    return (d ? d.title : 'Сторінку не знайдено') + ' — SoftBees';
  }
  const m = {home: 'SoftBees — партнер із запуску необанків', products: 'Продукти та послуги — SoftBees',
    portfolio: 'Портфоліо — SoftBees', blog: 'Блог — SoftBees', about: 'Про компанію — SoftBees'};
  return m[r.page] || 'SoftBees';
}
function prefersReduced() {
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

/* ---- in-app navigation (no page loads, works inside sandboxed previews) ---- */
function syncAddressBar(h) {
  try { history.replaceState(null, '', h); } catch (e) { /* sandboxed preview: keep state in memory */ }
}
function scrollToAnchor(id) {
  const t = id && document.getElementById(id);
  const behavior = prefersReduced() ? 'auto' : 'smooth';
  if (t) t.scrollIntoView({behavior: behavior, block: 'start'});
  else window.scrollTo({top: 0, behavior: behavior});
}
function go(hash) {
  const next = (!hash || hash === '#') ? '#home' : hash;
  document.body.classList.remove('menu-open', 'lock');
  const burgerEl = document.getElementById('burger');
  if (burgerEl) burgerEl.setAttribute('aria-expanded', 'false');
  closeMega();

  if (next === currentHash) {                       // already here: just move the viewport
    const r = parseRoute(next);
    scrollToAnchor(r.anchor);
    return;
  }
  const prev = parseRoute(currentHash), nextRoute = parseRoute(next);
  currentHash = next;
  syncAddressBar(next);

  if (prev.page === 'about' && nextRoute.page === 'about') {  // #about <-> #contact: no re-render
    scrollToAnchor(nextRoute.anchor);
    return;
  }
  if (prefersReduced()) { render(); return; }
  document.body.classList.add('leaving');
  setTimeout(() => { document.body.classList.remove('leaving'); render(); }, 200);
}
/* deep links / browser back still work when the address bar is reachable */
window.addEventListener('hashchange', () => {
  const h = (location.hash && location.hash.length > 1) ? location.hash : '#home';
  if (h !== currentHash) go(h);
});
window.addEventListener('popstate', () => {
  const h = (location.hash && location.hash.length > 1) ? location.hash : '#home';
  if (h !== currentHash) go(h);
});

/* ================= reveals ================= */
let io;
function observeReveals() {
  if (io) io.disconnect();
  if (prefersReduced()) { $$('.rv').forEach(e => e.classList.add('in')); return; }
  io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {rootMargin: '0px 0px -8% 0px', threshold: 0.05});
  $$('.rv').forEach(e => io.observe(e));
}

/* ================= page-level bindings ================= */
function bindPage() {
  /* blog filter */
  const filters = $$('.filter');
  if (filters.length) {
    filters.forEach(btn => btn.addEventListener('click', () => {
      filters.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      const cat = btn.dataset.cat;
      $$('#postGrid .pcard').forEach((card, i) => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.display = show ? '' : 'none';
        if (show) { card.classList.remove('in'); card.style.setProperty('--i', i % 6); requestAnimationFrame(() => card.classList.add('in')); }
      });
    }));
  }
  /* share bar */
  $$('[data-share]').forEach(btn => btn.addEventListener('click', async () => {
    const url = location.href.split('#')[0] + currentHash, title = document.title;
    const kind = btn.dataset.share;
    if (kind === 'copy') {
      try { await navigator.clipboard.writeText(url); } catch (e) {
        const ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e2) {} ta.remove();
      }
      const old = btn.innerHTML; btn.innerHTML = 'Скопійовано';
      setTimeout(() => { btn.innerHTML = old; }, 1600);
      return;
    }
    const map = {
      linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url),
      facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
      x: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title)
    };
    window.open(map[kind], '_blank', 'noopener,width=680,height=560');
  }));
  /* contact form */
  const form = $('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#f-name'), mail = $('#f-mail'), msg = $('#f-msg');
      let ok = true;
      [name, mail, msg].forEach(f => {
        const bad = !f.value.trim() || (f === mail && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail.value.trim()));
        f.classList.toggle('err', bad);
        if (bad) ok = false;
      });
      if (!ok) return;
      onSubmit({name: name.value.trim(), email: mail.value.trim(), message: msg.value.trim()});
      form.innerHTML = `<div class="form-ok">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" stroke="#FFC24A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>Дякуємо, лист отримано. Відповімо протягом одного робочого дня.</span></div>`;
    });
  }
}
/* hook point for a real integration */
function onSubmit(data) { console.log('SoftBees contact form:', data); }

/* ================= chrome interactions ================= */
/* mega menu */
const megaWrap = $('#megaWrap'), megaBtn = $('#megaBtn'), mega = $('#mega');
mega.innerHTML = PRODUCTS.map(p => `<a class="mega-item" data-nav="#product/${p.slug}" role="link" tabindex="0">
    <span class="mega-num">${p.n}</span><span><h4>${p.title}</h4><p>${p.desc}</p></span></a>`).join('')
  + `<div class="mega-foot"><span>8 модулів платформи — обираєте потрібні</span>
     <a class="link-arrow" data-nav="#products" role="link" tabindex="0">Усі продукти та послуги ${ARROW}</a></div>`;
let megaTimer;
function openMega() { clearTimeout(megaTimer); megaWrap.classList.add('open'); megaBtn.setAttribute('aria-expanded', 'true'); }
function closeMega() { megaWrap.classList.remove('open'); megaBtn.setAttribute('aria-expanded', 'false'); }
megaWrap.addEventListener('focusin', openMega);
megaWrap.addEventListener('focusout', (e) => { if (!megaWrap.contains(e.relatedTarget)) closeMega(); });
megaWrap.addEventListener('mouseenter', openMega);
megaWrap.addEventListener('mouseleave', () => { megaTimer = setTimeout(closeMega, 160); });
megaBtn.addEventListener('click', () => {
  if (megaWrap.classList.contains('open')) { closeMega(); go('#products'); }
  else openMega();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeMega(); document.body.classList.remove('menu-open', 'lock'); }
});

/* mobile menu */
const burger = $('#burger');
burger.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  document.body.classList.toggle('lock', open);
  burger.setAttribute('aria-expanded', String(open));
});


/* header state + progress */
const header = $('#header'), progress = $('#progress');
function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 16);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, {passive: true});

/* card spotlight */
document.addEventListener('mousemove', (e) => {
  const card = e.target.closest && e.target.closest('.card');
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  card.style.setProperty('--my', (e.clientY - r.top) + 'px');
}, {passive: true});

/* every internal link routes in place; anchors with a real href (mailto, external) are left alone */
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-nav]');
  if (!el) return;
  e.preventDefault();
  go(el.getAttribute('data-nav'));
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const el = e.target.closest && e.target.closest('[data-nav]');
  if (!el) return;
  e.preventDefault();
  go(el.getAttribute('data-nav'));
});

/* footer product links */
$('#footerProducts').innerHTML = PRODUCTS.slice(0, 5)
  .map(p => `<li><a data-nav="#product/${p.slug}" role="link" tabindex="0">${p.title}</a></li>`).join('');

/* boot */
render();
onScroll();
