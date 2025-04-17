import { getUsers } from "@/lib/mockData";

export async function GET() {
  const users = await getUsers();
  return Response.json(users);
}
