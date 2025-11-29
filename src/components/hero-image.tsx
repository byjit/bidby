export default function HeroImage({ caption }: { caption?: string }) {
  return (
    <div className="w-full h-full space-y-2">
      <div className="relative overflow-hidden border-2 border-foreground bg-muted">
        <img
          src="https://res.cloudinary.com/dz8mikz3h/image/upload/v1761906896/Screenshot_31-10-2025_1201_localhost_stfpvq.jpg"
          alt="Bidby Platform Preview"
          className="w-full h-auto object-contain"
        />
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-primary"></div>
      </div>
      {caption && (
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{caption}</p>
      )}
    </div>
  );
}
