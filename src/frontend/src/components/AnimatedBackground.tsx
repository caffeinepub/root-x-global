export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Particle overlay */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/assets/generated/gold-particles-overlay.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Floating triangles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gold/20 animate-float-slow rotate-45" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-gold/10 animate-float-slow-reverse rotate-12" />
        
        {/* Floating circles */}
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full border border-gold/10 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-28 h-28 rounded-full border border-gold/15 animate-pulse-slow delay-1000" />
        
        {/* Floating hexagons */}
        <div className="absolute top-1/3 right-1/4 w-36 h-36 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill="none"
              stroke="rgba(212, 175, 55, 0.1)"
              strokeWidth="1"
            />
          </svg>
        </div>
        
        {/* Abstract lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="20%"
              x2="100%"
              y2="30%"
              stroke="rgba(212, 175, 55, 0.2)"
              strokeWidth="1"
              className="animate-line-move"
            />
            <line
              x1="0"
              y1="60%"
              x2="100%"
              y2="50%"
              stroke="rgba(212, 175, 55, 0.15)"
              strokeWidth="1"
              className="animate-line-move-reverse"
            />
            <line
              x1="20%"
              y1="0"
              x2="30%"
              y2="100%"
              stroke="rgba(212, 175, 55, 0.1)"
              strokeWidth="1"
              className="animate-line-move-vertical"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
