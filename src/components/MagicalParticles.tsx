import React, { useEffect, useRef } from 'react';

interface MagicalParticlesProps {
  burstCounter?: number;
}

interface Spore {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  color: string;
  isPetal: boolean;
  rotation: number;
  rotationSpeed: number;
}

export const MagicalParticles: React.FC<MagicalParticlesProps> = ({ burstCounter = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sporesRef = useRef<Spore[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const colors = ['#f2c97d', '#b56eff', '#d8b4e2', '#ffd98e', '#9347eb'];

    const createSpore = (width: number, height: number, isBurst = false): Spore => {
      const isPetal = Math.random() > 0.65;
      return {
        x: isBurst ? width * (0.45 + Math.random() * 0.35) : Math.random() * width,
        y: isBurst ? height * (0.3 + Math.random() * 0.5) : Math.random() * height,
        vx: (Math.random() - 0.5) * (isBurst ? 2.4 : 0.35),
        vy: -Math.random() * (isBurst ? 2.8 : 0.45) - 0.12,
        size: isPetal ? Math.random() * 3.8 + 2.2 : Math.random() * 2.2 + 0.9,
        alpha: Math.random() * 0.65 + 0.2,
        pulseSpeed: Math.random() * 0.025 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        isPetal,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (sporesRef.current.length === 0) {
        const count = Math.min(55, Math.floor((canvas.width * canvas.height) / 28000));
        sporesRef.current = Array.from({ length: count }, () =>
          createSpore(canvas.width, canvas.height, false)
        );
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let tick = 0;
    const render = () => {
      tick += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < sporesRef.current.length; i++) {
        const s = sporesRef.current[i];
        s.x += s.vx + Math.sin(tick * 0.01 + s.pulseOffset) * 0.12;
        s.y += s.vy;
        s.rotation += s.rotationSpeed;

        // gently damp burst velocity back to ambient drift
        s.vx *= 0.992;
        if (s.vy < -0.65) s.vy *= 0.985;

        if (s.y < -20) {
          s.y = canvas.height + 15;
          s.x = Math.random() * canvas.width;
        }
        if (s.x < -20) s.x = canvas.width + 15;
        if (s.x > canvas.width + 20) s.x = -15;

        const currentAlpha =
          s.alpha * (0.6 + 0.4 * Math.sin(tick * s.pulseSpeed + s.pulseOffset));

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.globalAlpha = Math.max(0.05, Math.min(0.9, currentAlpha));

        if (s.isPetal) {
          // Draw a 4-pointed golden/amethyst star-petal like the blossoms on Jheyvu's tattoo & logo
          ctx.fillStyle = s.color;
          ctx.shadowColor = s.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          const r = s.size;
          ctx.moveTo(0, -r * 1.4);
          ctx.quadraticCurveTo(r * 0.35, -r * 0.35, r * 1.4, 0);
          ctx.quadraticCurveTo(r * 0.35, r * 0.35, 0, r * 1.4);
          ctx.quadraticCurveTo(-r * 0.35, r * 0.35, -r * 1.4, 0);
          ctx.quadraticCurveTo(-r * 0.35, -r * 0.35, 0, -r * 1.4);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.fillStyle = s.color;
          ctx.shadowColor = s.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(0, 0, s.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Trigger extra magical spores when avatar morphs
  useEffect(() => {
    if (burstCounter === 0 || !canvasRef.current) return;
    const { width, height } = canvasRef.current;
    const colors = ['#f2c97d', '#b56eff', '#ffd98e', '#ffffff'];
    for (let i = 0; i < 18; i++) {
      if (sporesRef.current[i]) {
        sporesRef.current[i].x = width * (0.52 + (Math.random() - 0.5) * 0.28);
        sporesRef.current[i].y = height * (0.25 + Math.random() * 0.55);
        sporesRef.current[i].vx = (Math.random() - 0.5) * 3.8;
        sporesRef.current[i].vy = -Math.random() * 3.2 - 0.5;
        sporesRef.current[i].color = colors[i % colors.length];
      }
    }
  }, [burstCounter]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};
