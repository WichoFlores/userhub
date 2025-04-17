# Considerations

## 🎯 Objective

Build a small-scale web app that lists users, enables profile navigation, and displays friend relationships, using mock data and Next.js API routes.

---

## 📐 Architecture Decisions

- **App Router (Next.js 15)**: Leveraged the latest App Router features, such as server and client component separation and route segments.
- **No Database**: Used static mock data with string IDs and in-memory logic to simulate user relations.
- **API Routes**: Followed the instruction to use API routes (`/api/users`, `/api/users/[id]`) to serve user data.
- **TypeScript-first**: Created shared types for strong typing and consistency across components and API logic.

---

## 🔄 Data Modeling

```ts
interface User {
  id: string;
  name: string;
  avatarSeed: string;
  email: string;
  location: string;
  bio: string;
  jobTitle: string;
  company: string;
  friendIds: string[];
  friends?: User[];
}
```

- Friend relationships are bidirectional and resolved manually in the logic.
- Friend list is rendered from the user’s `friends` array by cross-referencing other user objects.

---

## ⚛️ Server vs Client Components

- **Pages** and **data fetching** are server components for optimal SSR performance.
- **Interactive components** like animations and transitions (Framer Motion) are client components.
- This separation ensures faster loading and a better user experience while keeping the bundle size minimal.

---

## 🧪 Testing Approach

- Manual testing through navigation and profile views.
- Verified friend linking and navigation loops between users.

---

## 🧩 UI Stack Justification

- **TailwindCSS**: Utility-first styling allows for rapid prototyping and clean class-based design without writing custom CSS. Encourages consistent spacing, typography, and responsiveness.
- **shadcn/ui**: Offers pre-built, accessible, and styled components that integrate smoothly with TailwindCSS. Used for a clean and consistent UI with minimal setup.
- **Framer Motion**: Enables performant animations, used to enhance transitions and interactivity. Helps demonstrate client component logic and improves perceived performance.

---

## 🎯 Challenges

- **NextJS Evolving Nature**: It feels like there's a new NextJS version every week. It's rough to keep up with the changes!
- **Dynamic Routing Complexity**: Setting up dynamic API routes and ensuring the right data was fetched for user profiles was a bit tricky because of the data fetching patterns NextJS expects. I had to be extra careful to avoid mismatches or errors along the way.
- **Friend Relationship Resolution**: Simulating bidirectional relationships with mock data turned out to be more challenging than I expected because I had to modify them manually.
- **Cache Management**: I initially overlooked the need to revalidate the user list to prevent stale data from being served.
- **Server vs Client Component Balance**: Deciding which components should be server-rendered versus client-rendered. I had to plan it out before even starting, specially because I wanted to use Framer Motion.
- **TypeScript Integration**: Making sure everything was type-safe across API routes, components, and mock data took some extra effort. I think there might be better ways to do it.
- **Animation Performance**: Getting smooth animations with Framer Motion while keeping things optimized and snappy.

---

## 🙋 Why This Design

- The structure is intentionally close to production-ready without overengineering.
- Using API routes keeps the logic extensible if a real database is added later.
- Keeping mock data and types isolated makes it easy to replace with real data sources.
- The stack was chosen to balance developer experience, performance, and scalability.
