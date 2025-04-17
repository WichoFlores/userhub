# UserHub Web App

This project is a technical test. It's a lightweight web application built with **Next.js 15**, designed to demonstrate API routing, dynamic pages, and mock data handling in a clean, scalable architecture.

## ✨ Features

- 🧑 Main page that lists users.
- 🔍 Clickable user profiles with detailed information.
- 👥 Users have friends (relationships).
- 🔁 Profile pages show a list of friends with navigation between them.
- 📡 All data is served via API endpoints within the Next.js app.
- 🧪 Mock data, no database.

## 📂 Project Structure

```
/src
├── app/         # App Router pages and routes
├── components/  # UI components (UserCard, FriendList, etc.)
├── lib/         # Data loaders & mock logic
└── types/       # TypeScript interfaces
```

## 🚀 Getting Started

1. Clone the repo:

```bash
git clone https://github.com/WichoFlores/userhub.git
cd userhub
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) – for basic page transitions

## 🧪 Mock Data

All user data is seeded and returned from static mocks under `lib/mockData.ts`, with relationships defined by user IDs.

---

## 📁 Extra Notes

See [`CONSIDERATIONS.md`](./CONSIDERATIONS.md) for detailed implementation decisions, architecture notes, and future improvements.

---

## 📝 License

This project is open-source and provided as part of a technical assessment.
