import * as React from "react"
import Image from "next/image"

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 32, className }: LogoProps) {
  return (
    <div className={className} style={{ width: size, height: size, position: 'relative' }}>
      <Image
        src="/omecom-logo.png"
        alt="PT. Omecom Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
