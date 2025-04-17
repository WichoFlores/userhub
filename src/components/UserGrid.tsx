import { User } from "@/types";
import { UserCard } from "./UserCard";

interface UserGridProps {
  users: User[];
}

export function UserGrid({ users }: UserGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
