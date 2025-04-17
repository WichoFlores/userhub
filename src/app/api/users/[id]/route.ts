import { NextResponse } from "next/server";
import { getUserById, getUserFriends } from "@/lib/mockData";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  // Added await because TurboPack issues a warning when using params directly
  const { id } = await params;

  const user = getUserById(id);

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const friends = getUserFriends(id);

  return NextResponse.json({
    ...user,
    friends,
  });
}
