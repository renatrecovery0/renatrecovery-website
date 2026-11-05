const PHONE = "420725096860";
const EMAIL = "renat.recovery@gmail.com";
const dict = {
ru:{
topline:"PRAGUE · PERSONAL TRAINING · PERFORMANCE · RECOVERY",navServices:"Направления",navAbout:"О тренере",navPricing:"Пакеты",navContact:"Контакты",book:"Записаться",heroKicker:"RENAT RECOVERY · PRAGUE",heroTitle:"СТАНЬ СИЛЬНЕЕ.<br>ДВИГАЙСЯ ЛУЧШЕ.",heroLead:"Персональные тренировки, небольшие группы, питание и восстановление. Системный подход к движению и прогрессу.",explore:"Выбрать направление ↘",aboutLink:"Познакомиться с тренером",heroFoot:"TRAIN WITH PURPOSE. RECOVER WITH CARE.",servicesKicker:"НАПРАВЛЕНИЯ",servicesTitle:"НАЙДИ СВОЙ<br><em>ФОРМАТ.</em>",servicesIntro:"Выбери направление, чтобы узнать, как проходит работа, кому подходит формат и как начать.",sampleNote:"Фотографии временные, используются как образцы композиции. Позже заменим их твоими фотографиями.",aboutKicker:"О ТРЕНЕРЕ",aboutTitle:"ДВИЖЕНИЕ —<br><em>ЭТО СИСТЕМА.</em>",aboutText:"Я Renat. Работаю с физической подготовкой, функциональным движением и восстановлением. В основе моего подхода — оценка исходного уровня, понятный план, техника и постепенный прогресс.",aboutCta:"Обсудить свои цели ↗",pricingKicker:"ПАКЕТЫ",pricingTitle:"ВЫБЕРИ СВОЙ<br><em>РИТМ.</em>",pricingIntro:"Пакеты персональных тренировок рассчитаны на регулярную работу. Подробности и расписание согласуем перед оплатой.",pack1:"8 тренировок + 1 бонусная",pack2:"10 тренировок + 2 бонусные",pack3:"12 тренировок + 3 бонусные",askPrice:"Уточнить стоимость ↗",pricingFoot:"R2 GROUP, массаж и онлайн-программы рассчитываются отдельно в зависимости от выбранного формата.",bookingKicker:"СЛЕДУЮЩИЙ ШАГ",bookingTitle:"НАЧНЁМ<br><em>ДВИГАТЬСЯ?</em>",bookingText:"Оставь имя, контакт и направление. Заявка откроется в WhatsApp с уже подготовленным сообщением.",formName:"ИМЯ",formContact:"ТЕЛЕФОН ИЛИ EMAIL",formService:"НАПРАВЛЕНИЕ",choose:"Выбери направление",formMessage:"СООБЩЕНИЕ",send:"Отправить заявку",sent:"Открылся WhatsApp с подготовленной заявкой. Нажми «Отправить», чтобы завершить.",cta:"Записаться ↗",
services:{
personal:["PERSONAL TRAINING","Индивидуальные тренировки с учётом твоего уровня, целей, опыта и доступного времени.","Первичная беседа и оценка исходного уровня","Работа над техникой, силой, мобильностью и выносливостью","Постепенное увеличение нагрузки и отслеживание прогресса","Цена: 890 Kč за тренировку. Пакеты: 8+1 — 6 000 Kč, 10+2 — 7 000 Kč, 12+3 — 8 000 Kč."],
group:["R2 GROUP","Небольшие группы до четырёх человек. Структурированные занятия, тренер рядом и внимание к технике каждого участника.","До 4 участников в группе","Тренировки около 60 минут","План занятий и регулярность — основа прогресса","Цена: 3 300 Kč за месяц, 12 занятий."],
nutrition:["NUTRITION","Практическая помощь с организацией питания под твои цели и тренировочную нагрузку. Без экстремальных ограничений и универсальных меню.","Разбор текущих привычек и режима","Рекомендации по структуре рациона","Практичные идеи для повседневного питания","План питания: 490 Kč."],
recovery:["MASSAGE & RECOVERY","Массаж и восстановительные процедуры для расслабления, снижения ощущения мышечного напряжения и поддержки восстановления после нагрузок.","Классический и спортивный массаж","Подбор процедуры под запрос","Продолжительность и формат согласуем заранее","Сеанс массажа: 1 490 Kč."],
online:["ONLINE PROGRAMS","Домашние тренировочные программы с понятной структурой, дозировкой упражнений и критериями постепенного усложнения.","Программы для самостоятельных занятий","Уровни и постепенная прогрессия","Материалы и рекомендации по технике","Онлайн-программа: 590 Kč."]
}},
cz:{
topline:"PRAHA · OSOBNÍ TRÉNINK · VÝKON · REGENERACE",navServices:"Služby",navAbout:"O trenérovi",navPricing:"Balíčky",navContact:"Kontakt",book:"Rezervovat",heroKicker:"RENAT RECOVERY · PRAHA",heroTitle:"BUĎ SILNĚJŠÍ.<br>HÝBEJ SE LÉPE.",heroLead:"Osobní trénink, malé skupiny, výživa a regenerace. Systematický přístup k pohybu a pokroku.",explore:"Vybrat službu ↘",aboutLink:"Poznat trenéra",heroFoot:"TRÉNUJ S CÍLEM. REGENERUJ S PÉČÍ.",servicesKicker:"SLUŽBY",servicesTitle:"NAJDI SVŮJ<br><em>FORMÁT.</em>",servicesIntro:"Vyber si službu a zjisti, jak spolupráce probíhá, pro koho je vhodná a jak začít.",sampleNote:"Fotografie jsou zatím pouze ilustrační. Později je nahradíme tvými vlastními fotografiemi.",aboutKicker:"O TRENÉROVI",aboutTitle:"POHYB JE<br><em>SYSTÉM.</em>",aboutText:"Jsem Renat. Věnuji se kondiční přípravě, funkčnímu pohybu a regeneraci. Základem mého přístupu je vstupní posouzení, jasný plán, technika a postupný pokrok.",aboutCta:"Probrat své cíle ↗",pricingKicker:"BALÍČKY",pricingTitle:"VYBER SI SVŮJ<br><em>RYTMUS.</em>",pricingIntro:"Balíčky osobních tréninků jsou určené pro pravidelnou spolupráci. Podrobnosti a rozvrh domluvíme před platbou.",pack1:"8 tréninků + 1 bonusový",pack2:"10 tréninků + 2 bonusové",pack3:"12 tréninků + 3 bonusové",askPrice:"Zjistit cenu ↗",pricingFoot:"R2 GROUP, masáže a online programy se naceňují samostatně podle zvoleného formátu.",bookingKicker:"DALŠÍ KROK",bookingTitle:"ZAČNEME<br><em>SE HÝBAT?</em>",bookingText:"Vyplň jméno, kontakt a službu. V WhatsAppu se otevře připravená zpráva.",formName:"JMÉNO",formContact:"TELEFON NEBO E-MAIL",formService:"SLUŽBA",choose:"Vyber službu",formMessage:"ZPRÁVA",send:"Odeslat poptávku",sent:"Otevřel se WhatsApp s připravenou poptávkou. Klepnutím na Odeslat dokonči rezervaci.",cta:"Rezervovat ↗",
services:{
personal:["PERSONAL TRAINING","Individuální trénink podle tvé úrovně, cílů, zkušeností a časových možností.","Úvodní rozhovor a posouzení výchozí úrovně","Technika, síla, mobilita a kondice","Postupné zvyšování zátěže a sledování pokroku","Cena: 890 Kč za trénink. Balíčky: 8+1 — 6 000 Kč, 10+2 — 7 000 Kč, 12+3 — 8 000 Kč."],
group:["R2 GROUP","Malé skupiny maximálně čtyř lidí. Strukturované lekce, trenér nablízku a pozornost věnovaná technice každého.","Maximálně 4 účastníci","Trénink přibližně 60 minut","Pravidelnost a plán jako základ pokroku","Cena: 3 300 Kč měsíčně, 12 lekcí."],
nutrition:["NUTRITION","Praktická pomoc s nastavením stravování podle tvých cílů a tréninkové zátěže. Bez extrémních omezení a univerzálních jídelníčků.","Rozbor současných návyků a režimu","Doporučení ke skladbě jídelníčku","Praktické tipy pro každodenní stravování","Plán výživy: 490 Kč."],
recovery:["MASSAGE & RECOVERY","Masáže a regenerační procedury pro uvolnění, zmírnění pocitu svalového napětí a podporu regenerace po zátěži.","Klasická a sportovní masáž","Výběr procedury podle potřeby","Délku a formát domluvíme předem","Masáž: 1 490 Kč za sezení."],
online:["ONLINE PROGRAMS","Domácí tréninkové programy s jasnou strukturou, dávkováním cviků a kritérii postupného zvyšování náročnosti.","Programy pro samostatné cvičení","Úrovně a postupná progrese","Materiály a doporučení k technice","Online program: 590 Kč."]
}},
en:{
topline:"PRAGUE · PERSONAL TRAINING · PERFORMANCE · RECOVERY",navServices:"Services",navAbout:"About",navPricing:"Packages",navContact:"Contact",book:"Book now",heroKicker:"RENAT RECOVERY · PRAGUE",heroTitle:"GET STRONGER.<br>MOVE BETTER.",heroLead:"Personal training, small groups, nutrition and recovery. A structured approach to movement and progress.",explore:"Explore services ↘",aboutLink:"Meet the coach",heroFoot:"TRAIN WITH PURPOSE. RECOVER WITH CARE.",servicesKicker:"SERVICES",servicesTitle:"FIND YOUR<br><em>FORMAT.</em>",servicesIntro:"Choose a service to learn how it works, who it is for and how to get started.",sampleNote:"Images are temporary visual references. We will replace them with your own photos later.",aboutKicker:"ABOUT THE COACH",aboutTitle:"MOVEMENT IS<br><em>A SYSTEM.</em>",aboutText:"I'm Renat. I work with physical preparation, functional movement and recovery. My approach is built on an initial assessment, a clear plan, good technique and gradual progress.",aboutCta:"Discuss your goals ↗",pricingKicker:"PACKAGES",pricingTitle:"CHOOSE YOUR<br><em>RHYTHM.</em>",pricingIntro:"Personal training packages are designed for consistent work. Details and scheduling are agreed before payment.",pack1:"8 sessions + 1 bonus",pack2:"10 sessions + 2 bonus",pack3:"12 sessions + 3 bonus",askPrice:"Ask for pricing ↗",pricingFoot:"R2 GROUP, massage and online programmes are priced separately depending on the format.",bookingKicker:"YOUR NEXT STEP",bookingTitle:"READY TO<br><em>KEEP MOVING?</em>",bookingText:"Enter your name, contact and service. WhatsApp will open with a prepared message.",formName:"NAME",formContact:"PHONE OR EMAIL",formService:"SERVICE",choose:"Choose a service",formMessage:"MESSAGE",send:"Send enquiry",sent:"WhatsApp opened with your enquiry prepared. Tap Send to complete it.",cta:"Book now ↗",
services:{
personal:["PERSONAL TRAINING","One-to-one training tailored to your level, goals, experience and schedule.","Initial conversation and baseline assessment","Technique, strength, mobility and conditioning","Gradual progression and progress tracking","Price: 890 CZK per session. Packages: 8+1 — 6,000 CZK, 10+2 — 7,000 CZK, 12+3 — 8,000 CZK."],
group:["R2 GROUP","Small groups of up to four people. Structured sessions, coach support and attention to each participant's technique.","Up to 4 participants","Sessions around 60 minutes","Consistency and planning built around progress","Price: 3,300 CZK per month, 12 sessions."],
nutrition:["NUTRITION","Practical support with nutrition habits aligned with your goals and training load. No extreme restrictions or one-size-fits-all menus.","Review of current habits and routine","Guidance on meal structure","Practical everyday nutrition ideas","Nutrition plan: 490 CZK."],
recovery:["MASSAGE & RECOVERY","Massage and recovery sessions to support relaxation, ease the feeling of muscle tension and support recovery after training.","Classic and sports massage","Session selected around your needs","Duration and format agreed in advance","Massage session: 1,490 CZK."],
online:["ONLINE PROGRAMS","Home training programmes with clear structure, exercise dosage and criteria for gradual progression.","Programmes for independent training","Levels and progressive development","Guidance and technique recommendations","Online programme: 590 CZK."]
}}
};
const $=s=>document.querySelector(s);
let lang="ru";
function setLang(next){
 lang=next;document.documentElement.lang=next==="cz"?"cs":next;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(dict[next][k])el.innerHTML=dict[next][k]});
 document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b.dataset.lang===next));
}
document.querySelectorAll(".lang").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
$("#year").textContent=new Date().getFullYear();
$("#hamburger").addEventListener("click",()=>$("#nav").classList.toggle("open"));
$("#nav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#nav").classList.remove("open")));
const dialog=$("#serviceDialog");
document.querySelectorAll(".service-card").forEach(card=>card.addEventListener("click",()=>{
 const d=dict[lang].services[card.dataset.service];
 $("#dialogKicker").textContent="R2 / "+card.dataset.service.toUpperCase();
 $("#dialogTitle").textContent=d[0];$("#dialogText").textContent=d[1];
 $("#dialogBullets").innerHTML=d.slice(2).map(x=>`<li>${x}</li>`).join("");
 $("#dialogCta").textContent=dict[lang].cta;dialog.showModal();
}));
$("#dialogClose").addEventListener("click",()=>dialog.close());
$("#dialogCta").addEventListener("click",()=>dialog.close());
$("#bookingForm").addEventListener("submit",e=>{
 e.preventDefault();if(!e.currentTarget.reportValidity())return;
 const f=new FormData(e.currentTarget);
 const msg=`R2 RenatRecovery enquiry\nName: ${f.get("name")}\nContact: ${f.get("contact")}\nService: ${f.get("service")}\nMessage: ${f.get("message")}`;
 $("#formStatus").textContent=dict[lang].sent;
 window.location.href=`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
});

const themeToggle=$("#themeToggle");
const themeColor=$("#themeColor");
function applyTheme(theme){
  const dark=theme==="dark";
  document.documentElement.dataset.theme=dark?"dark":"light";
  document.querySelectorAll("img[src*="renat-recovery-logo"]").forEach(img=>{img.src=dark?"renat-recovery-logo-dark.svg":"renat-recovery-logo-light.svg";});
  if(themeToggle){ themeToggle.querySelector(".theme-icon").textContent=dark?"☀":"☾"; themeToggle.setAttribute("aria-label",dark?"Включить светлую тему":"Включить тёмную тему"); }
  if(themeColor) themeColor.content=dark?"#0b0c0e":"#f6f7f5";
  localStorage.setItem("rr-theme",dark?"dark":"light");
}
if(themeToggle) themeToggle.addEventListener("click",()=>applyTheme(document.documentElement.dataset.theme==="dark"?"light":"dark"));
applyTheme(localStorage.getItem("rr-theme")||"light");

setLang("ru");
