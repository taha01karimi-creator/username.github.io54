"""
بک‌اند دستیار هوشمند (متصل به Groq - رایگان)
 
این سرور:
  1) خود وب‌سایت (index.html + style.css + script.js) رو نمایش می‌ده
  2) درخواست‌های چت رو می‌گیره، به‌صورت امن به Groq API وصل می‌شه
     (کلید فقط اینجا، روی سرور، می‌مونه و هیچ‌وقت توی مرورگر دیده نمی‌شه)
  3) اگه پیام همراه با عکس باشه، از مدل تصویری Groq استفاده می‌کنه
  4) محدودیت پیام رایگان: بدون کد دسترسی، هر کاربر (بر اساس IP) فقط چند
     پیام رایگان در هر ۲۴ ساعت داره؛ با وارد کردن کد دسترسی، نامحدوده.
 
نصب پیش‌نیاز (یک بار کافیست):
    pip install flask flask-cors requests
 
گرفتن کلید Groq (رایگان، بدون کارت بانکی):
    1) برو به https://console.groq.com/keys
    2) ثبت‌نام/ورود کن
    3) روی «Create API Key» بزن و کلید رو کپی کن (فقط یک‌بار نشون داده می‌شه)
 
تنظیم کلید (یکی از این دو راه):
    راه ۱ (ساده‌تر، فقط برای تست محلی): مقدار GROQ_API_KEY رو پایین پر کن.
    راه ۲ (امن‌تر، برای سرور آنلاین): متغیر محیطی تنظیم کن.
        ویندوز (PowerShell):
            setx GROQ_API_KEY "gsk_...."
            (بعدش یک ترمینال جدید باز کن)
 
اجرا:
    python3 app.py
سپس در مرورگر برو به: http://127.0.0.1:5000
"""
 
import os
import time
import threading
 
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests
 
# =========================================================
#                       تنظیمات (قابل ویرایش)
# =========================================================
 
# ⚠️ هیچ‌وقت کلید واقعی رو مستقیم اینجا ننویس اگه قراره این فایل جایی
# عمومی (مثل گیت‌هاب) بره؛ به‌جاش متغیر محیطی GROQ_API_KEY رو تنظیم کن.
GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "")
 
GROQ_MODEL = "openai/gpt-oss-120b"          # مدل متنی معمولی
GROQ_VISION_MODEL = "qwen/qwen3.6-27b"      # مدل تصویری (وقتی عکس ارسال بشه)
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"
 
# کد دسترسی: با این کد، محدودیت پیام رایگان برداشته می‌شه (برای خود صاحب سایت)
ACCESS_CODE = "0246"
 
# بدون کد دسترسی، هر IP فقط همین تعداد پیام رایگان در هر ۲۴ ساعت داره
FREE_MESSAGES_LIMIT = 3
BLOCK_DURATION_SECONDS = 24 * 60 * 60
 
PROFILE = {
    "نام": "طاها کریمی",
    "معرفی": "برنامه‌نویس فرانت‌اند و بک‌اند با تسلط بر پایتون و زبان‌های فرانت‌اند",
    "مهارت‌ها": [
        "پایتون (بک‌اند / اسکریپت‌نویسی / اتوماسیون)",
        "اچ‌تی‌ام‌ال، سی‌اس‌اس، جاوااسکریپت (فرانت‌اند)",
        "توسعه‌ی کامل وب (فول‌استک)",
        "کار با ای‌پی‌آی‌ها و کتابخانه‌های دانلود رسانه",
    ],
    "ایمیل": "taha.01.karimi@gmail.com",
    "شماره_تماس": "09026324574",
    "اینستاگرام": "@taha0246titi",
}
 
PROJECTS = [
    {"نام": "محاسبه‌گر سن", "توضیح": "برنامه‌ای که با گرفتن تاریخ تولد کاربر، سن دقیق را محاسبه می‌کند.", "تکنولوژی": ["پایتون", "وب"]},
    {"نام": "فروشگاه اینترنتی", "توضیح": "وب‌سایت فروشگاهی با سبد خرید، ثبت سفارش و پنل مدیریت.", "تکنولوژی": ["پایتون", "وب", "دیتابیس"]},
    {"نام": "دانلودر ویدیو و موزیک (اینستاگرام و یوتیوب)", "توضیح": "دانلود ویدیو/صدا از لینک اینستاگرام یا یوتیوب.", "تکنولوژی": ["پایتون", "yt-dlp"]},
    {"نام": "مبدل واحدها", "توضیح": "تبدیل واحدهای طول، وزن، دما و ارز.", "تکنولوژی": ["پایتون"]},
    {"نام": "لیست کارها", "توضیح": "مدیریت کارهای روزانه با افزودن/حذف/ویرایش.", "تکنولوژی": ["پایتون", "وب"]},
    {"نام": "تولیدکننده رمز عبور امن", "توضیح": "ساخت رمز عبور تصادفی و قوی.", "تکنولوژی": ["پایتون"]},
    {"نام": "کوتاه‌کننده لینک", "توضیح": "تبدیل لینک طولانی به کوتاه و قابل اشتراک‌گذاری.", "تکنولوژی": ["پایتون", "وب"]},
]
 
 
def build_system_prompt() -> str:
    skills_text = "\n".join(f"- {s}" for s in PROFILE["مهارت‌ها"])
    projects_text = "\n".join(
        f"- {p['نام']}: {p['توضیح']} ({'، '.join(p['تکنولوژی'])})" for p in PROJECTS
    )
    return f"""تو دستیار هوشمند شخصی «{PROFILE['نام']}» هستی و دقیقاً مثل یک هوش مصنوعی
معمولی (شبیه ChatGPT) با کاربر گفتگو می‌کنی: به سلام‌واحوال‌پرسی طبیعی جواب می‌دی،
به هر سؤال عمومی هم کامل و مفید پاسخ می‌دی، و در کنارش این اطلاعات درباره‌ی
{PROFILE['نام']} رو می‌شناسی و هروقت لازم بود ازشون استفاده می‌کنی:
 
معرفی: {PROFILE['معرفی']}
 
مهارت‌ها:
{skills_text}
 
اطلاعات تماس:
- ایمیل: {PROFILE['ایمیل']}
- شماره تماس: {PROFILE['شماره_تماس']}
- اینستاگرام: {PROFILE['اینستاگرام']}
 
نمونه‌کارها:
{projects_text}
 
قوانین: همیشه فارسی، دوستانه، طبیعی و کوتاه و خوانا جواب بده. اگه کاربر عکس
فرستاد، محتوای عکس رو توضیح بده یا به سؤالش دربارهٔ عکس جواب بده."""
 
 
SYSTEM_PROMPT = build_system_prompt()
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
 
app = Flask(__name__, static_folder=None)
CORS(app)
 
 
# =========================================================
#             محدودیت پیام رایگان (بر اساس IP)
# =========================================================
 
_rate_limit_lock = threading.Lock()
_rate_limit_store = {}  # ip -> {"count": int, "window_start": ts, "blocked_until": ts|None}
 
 
def get_client_ip() -> str:
    forwarded = request.headers.get("X-Forwarded-For", "")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.remote_addr or "unknown"
 
 
def check_rate_limit(ip: str):
    """اگه اجازه داره True برمی‌گردونه، وگرنه (False, پیام‌خطا)."""
    now = time.time()
    with _rate_limit_lock:
        record = _rate_limit_store.get(ip)
        if record is None:
            record = {"count": 0, "window_start": now, "blocked_until": None}
            _rate_limit_store[ip] = record
 
        if record["blocked_until"] and now < record["blocked_until"]:
            remaining_h = (record["blocked_until"] - now) / 3600
            return False, f"محدودیت پیام رایگان تمام شده. حدود {remaining_h:.1f} ساعت دیگه دوباره امتحان کن، یا کد دسترسی رو وارد کن."
 
        # هر ۲۴ ساعت شمارنده ریست می‌شه
        if now - record["window_start"] > BLOCK_DURATION_SECONDS:
            record["count"] = 0
            record["window_start"] = now
            record["blocked_until"] = None
 
        if record["count"] >= FREE_MESSAGES_LIMIT:
            record["blocked_until"] = now + BLOCK_DURATION_SECONDS
            return False, "محدودیت پیام رایگان (بدون کد دسترسی) تمام شد. تا ۲۴ ساعت دیگه نمی‌تونی پیام بدی، مگر با کد دسترسی درست."
 
        record["count"] += 1
        return True, None
 
 
# =========================================================
#                          مسیرها (Routes)
# =========================================================
 
@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")
 
 
@app.route("/style.css")
def style():
    return send_from_directory(BASE_DIR, "style.css")
 
 
@app.route("/script.js")
def script():
    return send_from_directory(BASE_DIR, "script.js")
 
 
@app.route("/api/chat", methods=["POST"])
def chat():
    if not GROQ_API_KEY:
        return jsonify({"error": "کلید GROQ_API_KEY تنظیم نشده."}), 500
 
    data = request.get_json(force=True) or {}
    user_message = (data.get("message") or "").strip()
    history = data.get("history", [])  # [{role: 'user'|'model', content: '...'}]
    image_data_url = data.get("image")  # اختیاری: data URL از یک تصویر
    access_code = (data.get("access_code") or "").strip()
 
    if not user_message and not image_data_url:
        return jsonify({"error": "پیام خالی است."}), 400
 
    is_owner = access_code == ACCESS_CODE
    if not is_owner:
        allowed, err_msg = check_rate_limit(get_client_ip())
        if not allowed:
            return jsonify({"error": err_msg}), 429
 
    model = GROQ_MODEL
    if image_data_url:
        model = GROQ_VISION_MODEL
        user_content = [
            {"type": "text", "text": user_message or "این عکس رو توضیح بده."},
            {"type": "image_url", "image_url": {"url": image_data_url}},
        ]
    else:
        user_content = user_message
 
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for turn in history:
        role = "assistant" if turn.get("role") == "model" else "user"
        messages.append({"role": role, "content": turn.get("content", "")})
    messages.append({"role": "user", "content": user_content})
 
    payload = {"model": model, "messages": messages}
    if image_data_url:
        # برای عکس، حالت «فکر کردن عمیق» رو خاموش می‌کنیم تا سریع‌تر جواب بده
        payload["reasoning_effort"] = "none"
 
    try:
        resp = requests.post(
            GROQ_URL,
            headers={
                "Authorization": f"Bearer {GROQ_API_KEY}",
                "Content-Type": "application/json",
            },
            json=payload,
            timeout=30,
        )
        resp.raise_for_status()
        result = resp.json()
        reply = result["choices"][0]["message"]["content"]
        return jsonify({"reply": reply})
    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"خطا در ارتباط با Groq: {e}"}), 502
    except (KeyError, IndexError):
        return jsonify({"error": "پاسخ نامعتبر از Groq دریافت شد."}), 502
 
 
if __name__ == "__main__":
    if not GROQ_API_KEY:
        print("⚠️  هشدار: GROQ_API_KEY تنظیم نشده. راهنمای بالای فایل رو ببین.")
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
 
