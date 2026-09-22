
"""
بک‌اند دستیار هوشمند (متصل به Groq - رایگان)

این سرور:
  1) خود وب‌سایت (index.html + style.css + script.js) رو نمایش می‌ده
  2) درخواست‌های چت رو می‌گیره، به‌صورت امن به Groq API وصل می‌شه
     (کلید فقط اینجا، روی سرور، می‌مونه و هیچ‌وقت توی مرورگر دیده نمی‌شه)

نصب پیش‌نیاز (یک بار کافیست):
    pip install flask flask-cors requests

گرفتن کلید Groq (رایگان، بدون کارت بانکی):
    1) برو به https://console.groq.com/keys
    2) ثبت‌نام/ورود کن
    3) روی «Create API Key» بزن و کلید رو کپی کن (فقط یک‌بار نشون داده می‌شه)

تنظیم کلید (یکی از این دو راه):
    راه ۱ (ساده‌تر، فقط برای تست محلی): مقدار GROQ_API_KEY رو پایین پر کن.
    راه ۲ (امن‌تر، برای سرور آنلاین): متغیر محیطی تنظیم کن.

اجرا:
    python3 app.py
سپس در مرورگر برو به: http://127.0.0.1:5000
"""

import os

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests

# =========================================================
#                       تنظیمات (قابل ویرایش)
# =========================================================

# ⚠️ هیچ‌وقت کلید واقعی رو مستقیم اینجا ننویس اگه قراره این فایل جایی
# عمومی (مثل گیت‌هاب) بره؛ به‌جاش متغیر محیطی GROQ_API_KEY رو تنظیم کن.
GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "")
GROQ_MODEL = "openai/gpt-oss-120b"
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

PROFILE = {
    "نام": "طاها کریمی",
    "معرفی": "برنامه‌نویس فرانت‌اند و بک‌اند با تسلط بر پایتون و زبان‌های فرانت‌اند",
    "مهارت‌ها": [
        "پایتون (بک‌اند / اسکریپت‌نویسی / اتوماسیون)",
        "اچ‌تی‌ام‌ال، سی‌اس‌اس، جاوااسکریپت (فرانت‌اند)",
        "توسعه‌ی کامل وب (فول‌استک)",
        "ساخت ربات و دستیار هوشمند با پایتون (دقیقاً مثل همین سایتی که الان داری باهاش صحبت می‌کنی)",
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
    {"نام": "همین دستیار هوشمند", "توضیح": "یک دستیار/ربات هوشمند وب که با پایتون (بک‌اند Flask) و جاوااسکریپت (فرانت‌اند) ساخته شده و به هوش مصنوعی وصله.", "تکنولوژی": ["پایتون", "Flask", "وب", "هوش مصنوعی"]},
]


def build_system_prompt() -> str:
    skills_text = "\n".join(f"- {s}" for s in PROFILE["مهارت‌ها"])
    projects_text = "\n".join(
        f"- {p['نام']}: {p['توضیح']} ({'، '.join(p['تکنولوژی'])})" for p in PROJECTS
    )
    return f"""تو دستیار هوشمند شخصی «{PROFILE['نام']}» هستی و دقیقاً مثل یک هوش مصنوعی
معمولی (شبیه ChatGPT) با کاربر گفتگو می‌کنی: به هر سؤالی که پرسیده بشه (سلام و
احوال‌پرسی، سؤالات عمومی، فنی، هرچی) کامل، دقیق و مفید جواب بده — مثل یک هوش
مصنوعی واقعی و قدرتمند رفتار کن، نه یک بات ساده.

در کنار این، تو نماینده و ویترین توانایی‌های «{PROFILE['نام']}» هم هستی. این
اطلاعات رو درباره‌اش می‌دونی:

معرفی: {PROFILE['معرفی']}

مهارت‌ها:
{skills_text}

اطلاعات تماس:
- ایمیل: {PROFILE['ایمیل']}
- شماره تماس: {PROFILE['شماره_تماس']}
- اینستاگرام: {PROFILE['اینستاگرام']}

نمونه‌کارها:
{projects_text}

قوانین مهم:
1. همیشه فارسی، دوستانه، طبیعی و کوتاه/خوانا جواب بده.
2. هر وقت فرصت مناسب پیش اومد (مثلاً وقتی کاربر می‌پرسه چی بلدی، چیکار می‌کنی،
   کی این سایت رو ساخته، یا حتی توی جواب سؤالات فنی/برنامه‌نویسی)، با افتخار و
   طبیعی یادآوری کن که خودِ همین دستیار هوشمند رو {PROFILE['نام']} با پایتون
   (بک‌اند) و جاوااسکریپت (فرانت‌اند) ساخته، و اینکه او هم فرانت‌اند بلده هم
   بک‌اند، و در ساخت ربات و ابزارهای هوشمند با پایتون مهارت داره. این معرفی رو
   طبیعی و مثل تعریف از یک همکار خوب بگو، نه تبلیغ اجباری و خسته‌کننده.
3. اگه کاربر پرسید چطور می‌تونه با {PROFILE['نام']} کار کنه یا پروژه بسپاره،
   راه‌های تماس بالا رو بده.
4. جواب‌ها باید کامل و کاربردی باشن؛ از پاسخ‌های خیلی کوتاه و کم‌محتوا پرهیز کن."""


SYSTEM_PROMPT = build_system_prompt()
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=None)
CORS(app)


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

    if not user_message:
        return jsonify({"error": "پیام خالی است."}), 400

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for turn in history:
        role = "assistant" if turn.get("role") == "model" else "user"
        messages.append({"role": role, "content": turn.get("content", "")})
    messages.append({"role": "user", "content": user_message})

    payload = {"model": GROQ_MODEL, "messages": messages}

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
