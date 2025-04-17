import { UserProfile } from "@/components/UserProfile";

async function fetchUserProfile(id: string) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const user = await fetchUserProfile(params.id);

  return <UserProfile user={user} />;
}
