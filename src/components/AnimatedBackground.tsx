export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="bg-noise" />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      {/* Premium gradient orbs - CSS only */}
      <div 
        className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full opacity-20 animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      <div 
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 animate-float-slower"
        style={{
          background: "radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, rgba(96, 165, 250, 0.15) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      
      <div 
        className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full opacity-10 animate-float-up"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      
      {/* Spotlight effect */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(96, 165, 250, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
