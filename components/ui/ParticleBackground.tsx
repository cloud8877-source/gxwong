import React, { useEffect, useRef } from 'react';
import { cn } from '../../../lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const ParticleBackground: React.FC<{
  className?: string;
  particleCount?: number;
  particleColor?: string;
}> = ({
  className,
  particleCount = 100,
  particleColor = 'rgba(255, 255, 255, 0.4)',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-initialize particles on resize
      particles.current = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000); // Adjust density based on screen size
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 0.4 - 0.2, // Slow drift
          vy: Math.random() * 0.4 - 0.2,
          radius: Math.random() * 1.5 + 0.5, // Small particles
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(p => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Boundary check (wrap around)
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleColor]);

  return <canvas ref={canvasRef} className={cn('absolute top-0 left-0 w-full h-full pointer-events-none', className)} />;
};

export default ParticleBackground;
