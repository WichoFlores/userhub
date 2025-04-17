"use client";

import { User } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const avatarControls = useAnimation();

  return (
    <Link href={`/profile/${user.id}`} className="block">
      <motion.div
        whileHover={{ scale: 1.01 }}
        onHoverStart={() => avatarControls.start({ rotate: 5 })}
        onHoverEnd={() => avatarControls.start({ rotate: 0 })}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="overflow-hidden h-full min-h-[182px] py-0">
          <div className="h-3 bg-gradient-to-r from-primary/30 to-primary/10"></div>
          <CardContent className="p-6">
            <div className="flex items-center text-left flex-row gap-4">
              <motion.div
                className="relative"
                animate={avatarControls}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl opacity-50"></div>
                <Avatar className="h-16 w-16 border-2 border-primary/10 relative">
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/micah/svg?seed=${user.avatarSeed}`}
                    alt={user.name}
                  />
                  <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
              </motion.div>
              <div className="space-y-1">
                <h3 className="font-medium text-lg leading-none">
                  {user.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {user.jobTitle} at {user.company}
                </p>

                <div className="flex flex-wrap justify-start items-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {user.friendIds?.length}{" "}
                    {user.friendIds?.length === 1
                      ? "connection"
                      : "connections"}
                  </Badge>
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {user.location}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
