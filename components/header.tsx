"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // Redirect to the sign-in page
    router.push("/login");
  };

  return (
    <header className="px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-sm font-medium">
          GPT-4
        </span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="text-muted-foreground"
        onClick={handleLogout}
      >
        <LogOut className="h-4 w-4 mr-2" />
        Logout
      </Button>
    </header>
  );
}
