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
  // Added await because TurboPack issues a warning when using params directly
  const { id } = await params;

  const user = await fetchUserProfile(id);

  return <UserProfile user={user} />;
}
