// =========================================================
//   داده‌های پروفایل و نمونه‌کارها (پاسخ‌گوی محلی/آفلاین،
//   برای وقتی سرور در دسترس نیست)
// =========================================================

const PROFILE = {
  name: "طاها کریمی",
  intro: "برنامه‌نویس فرانت‌اند و بک‌اند با تسلط بر پایتون و زبان‌های فرانت‌اند",
  skills: [
    "پایتون (بک‌اند / اسکریپت‌نویسی / اتوماسیون)",
    "اچ‌تی‌ام‌ال، سی‌اس‌اس، جاوااسکریپت (فرانت‌اند)",
    "توسعه‌ی کامل وب (فول‌استک)",
    "ساخت ربات و دستیار هوشمند با پایتون",
    "کار با ای‌پی‌آی‌ها و کتابخانه‌های دانلود رسانه",
  ],
  email: "taha.01.karimi@gmail.com",
  phone: "09026324574",
  instagram: "@taha0246titi",
};

const PROJECTS = [
  { name: "محاسبه‌گر سن", desc: "برنامه‌ای که با گرفتن تاریخ تولد کاربر، سن دقیق (سال/ماه/روز) را محاسبه و نمایش می‌دهد.", tech: ["پایتون", "اچ‌تی‌ام‌ال/سی‌اس‌اس/جاوااسکریپت برای نسخه‌ی وب"] },
  { name: "فروشگاه اینترنتی", desc: "یک وب‌سایت فروشگاهی کامل شامل نمایش محصولات، سبد خرید، ثبت سفارش و پنل مدیریت ساده.", tech: ["پایتون (بک‌اند)", "اچ‌تی‌ام‌ال/سی‌اس‌اس/جاوااسکریپت (فرانت‌اند)", "دیتابیس"] },
  { name: "دانلودر ویدیو و موزیک (اینستاگرام و یوتیوب)", desc: "ابزاری که با گرفتن لینک پست/ویدیوی اینستاگرام یا یوتیوب، فایل ویدیو یا صدا را استخراج و دانلود می‌کند.", tech: ["پایتون", "کتابخانه‌ی yt-dlp و requests", "رابط کاربری ساده"] },
  { name: "مبدل واحدها", desc: "تبدیل سریع واحدهای طول، وزن، دما و ارز بین یکدیگر با یک رابط ساده.", tech: ["پایتون"] },
  { name: "برنامه یادداشت و کارها (لیست کارها)", desc: "مدیریت کارهای روزانه با امکان افزودن، حذف، ویرایش و علامت‌گذاری کارهای انجام‌شده.", tech: ["پایتون", "اچ‌تی‌ام‌ال/سی‌اس‌اس/جاوااسکریپت برای نسخه‌ی وب"] },
  { name: "تولیدکننده رمز عبور امن", desc: "ساخت رمزهای عبور تصادفی و قوی با قابلیت تعیین طول و نوع کاراکترها.", tech: ["پایتون"] },
  { name: "کوتاه‌کننده لینک", desc: "تبدیل لینک‌های طولانی به لینک‌های کوتاه قابل اشتراک‌گذاری.", tech: ["پایتون (بک‌اند)", "اچ‌تی‌ام‌ال/سی‌اس‌اس/جاوااسکریپت (فرانت‌اند)"] },
  { name: "همین دستیار هوشمند", desc: "یک دستیار/ربات هوشمند وب که با پایتون (بک‌اند) و جاوااسکریپت (فرانت‌اند) ساخته شده و به هوش مصنوعی وصله.", tech: ["پایتون", "Flask", "وب", "هوش مصنوعی"] },
];

const GREETINGS = [
  `سلام! خوش اومدی 👋 من دستیار هوشمند ${PROFILE.name} هستم. چطور می‌تونم کمکت کنم؟`,
  "سلام، حالت چطوره؟ می‌تونی درباره‌ی مهارت‌ها، نمونه‌کارها یا راه‌های تماس ازم بپرسی.",
  "درود بر تو! خوشحالم که اینجایی. بگو دنبال چه اطلاعاتی هستی.",
];

const HOW_ARE_YOU = [
  "ممنون، من همیشه آماده‌ام کمک کنم! خودت چطوری؟",
  "عالی‌ام، مرسی که پرسیدی! تو چطوری؟",
];

const KEYWORDS = {
  greeting: ["سلام", "درود", "های", "هلو", "hi", "hello", "hey", "صبح بخیر", "ظهر بخیر", "عصر بخیر", "شب بخیر"],
  how_are_you: ["چطوری", "حالت چطوره", "خوبی", "چه خبر", "احوالت", "اوضاع چطوره"],
  thanks: ["ممنون", "مرسی", "تشکر", "دمت گرم", "دستت درد نکنه"],
  name: ["اسم", "اسمت", "اسمتو", "نام", "کی هستی", "خودتو معرفی", "معرفی کن", "تو کی هستی"],
  skills: ["مهارت", "مهارتت", "مهارتهات", "مهارتهاتو", "مهارتات", "بلدی", "تخصص", "تخصصت", "زبان برنامه نویسی", "چیکاره ای"],
  email: ["ایمیل", "ایمیلت", "ایمیلتو", "email", "میل"],
  phone: ["شماره", "تلفن", "تماس", "شماره تماس", "شماره موبایل"],
  instagram: ["اینستا", "instagram", "اینستاگرام", "پیج"],
  contact: ["ارتباط", "تماس با من", "چطور باهام تماس", "راه ارتباطی"],
  projects_list: ["نمونه کار", "پروژه", "پروژه ها", "نمونه کارها", "کارهات چیه", "چیکار کردی", "چی ساختی", "چی طراحی کردی", "کارهاتو", "کارهات", "پروژه هات", "پروژه هاتو"],
  help: ["راهنما", "کمک", "چی میتونی", "دستورات"],
};

const PROJECT_STOPWORDS = new Set(["برنامه", "لیست", "کارها", "یادداشت", "و", "امن"]);

// =========================================================
//                     منطق تشخیص هدف (محلی/آفلاین)
// =========================================================

function normalize(text){
  return text.trim().toLowerCase().replace(/\s+/g, " ").replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/‌/g, " ");
}

function wordMatch(keyword, text){
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(?<![\\p{L}\\p{N}_])" + escaped + "(?![\\p{L}\\p{N}_])", "u");
  return re.test(text);
}

function matchIntent(raw){
  const text = normalize(raw);

  for(const project of PROJECTS){
    const words = normalize(project.name).split(" ");
    for(const w of words){
      const word = w.replace(/[()،]/g, "");
      if(word.length > 2 && !PROJECT_STOPWORDS.has(word) && wordMatch(word, text)){
        return { type: "project_detail", project };
      }
    }
  }

  for(const intent in KEYWORDS){
    for(const kw of KEYWORDS[intent]){
      if(wordMatch(normalize(kw), text)) return { type: intent };
    }
  }

  return { type: "unknown" };
}

function pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

function respond(raw){
  const intent = matchIntent(raw);

  switch(intent.type){
    case "project_detail": {
      const p = intent.project;
      return { html: `<span class="project-name">${p.name}</span>${p.desc}\n\nتکنولوژی‌ها: ${p.tech.join("، ")}` };
    }
    case "greeting": return { text: pick(GREETINGS) };
    case "how_are_you": return { text: pick(HOW_ARE_YOU) };
    case "thanks": return { text: "خواهش می‌کنم! هر وقت سؤال دیگه‌ای داشتی بپرس 🙂" };
    case "name": return { text: `سلام! من دستیار هوشمند ${PROFILE.name} هستم. ${PROFILE.intro}.` };
    case "skills": return { text: `مهارت‌های ${PROFILE.name}:\n` + PROFILE.skills.map(s => "• " + s).join("\n") };
    case "email": return { text: `ایمیل: ${PROFILE.email}` };
    case "phone": return { text: `شماره تماس: ${PROFILE.phone}` };
    case "instagram": return { text: `پیج اینستاگرام: ${PROFILE.instagram}` };
    case "contact": return { text: `راه‌های ارتباطی:\n• ایمیل: ${PROFILE.email}\n• تلفن: ${PROFILE.phone}\n• اینستاگرام: ${PROFILE.instagram}` };
    case "projects_list": {
      const list = PROJECTS.map((p, i) => `${i+1}. ${p.name}`).join("\n");
      return { text: `نمونه‌کارهای من:\n${list}\n\nبرای جزئیات بیشتر، اسم پروژه رو بنویس (مثلاً: «فروشگاه اینترنتی»).` };
    }
    case "help": return { text: helpText() };
    default: return { text: "دقیق متوجه منظورت نشدم 🤔 ولی می‌تونی یکی از این‌ها رو امتحان کنی:\n• «سلام» یا «چطوری؟»\n• «مهارت‌هات چیه؟»\n• «نمونه کارهاتو نشونم بده»\n• «شماره تماس» یا «اینستاگرامت چیه؟»" };
  }
}

function helpText(){
  return "می‌تونی از من درباره موارد زیر بپرسی:\n• سلام/احوال‌پرسی\n• معرفی خودم\n• مهارت‌ها\n• ایمیل، شماره تماس، اینستاگرام\n• لیست نمونه‌کارها یا جزئیات یک پروژه‌ی خاص";
}

// =========================================================
//                        رابط کاربری
// =========================================================

const chatEl = document.getElementById("chat");
const formEl = document.getElementById("composer-form");
const inputEl = document.getElementById("text-input");
const chipsEl = document.getElementById("chips");
const sendBtn = document.getElementById("send-btn");

// چت عمداً ذخیره نمی‌شه؛ هر بار صفحه رفرش/باز بشه، از اول شروع می‌کنیم.
let conversationHistory = []; // [{role: 'user'|'model', content: '...'}]

function addMessage(role, content, opts = {}){
  const div = document.createElement("div");
  div.className = "msg " + role + (opts.error ? " error" : "");

  if(content.html) div.innerHTML = content.html;
  else if(content.text) div.textContent = content.text;

  chatEl.appendChild(div);
  chatEl.scrollTop = chatEl.scrollHeight;
  return div;
}

function showTyping(){
  const div = document.createElement("div");
  div.className = "typing";
  div.id = "typing-indicator";
  div.innerHTML = "<span></span><span></span><span></span>";
  chatEl.appendChild(div);
  chatEl.scrollTop = chatEl.scrollHeight;
}

function hideTyping(){
  const el = document.getElementById("typing-indicator");
  if(el) el.remove();
}

let backendAvailable = true;

async function askBackend(message){
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);

  let res;
  try{
    res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history: conversationHistory }),
      signal: controller.signal,
    });
  }catch(err){
    if(err.name === "AbortError"){
      throw new Error("درخواست خیلی طول کشید (۲۵ ثانیه).");
    }
    throw new Error("اتصال به سرور برقرار نشد.");
  }finally{
    clearTimeout(timeoutId);
  }

  let data = {};
  try{ data = await res.json(); }catch(e){ /* بدنه‌ی نامعتبر */ }

  if(!res.ok || data.error){
    throw new Error(data.error || "خطای ارتباط با سرور.");
  }
  return data.reply;
}

async function sendMessage(text){
  const trimmed = (text || "").trim();
  if(!trimmed) return;

  addMessage("user", { text: trimmed });

  inputEl.value = "";
  setComposerDisabled(true);
  showTyping();

  try{
    try{
      if(!backendAvailable) throw new Error("skip-to-local");

      const replyText = await askBackend(trimmed);
      conversationHistory.push({ role: "user", content: trimmed });
      conversationHistory.push({ role: "model", content: replyText });

      addMessage("bot", { text: replyText });

    }catch(err){
      if(err && err.message && err.message !== "skip-to-local"){
        addMessage("bot", { text: "⚠️ " + err.message + " (به‌جاش از پاسخ‌گوی محلی استفاده می‌کنم)" }, { error: true });
      }

      backendAvailable = false;
      await new Promise(r => setTimeout(r, 300 + Math.random() * 200));
      const local = respond(trimmed);
      const botContent = local.html ? { html: local.html } : { text: local.text };
      addMessage("bot", botContent);
    }
  } finally {
    hideTyping();
    setComposerDisabled(false);
    inputEl.focus();
  }
}

function setComposerDisabled(disabled){
  sendBtn.disabled = disabled;
}

formEl.addEventListener("submit", e => {
  e.preventDefault();
  sendMessage(inputEl.value);
});

// ---------- چیپ‌های پیشنهادی ----------

const CHIP_LABELS = ["سلام", "مهارت‌هات چیه؟", "نمونه کارهاتو نشونم بده", "راه‌های تماس"];
CHIP_LABELS.forEach(label => {
  const btn = document.createElement("button");
  btn.className = "chip";
  btn.type = "button";
  btn.textContent = label;
  btn.addEventListener("click", () => sendMessage(label));
  chipsEl.appendChild(btn);
});

// ---------- پیام خوش‌آمد اولیه (همیشه تازه، ذخیره نمی‌شه) ----------

addMessage("bot", { text: pick(GREETINGS) });
