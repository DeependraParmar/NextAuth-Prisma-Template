"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-2xl font-semibold text-center pt-80">Authentication using NextAuth + Prisma</div>
      <Button onClick={onClick}>Login</Button>
    </div>
  );
}
