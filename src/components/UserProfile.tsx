"use client";

import { User } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Mail, MapPin, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function UserProfile({ user }: { user: User }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div className="md:col-span-2 space-y-6" variants={itemVariants}>
          <Card className="overflow-hidden">
            <CardHeader className="relative pb-0 p-0">
              <div className="h-32 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 px-6">
                <motion.div
                  whileHover={{ rotate: 3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Avatar className="h-24 w-24 border-4 border-background mt-[-3rem] bg-background shadow-lg">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/micah/svg?seed=${user.avatarSeed}`}
                      alt={user.name}
                    />
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </motion.div>
                <div className="space-y-1 py-4">
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">
                    {user.jobTitle} at {user.company}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{user.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <UserCircle2 className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">About</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {user.bio}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
