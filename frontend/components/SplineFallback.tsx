export default function SplineFallback() {
  return (
    <div className="h-[400px] w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center animate-pulse">
      <span className="text-muted/30 text-sm">Loading 3D scene...</span>
    </div>
  );
}
