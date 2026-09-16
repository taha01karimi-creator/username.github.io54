const PROFILE = {
  name: "طاها کریمی",
  intro: "برنامه‌نویس فرانت‌اند و بک‌اند با تسلط بر پایتون و زبان‌های فرانت‌اند",
  skills: [
    "پایتون (بک‌اند / اسکریپت‌نویسی / اتوماسیون)",
    "اچ‌تی‌ام‌ال، سی‌اس‌اس، جاوااسکریپت (فرانت‌اند)",
    "توسعه‌ی کامل وب (فول‌استک)",
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
//                    کد دسترسی (برای رفع محدودیت)
// =========================================================
 
const ACCESS_CODE_STORAGE_KEY = "assistant_access_code";
 
function getAccessCode(){
  return localStorage.getItem(ACCESS_CODE_STORAGE_KEY) || "";
}
 
function setAccessCode(code){
  if(code) localStorage.setItem(ACCESS_CODE_STORAGE_KEY, code);
  else localStorage.removeItem(ACCESS_CODE_STORAGE_KEY);
  updateCodeButtonState();
}
 
function updateCodeButtonState(){
  const btn = document.getElementById("code-btn");
  if(!btn) return;
  btn.classList.toggle("is-active", !!getAccessCode());
}
 
document.getElementById("code-btn").addEventListener("click", () => {
  const current = getAccessCode();
  const entered = window.prompt(
    current ? "کد دسترسی فعلی ثبت شده. برای تغییر، کد جدید رو بنویس (یا خالی بذار و OK بزن تا پاک بشه):" : "کد دسترسی رو وارد کن:",
    current
  );
  if(entered === null) return; // کاربر Cancel زد
  setAccessCode(entered.trim());
});
 
updateCodeButtonState();
 
// =========================================================
//                        رابط کاربری
// =========================================================
 
const chatEl = document.getElementById("chat");
const formEl = document.getElementById("composer-form");
const inputEl = document.getElementById("text-input");
const chipsEl = document.getElementById("chips");
const sendBtn = document.getElementById("send-btn");
const attachBtn = document.getElementById("attach-btn");
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");
const imagePreviewThumb = imagePreview.querySelector(".thumb");
const removeImageBtn = imagePreview.querySelector(".remove-image");
 
let pendingImage = null; // data URL عکس انتخاب‌شده که هنوز ارسال نشده
 
// عکس‌های موبایل معمولاً خیلی بزرگ‌اند (چند مگابایت)؛ قبل از ارسال
// آن را کوچک و فشرده می‌کنیم تا هم سریع‌تر بره، هم هوش مصنوعی زودتر جواب بده.
function resizeImageFile(file, maxDim = 1024, quality = 0.72){
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if(width > height && width > maxDim){
        height = Math.round(height * (maxDim / width));
        width = maxDim;
      } else if(height > maxDim){
        width = Math.round(width * (maxDim / height));
        height = maxDim;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(objectUrl);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("خواندن تصویر ناموفق بود."));
    };
    img.src = objectUrl;
  });
}
 
function addMessage(role, content, opts = {}){
  const div = document.createElement("div");
  div.className = "msg " + role + (opts.error ? " error" : "");
 
  if(content.image){
    const img = document.createElement("img");
    img.className = "msg-image";
    img.src = content.image;
    img.alt = "تصویر ارسالی";
    div.appendChild(img);
  }
 
  const textSpan = document.createElement("div");
  if(content.html) textSpan.innerHTML = content.html;
  else if(content.text) textSpan.textContent = content.text;
  div.appendChild(textSpan);
 
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
 
// ---------- ذخیره‌ی یک چت واحد (localStorage) ----------
 
const CHAT_STORAGE_KEY = "assistant_chat_v1";
let conversationHistory = []; // [{role: 'user'|'model', content: '...'}] -> برای فرستادن به بک‌اند
let renderedLog = [];         // آنچه واقعاً روی صفحه نشون داده شده -> برای بازسازی بعد از رفرش
 
function saveChat(){
  try{
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify({
      history: conversationHistory,
      rendered: renderedLog,
    }));
  }catch(e){ /* localStorage پر یا در دسترس نیست، مشکلی نیست */ }
}
 
function loadChat(){
  try{
    const raw = localStorage.getItem(CHAT_STORAGE_KEY);
    if(!raw) return false;
    const data = JSON.parse(raw);
    if(!data.rendered || !data.rendered.length) return false;
 
    conversationHistory = data.history || [];
    renderedLog = [];
    data.rendered.forEach(item => {
      addMessage(item.role, item);
      renderedLog.push(item);
    });
    return true;
  }catch(e){
    return false;
  }
}
 
function pushRendered(role, content){
  const entry = { role, ...content };
  renderedLog.push(entry);
  saveChat();
}
 
let backendAvailable = true;
 
async function askBackend(message, image){
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);
 
  let res;
  try{
    res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        history: conversationHistory,
        image: image || null,
        access_code: getAccessCode(),
      }),
      signal: controller.signal,
    });
  }catch(err){
    if(err.name === "AbortError"){
      throw new Error("درخواست خیلی طول کشید (۲۵ ثانیه). اگه عکس فرستادی، دوباره با عکس کوچیک‌تر امتحان کن.");
    }
    throw new Error("اتصال به سرور برقرار نشد.");
  }finally{
    clearTimeout(timeoutId);
  }
 
  let data = {};
  try{ data = await res.json(); }catch(e){ /* بدنه‌ی نامعتبر */ }
 
  if(res.status === 429){
    const err = new Error(data.error || "محدودیت پیام رایگان تمام شده.");
    err.rateLimited = true;
    throw err;
  }
  if(!res.ok || data.error){
    throw new Error(data.error || "خطای ارتباط با سرور.");
  }
  return data.reply;
}
 
async function sendMessage(text, imageDataUrl){
  const trimmed = (text || "").trim();
  if(!trimmed && !imageDataUrl) return;
 
  const userContent = { text: trimmed || undefined, image: imageDataUrl || undefined };
  addMessage("user", userContent);
  pushRendered("user", userContent);
 
  inputEl.value = "";
  clearPendingImage();
  setComposerDisabled(true);
  showTyping();
 
  try{
    try{
      if(!backendAvailable) throw new Error("skip-to-local");
 
      const replyText = await askBackend(trimmed, imageDataUrl);
      conversationHistory.push({ role: "user", content: trimmed || "(تصویر ارسال شد)" });
      conversationHistory.push({ role: "model", content: replyText });
 
      const botContent = { text: replyText };
      addMessage("bot", botContent);
      pushRendered("bot", botContent);
 
    }catch(err){
      if(err && err.rateLimited){
        const botContent = { text: "⛔ " + err.message };
        addMessage("bot", botContent, { error: true });
        pushRendered("bot", { ...botContent, error: true });
        return;
      }
 
      if(err && err.message && err.message !== "skip-to-local"){
        // یه خطای واقعی بود (نه فقط چون بک‌اند از قبل خاموش تشخیص داده شده بود)
        const botContent = { text: "⚠️ " + err.message + " (به‌جاش از پاسخ‌گوی محلی استفاده می‌کنم)" };
        addMessage("bot", botContent, { error: true });
        pushRendered("bot", { ...botContent, error: true });
      }
 
      // خطای شبکه یا نبود بک‌اند: برگرد به پاسخ‌گوی محلی و آفلاین
      backendAvailable = false;
      await new Promise(r => setTimeout(r, 300 + Math.random() * 200));
      const local = respond(trimmed || "سلام");
      const botContent = local.html ? { html: local.html } : { text: local.text };
      addMessage("bot", botContent);
      pushRendered("bot", botContent);
    }
  } finally {
    // این بخش همیشه اجرا می‌شه، حتی اگه هر خطای پیش‌بینی‌نشده‌ای رخ بده —
    // تا هیچ‌وقت نشونه‌ی «در حال تایپ» برای همیشه روی صفحه گیر نکنه
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
  sendMessage(inputEl.value, pendingImage);
});
 
// ---------- آپلود/پیوست عکس ----------
 
attachBtn.addEventListener("click", () => fileInput.click());
 
fileInput.addEventListener("change", async () => {
  const file = fileInput.files && fileInput.files[0];
  if(!file) return;
 
  if(!file.type.startsWith("image/")){
    window.alert("فقط فایل تصویری قابل پیوست است.");
    fileInput.value = "";
    return;
  }
  if(file.size > 15 * 1024 * 1024){
    window.alert("حجم تصویر باید کمتر از ۱۵ مگابایت باشد.");
    fileInput.value = "";
    return;
  }
 
  try{
    pendingImage = await resizeImageFile(file);
    imagePreviewThumb.src = pendingImage;
    imagePreview.classList.add("show");
    attachBtn.classList.add("is-active");
  }catch(e){
    window.alert("پردازش تصویر ناموفق بود، لطفاً عکس دیگری امتحان کن.");
    fileInput.value = "";
  }
});
 
function clearPendingImage(){
  pendingImage = null;
  fileInput.value = "";
  imagePreview.classList.remove("show");
  attachBtn.classList.remove("is-active");
}
 
removeImageBtn.addEventListener("click", clearPendingImage);
 
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
 
// ---------- شروع ----------
 
const hadSavedChat = loadChat();
if(!hadSavedChat){
  const greeting = { text: pick(GREETINGS) };
  addMessage("bot", greeting);
  pushRendered("bot", greeting);
}
 
