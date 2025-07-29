# 📸 Gallery Pexels

A modern image gallery app built with **Next.js 15**, **Tailwind CSS**, **TypeScript**, and **Zod**, using the **Pexels API** to fetch and display beautiful images.

## 🌐 Live Demo

🔗 [gallery-pexels.vercel.app](https://gallery-pexels.vercel.app)

---

## 🚀 Features

- 🔎 Search images by keyword using Pexels API
- 💡 Light/Dark mode support with CSS variables
- 🖼️ Blurred placeholders with Base64 for smooth loading
- 🌐 Infinite scroll up to 80 images
- 📱 Responsive design with Tailwind CSS
- 🧠 Type-safe API schema validation with Zod
- ⚡ Server-side rendering and optimization (Next.js App Router)

---

## 📦 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Pexels API](https://www.pexels.com/api/)
- [Plaiceholder](https://plaiceholder.co/) (for blurred images)

---

## 🛠️ Getting Started

```bash
# 1. Clone the project
git clone https://github.com/vahab-amz/gallery-pexels.git

# 2. Navigate to the folder
cd gallery-pexels

# 3. Install dependencies
npm install

# 4. Add your Pexels API Key in .env.local
PEXELS_API_KEY=your_api_key_here

# 5. Run locally
npm run dev
