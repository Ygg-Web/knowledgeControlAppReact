import React from 'react'
import TheHeader from '../components/header/TheHeader'
import TheFooter from '../components/footer/TheFooter'

export interface LayoutProps  { 
  children: React.ReactNode
}

export default function Default({ children }: LayoutProps) {
  return (
    <>
    <TheHeader/>
    <main>
      { children }
    </main>
    <TheFooter/>
    </>
  )
}
