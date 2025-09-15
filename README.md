# מר גרר — Mr Grar
אתר סטטי מהיר (RTL, עברית) לשירותי **גרירה וחילוץ** בבאר יעקב והסביבה. נבנה ב‑HTML/CSS/JS בלבד, מותאם SEO ונגיש למובייל, עם סרגל קריאה לפעולה (CTA) דביק ומצגת שלבי שירות בלחיצה בלבד.

**Live:** https://www.mrgrar.co.il/

![Mr Grar](assets/og.jpg)

---

## תכונות עיקריות
- אתרים סטטיים קלים ומהירים (ללא פריימוורק)
- RTL מלא + גופן Heebo
- סרגל CTA דביק: שני טלפונים + WhatsApp
- מצגת שלבים **בלחיצה בלבד** (ללא אוטו‑פליי; יציב וחלק)
- בלוג תחת `/blog/` (עמוד רשימה + פוסטים)
- SEO: תגיות `title/description/canonical` + Open Graph + JSON‑LD (`LocalBusiness`, `BlogPosting`)
- רספונסיבי: יחס תמונה קבוע בשקופיות, גריד מותאם מובייל
- נגישות: מצבי `:focus`, טקסט חלופי לתמונות, מבנה סמנטי

---

## מבנה הפרויקט
```
.
├─ index.html
├─ contact.html
├─ blog/
│  ├─ index.html
│  ├─ how-to-choose-tow-service.html
│  └─ towing-beer-yaakov-guide.html
└─ assets/
   ├─ styles.css
   ├─ main.js
   ├─ logo.png
   ├─ og.jpg
   └─ img/
      ├─ truck-1.jpeg
      ├─ truck-2.jpg
      ├─ truck-3.jpg
      ├─ truck-4.jpg
      └─ truck-5.jpg
```

---

## התחלה מהירה (Local)
אין תהליך Build — פשוט לשרת את התיקייה מקומית.

**VS Code – Live Server**
1. לפתוח את התיקייה ב‑VS Code
2. להתקין את התוסף *Live Server*
3. קליק ימני על `index.html` → **Open with Live Server**

**Python**
```bash
python -m http.server 5173
# http://localhost:5173
```

**Node**
```bash
npx serve .
# או
npx http-server -p 5173 .
```

---

## עריכת תכנים
- **טלפונים ו‑WhatsApp**: בקומפוננטת ה‑CTA ב‑`index.html` וב‑`contact.html` (`tel:` / `wa.me`).
- **כותרת/מותג**: `.brand-text` (דסקטופ) ו‑`.brand-text-phone` (מובייל).
- **שקופיות**: בתוך `<section class="steps">` ב‑`index.html`. התנהגות נשלטת ב‑`assets/main.js` (לחיצה בלבד).
- **בלוג**: להוסיף פוסטים ל‑`/blog/` ולקשר מ‑`/blog/index.html`.
- **SEO**: לעדכן `title`, `meta description` ו‑`canonical` בכל עמוד; לשמור על JSON‑LD עדכני.

---

## פריסה (Deployment)
### GitHub Pages
1. לדחוף את הקוד ל‑GitHub.
2. **Settings → Pages**: לבחור *Deploy from a branch* ולציין את `main` (שורש הרפו).
3. **דומיין מותאם** (רשות): להוסיף את הדומיין ב‑Pages וליצור קובץ `CNAME` בשורש הרפו עם:
   ```
   www.mrgrar.co.il
   ```
4. לעדכן רשומות DNS לפי המסמך של GitHub.

> האתר יעבוד מצוין גם ב‑Netlify / Cloudflare Pages / Vercel / S3+CloudFront וכו'.

---

## בדיקות מהירות ונגישות (צ׳ק‑ליסט)
- [ ] לכל תמונה יש `alt` משמעותי
- [ ] אלמנטים אינטראקטיביים נגישים מקלדת ויש `:focus` נראה
- [ ] `title` ו‑`description` ייחודיים לכל עמוד
- [ ] תמונות לא‑קריטיות עם `loading="lazy"`
- [ ] אופטימיזציית תמונות (`.jpg/.webp`)
- [ ] אימות Structured Data בכלים של Google

---

## רישיון
© Mr Grar, כל הזכויות שמורות.  
התוכן והנכסים בריפו זה הם קנייניים. אין להעתיק/להפיץ/לעשות שימוש חוזר ללא אישור בכתב.
