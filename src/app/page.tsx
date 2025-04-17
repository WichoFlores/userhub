import { UserGrid } from "@/components/UserGrid";

async function fetchUsers() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <div className="container py-8 max-w-6xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Directory</h1>
          <p className="text-muted-foreground mt-2">
            Browse through our community members and connect with them.
          </p>
        </div>

        <UserGrid users={users} />
      </div>
    </div>
  );
}
