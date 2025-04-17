import { User } from "@/types";

export const users: User[] = [
  {
    id: "1",
    name: "Olivia Johnson",
    avatarSeed: "olivia",
    email: "olivia.johnson@example.com",
    location: "San Francisco, CA",
    bio: "Product designer with a passion for creating beautiful, functional interfaces. I love hiking and photography in my free time.",
    jobTitle: "Senior Product Designer",
    company: "DesignMaster",
    friendIds: ["2", "3", "5"],
  },
  {
    id: "2",
    name: "Ethan Williams",
    avatarSeed: "ethan",
    email: "ethan.williams@example.com",
    location: "New York, NY",
    bio: "Full-stack developer specializing in React and Node.js. Coffee enthusiast and amateur chess player.",
    jobTitle: "Senior Developer",
    company: "TechFusion",
    friendIds: ["1", "4"],
  },
  {
    id: "3",
    name: "Sophia Martinez",
    avatarSeed: "sophia",
    email: "sophia.martinez@example.com",
    location: "Austin, TX",
    bio: "UX researcher focused on creating accessible digital experiences. Plant collector and avid reader.",
    jobTitle: "UX Research Lead",
    company: "AccessibleTech",
    friendIds: ["1", "5", "7"],
  },
  {
    id: "4",
    name: "James Thompson",
    avatarSeed: "james",
    email: "james.thompson@example.com",
    location: "Seattle, WA",
    bio: "Backend engineer specializing in distributed systems. Enjoys hiking the Pacific Northwest and craft beer.",
    jobTitle: "Backend Engineer",
    company: "CloudScale",
    friendIds: ["2", "8"],
  },
  {
    id: "5",
    name: "Emma Davis",
    avatarSeed: "emma",
    email: "emma.davis@example.com",
    location: "Chicago, IL",
    bio: "Marketing specialist with a background in psychology. Music lover and amateur pianist.",
    jobTitle: "Marketing Manager",
    company: "BrandBoost",
    friendIds: ["1", "3", "9"],
  },
  {
    id: "6",
    name: "Noah Wilson",
    avatarSeed: "noah",
    email: "noah.wilson@example.com",
    location: "Denver, CO",
    bio: "DevOps engineer passionate about automation and efficiency. Mountain biker and outdoor enthusiast.",
    jobTitle: "DevOps Lead",
    company: "InfraCore",
    friendIds: [],
  },
  {
    id: "7",
    name: "Ava Brown",
    avatarSeed: "ava",
    email: "ava.brown@example.com",
    location: "Portland, OR",
    bio: "Frontend developer focused on creating delightful user experiences. Tea connoisseur and watercolor artist.",
    jobTitle: "Frontend Developer",
    company: "PixelPerfect",
    friendIds: ["3", "9", "11"],
  },
  {
    id: "8",
    name: "Liam Garcia",
    avatarSeed: "liam",
    email: "liam.garcia@example.com",
    location: "Miami, FL",
    bio: "Mobile developer specializing in cross-platform solutions. Beach volleyball player and amateur chef.",
    jobTitle: "Mobile Developer",
    company: "AppWorks",
    friendIds: ["4", "10", "12"],
  },
  {
    id: "9",
    name: "Isabella Moore",
    avatarSeed: "isabella",
    email: "isabella.moore@example.com",
    location: "Boston, MA",
    bio: "Data scientist with a focus on machine learning applications. Loves puzzles and board games.",
    jobTitle: "Data Scientist",
    company: "DataMinds",
    friendIds: ["5", "7", "11"],
  },
  {
    id: "10",
    name: "Mason Taylor",
    avatarSeed: "mason",
    email: "mason.taylor@example.com",
    location: "Los Angeles, CA",
    bio: "Product manager with a background in consumer psychology. Surfer and podcast host.",
    jobTitle: "Product Manager",
    company: "UserFirst",
    friendIds: ["8", "12"],
  },
  {
    id: "11",
    name: "Mia Anderson",
    avatarSeed: "mia",
    email: "mia.anderson@example.com",
    location: "Nashville, TN",
    bio: "Content strategist and copywriter. Musician and vinyl collector in her spare time.",
    jobTitle: "Content Strategist",
    company: "WordCraft",
    friendIds: ["7", "9"],
  },
  {
    id: "12",
    name: "William Jackson",
    avatarSeed: "william",
    email: "william.jackson@example.com",
    location: "Atlanta, GA",
    bio: "UI designer with a focus on motion and interaction. Basketball player and sneaker enthusiast.",
    jobTitle: "UI Designer",
    company: "MotionUI",
    friendIds: ["8", "10"],
  },
];

export const getUsers = async () => {
  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export const getUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === id);
};

export const getUserFriends = (userId: string): User[] => {
  const user = getUserById(userId);
  if (!user) return [];

  return user.friendIds
    .map((friendId) => {
      const friend = getUserById(friendId);
      return friend!;
    })
    .filter(Boolean);
};
