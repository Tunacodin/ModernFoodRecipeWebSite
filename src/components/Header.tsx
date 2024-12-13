import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationMenu } from "./NavigationMenu";
import { ProfileInfo } from "./ProfileInfo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-accent/80 backdrop-blur-md border-b border-accent-foreground/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ProfileInfo />

        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 hover:text-primary transition-colors" aria-label="Menüyü aç">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-center">Menü</SheetTitle>
            </SheetHeader>
            <NavigationMenu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}