import React, { useState, useEffect, useRef } from "react";

const ChatBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Nodes for neural net
    const NODE_COUNT = 38;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dark background gradient
      const bg = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.4, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.9
      );
      bg.addColorStop(0, "#0d0d1a");
      bg.addColorStop(0.5, "#070710");
      bg.addColorStop(1, "#020205");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Soft corner glows
      const glowSpots = [
        { x: 0.15, y: 0.2,  r: 0.45, c: "rgba(180,60,255,0.07)" },
        { x: 0.85, y: 0.75, r: 0.40, c: "rgba(60,120,255,0.06)" },
        { x: 0.5,  y: 0.9,  r: 0.35, c: "rgba(251,146,60,0.05)" },
      ];
      glowSpots.forEach(({ x, y, r, c }) => {
        const g = ctx.createRadialGradient(
          x * canvas.width, y * canvas.height, 0,
          x * canvas.width, y * canvas.height, r * canvas.width
        );
        g.addColorStop(0, c);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.018;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 90;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(251,146,60,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = 0.6 + 0.4 * Math.sin(n.pulse);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251,146,60,${0.55 * pulse})`;
        ctx.fill();

        // Glow ring on larger nodes
        if (n.r > 2.2) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * pulse + 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(251,146,60,${0.12 * pulse})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};

export default ChatBackground;