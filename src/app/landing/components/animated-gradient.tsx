"use client"

import { useEffect, useRef } from 'react'

interface GradientConfig {
  color: string
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gradientsRef = useRef<GradientConfig[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize gradients
    const initGradients = () => {
      // Check if we're in dark mode
      const isDark = document.documentElement.classList.contains('dark')

      // Get primary color from CSS variable and convert to rgba
      const root = document.documentElement
      const primaryColor = getComputedStyle(root).getPropertyValue('--primary').trim()
      const accentColor = getComputedStyle(root).getPropertyValue('--accent').trim()
      const secondaryColor = getComputedStyle(root).getPropertyValue('--secondary').trim()

      // Helper to convert oklch to rgba with opacity
      const getPrimaryRgba = (opacity: number) => {
        // Create a temporary element to get computed color
        const temp = document.createElement('div')
        temp.style.color = `oklch(${primaryColor})`
        document.body.appendChild(temp)
        const computed = getComputedStyle(temp).color
        document.body.removeChild(temp)

        // Extract rgb values and add opacity
        const match = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
        if (match) {
          return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${opacity})`
        }
        return `rgba(59, 130, 246, ${opacity})` // fallback to blue
      }

      gradientsRef.current = [
        {
          color: getPrimaryRgba(isDark ? 0.18 : 0.25),
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 300,
        },
        {
          color: getPrimaryRgba(isDark ? 0.16 : 0.22),
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 350,
        },
        {
          color: getPrimaryRgba(isDark ? 0.14 : 0.20),
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 280,
        },
      ]
    }

    initGradients()

    // Animation loop
    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect()

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Update and draw gradients
      gradientsRef.current.forEach((gradient) => {
        // Update position
        gradient.x += gradient.vx
        gradient.y += gradient.vy

        // Bounce off edges
        if (gradient.x < 0 || gradient.x > width) gradient.vx *= -1
        if (gradient.y < 0 || gradient.y > height) gradient.vy *= -1

        // Draw radial gradient
        const radialGradient = ctx.createRadialGradient(
          gradient.x,
          gradient.y,
          0,
          gradient.x,
          gradient.y,
          gradient.radius
        )
        radialGradient.addColorStop(0, gradient.color)
        radialGradient.addColorStop(1, 'transparent')

        ctx.fillStyle = radialGradient
        ctx.fillRect(0, 0, width, height)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle theme changes
    const observer = new MutationObserver(() => {
      initGradients()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(60px)' }}
    />
  )
}
