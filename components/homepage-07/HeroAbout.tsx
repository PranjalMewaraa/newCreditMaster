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
      <h3 ref={revealRef} className="reveal-text-1 text-secondary dark:text-backgroundBody">
        Our Mission
      </h3>
      <h3 ref={revealRef} className="reveal-text-2 text-xl text-secondary dark:text-backgroundBody">
        At CreditMaster AI, our mission is to empower entrepreneurs and business owners with the tools and resources
        they need to build credit, access funding, and scale their companies with confidence and clarity.
      </h3>
      <br />
      <br />
      <h3 ref={revealRef} className="reveal-text-1 text-secondary dark:text-backgroundBody">
        What we do
      </h3>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        <ul className="text-lg">
          <li>Provide AI-powered software to build business credit and obtain funding</li>
          <br />
          <li> Offer advisory services to navigate the credit and funding landscape</li>
          <br />
          <li>Support with compliance, business formation, and credit monitoring</li>
          <br />
        </ul>
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
