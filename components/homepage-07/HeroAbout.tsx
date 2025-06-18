'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        Credit Master AI is a powerful business credit and funding platform that helps entrepreneurs and small business
        owners build strong credit profiles and access funding—without using personal guarantees. With AI-driven tools
        and real lender data, it guides you step-by-step to establish credibility and unlock financial growth.
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        Credit Master AI helps entrepreneurs build business credit and access funding without personal guarantees—using
        smart tools, real lender data, and step-by-step guidance.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
