'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { Three } from '@/helpers/components/Three'

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color='blue' />
  </Suspense>
)

export const View = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Three>
    </>
  )
})
View.displayName = 'View'