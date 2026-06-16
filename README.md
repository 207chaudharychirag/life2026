# DPS — Property Dealing & Construction Website

A fast, modern, mobile-friendly one-page website for **DPS**, built with
Next.js (App Router). No database, no API keys — just edit one file and deploy.

## 🚀 Run it locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

To create a production build:

```bash
npm run build
npm start
```

## ✏️ Edit your business details (important)

**Everything you need to change lives in one file:** [`data/site.js`](data/site.js).

Open it and replace the placeholders with real values:

| Field | What to put |
|-------|-------------|
| `phone` | Office phone number |
| `whatsapp` | WhatsApp number — digits only, with country code (e.g. `9198xxxxxxxx`) |
| `email` | Contact email |
| `address` | Building/shop, street, city, state, pincode |
| `mapsLink` | The Google Maps share link for the office |
| `hours` | Opening hours |
| `stats` | The four highlight numbers (years, clients, etc.) |
| `social` | Facebook / Instagram / YouTube links (leave `""` to hide) |

You can also edit the service lists (`propertyServices`,
`constructionServices`) and the showcase items (`projects`) in the same file.

> The map and "Get Directions" button use the address + `mapsLink`, so once you
> paste the real address everything points to the right place automatically.

## 📂 Project structure

```
data/site.js            ← all business content (edit this)
app/page.jsx            ← page layout (orders the sections)
app/globals.css         ← styling / theme colours
app/components/         ← Header, Hero, About, Services, Projects, WhyUs, Contact, Footer
```

## 🎨 Change the colours

Edit the variables at the top of [`app/globals.css`](app/globals.css):

```css
--navy: #0b1f3a;   /* main brand colour */
--gold: #c9a24b;   /* accent colour */
```

## 🌐 Deploy (free options)

- **Vercel** (easiest for Next.js): push to GitHub, import the repo at
  [vercel.com](https://vercel.com), done.
- Any Node host: run `npm run build` then `npm start`.

---

### Still to fill in
The contact details in `data/site.js` are placeholders. Send the real phone,
address and Maps link and they can be dropped straight in.
