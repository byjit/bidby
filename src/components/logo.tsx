import { Coins } from "lucide-react";

export const Logo = ({ loading = false, className, showName = false, logoSize = 'w-8 h-8' }: { className?: string; loading?: boolean; showName?: boolean; logoSize?: string }) => {
  return (
    <div className={"font-bold flex items-center gap-2 " + className}>
      <div className="p-1.5 bg-primary text-primary-foreground border-2 border-foreground" style={{ boxShadow: '2px 2px 0 0 var(--foreground)' }}>
        <Coins className={logoSize} />
      </div>
      {showName && (
        <span className="text-base sm:text-lg md:text-xl tracking-tight font-bold uppercase">
          {loading ? 'Loading...' : 'Bidby'}
        </span>
      )}
    </div>
  );
};
