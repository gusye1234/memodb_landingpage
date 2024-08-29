'use client'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
const CanvasBackground = () => {
    const { setTheme, theme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    // 确保组件在客户端渲染时更新状态
    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        const canvas = document.getElementById('dot_field') as HTMLCanvasElement;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const drawDots = () => {
            const width = canvas.width;
            const height = canvas.height;
            const dotSpacing = 30;
            const dotRadius = 1;
            const dotColor = theme === 'dark' ? '#669' : '#bbb';
            const widthMargin = 0.5 * (width - dotSpacing * (Math.floor(width / dotSpacing) - 1));
            const heightMargin = 0.5 * (height - dotSpacing * (Math.floor(height / dotSpacing) - 1));
            ctx.fillStyle = dotColor;
            ctx.clearRect(0, 0, width, height);
            for (let x = widthMargin; x <= (width - widthMargin); x += dotSpacing) {
                for (let y = heightMargin / 2; y <= (height - heightMargin); y += dotSpacing) {
                    ctx.beginPath();
                    ctx.arc(x, y, dotRadius, 0, Math.PI * 2, true);
                    ctx.fill();
                }
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawDots();
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [theme]);

    return <canvas id="dot_field" style={{
        padding: 0,
        margin: 0,
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -10,
        pointerEvents: 'none',
    }} />;
};

export default CanvasBackground;