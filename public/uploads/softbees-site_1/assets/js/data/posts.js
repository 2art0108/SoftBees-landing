/* Blog listing + category filter */

const POSTS = [
  {slug:"techembassy-top10-2026", cat:"news", catLabel:"News", date:"18.07.2026", title:"SoftBees — у ТОП-10 фінтех-стартапів TechEmbassy FinTech Season 2026", desc:"Визнання прийшло разом із можливістю представити SoftBees на Finnovation Day під час Money20/20 Europe.", kind:"trophy", seed:0},
  {slug:"ai-native-not-about-ai", cat:"insights", catLabel:"Insights", date:"02.06.2026", title:"AI-native — це не про AI", desc:"Про керування знаннями, процесами й відповідальністю так, щоб AI став частиною системи.", kind:"flow", seed:2},
  {slug:"swiss-fintech-week-2026", cat:"events", catLabel:"Events", date:"14.05.2026", title:"SoftBees на Swiss FinTech Week", desc:"Нові партнерства та майбутнє AI в банкінгу.", kind:"mountain", seed:4},
  {slug:"mwc-barcelona-2026", cat:"events", catLabel:"Events", date:"04.03.2026", title:"MWC Barcelona & 4YFN: у центрі глобального фінтеху", desc:"Тижневий маршрут зустрічей із банками та платіжними провайдерами.", kind:"landmark", seed:1},
  {slug:"iso-27001-2026-retrospective", cat:"security", catLabel:"Security", date:"21.01.2026", title:"Чому ISO 27001 — маст-хев для фінтеху", desc:"Що змінюється в процесах компанії після сертифікації.", kind:"shield", seed:5},
  {slug:"forbes-jeje", cat:"projects", catLabel:"Projects", date:"30.01.2026", title:"Фінтех-міст між Україною та Нігерією: запуск jejebank", desc:"Як виглядає запуск необанку на новому для команди ринку.", kind:"handshake", seed:3}
];
const CATEGORIES = [
  {k:"all", label:"Усі"},
  {k:"events", label:"Events"},
  {k:"news", label:"News"},
  {k:"projects", label:"Projects"},
  {k:"security", label:"Security"},
  {k:"insights", label:"Insights"}
];
