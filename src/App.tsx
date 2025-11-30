import { FloatingHeader } from "@/components/ui/floating-header";
import TallyForm from "./components/tally-form";

export default function App() {
  return (
    <div className="relative w-full min-h-screen grain" id="waitlist">
      <FloatingHeader />

      {/* Hero Section */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column - Content */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-6 sm:gap-8">

            {/* Live Badge */}
            <div className="animate-reveal">
              <span className="auction-badge">
                <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></span>
                Coming Soon
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight animate-reveal animate-reveal-delay-1">
              Auction your{" "}
              <span className="font-serif italic">digital</span>{" "}
              <span className="highlight">assets</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl max-w-md leading-relaxed animate-reveal animate-reveal-delay-2">
              The easiest way to unlock best price and go from 0 to $. We just put you in contact with the highest bidders - No middleman. Just you and your buyers.
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:col-span-6 xl:col-span-7 brutalist-card p-6 sm:p-8 animate-reveal animate-reveal-delay-3">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                What you can sell
              </span>
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
            </div>

            {/* Value Props */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-8">
              {["Services", "Usernames", "Art", "Domains"].map((item, index) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm font-bold uppercase tracking-wide border-2 border-foreground bg-secondary hover:bg-accent hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  {item}
                </span>
              ))}
              <span className="px-4 py-2 text-sm font-bold uppercase tracking-wide border-2 border-dashed border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground transition-colors cursor-default">
                + More
              </span>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-foreground mb-6"></div>

            {/* Waitlist Section */}
            <div>
              <TallyForm />
            </div>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="mt-16 sm:mt-24 border-t-2 border-b-2 border-foreground py-4 overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 mr-8">
                {["SELL DIGITAL ITEMS", "•", "UNLOCK PROFITS", "•", "FIND BUYERS", "•", "CLOSE DEALS", "•"].map((text, j) => (
                  <span key={j} className="text-xl sm:text-2xl font-bold uppercase tracking-widest">
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
