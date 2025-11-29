import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "../logo";

export function FloatingHeader() {
  const links: { label: string; href: string }[] = [

  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "w-full",
        "bg-background border-b-2 border-foreground",
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex cursor-pointer items-center">
          <Logo showName logoSize="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="items-center gap-1 hidden sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "font-medium uppercase tracking-wide text-xs")}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
