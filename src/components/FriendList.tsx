"use client";

import { User } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FriendsListProps {
  friends: User[];
}

export function FriendsList({ friends }: FriendsListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -5, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  if (friends.length === 0) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <CardTitle>Connections</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No connections yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <Users className="h-5 w-5 text-primary" />
        <CardTitle>Connections</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <motion.div
          className="divide-y"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {friends.map((friend) => (
            <motion.div key={friend.id} variants={itemVariants}>
              <Link
                href={`/profile/${friend.id}`}
                className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
              >
                <Avatar className="border border-primary/10">
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/micah/svg?seed=${friend.avatarSeed}`}
                    alt={friend.name}
                  />
                  <AvatarFallback>{friend.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{friend.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {friend.jobTitle} at {friend.company}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
