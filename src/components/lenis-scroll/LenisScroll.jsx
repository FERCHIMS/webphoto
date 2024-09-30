'use client'
import { ReactLenis, useLenis } from 'lenis/react'

export default function LenisScroll({children}) {

  return (
    <ReactLenis root options={{
        lerp:0.1,
        duration:1.5,
        smoothTouch: true
    }}>
      { children }
    </ReactLenis>
  )
}