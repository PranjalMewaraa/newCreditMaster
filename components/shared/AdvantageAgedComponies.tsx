'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface AdvantagesProp {
  marquee?: boolean
}

const AgedCompanyAdvantages = ({ marquee = true }: AdvantagesProp) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            Advantages of Aged Companies
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Discover how acquiring an aged company can fast-track your business credibility, funding access, and growth
            trajectory.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            What Is an Aged Company?
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>A legally registered entity that has existed for several years</li>
            <li>Comes with established history, boosting business trust</li>
            <li>Used to gain faster access to credit and vendor relationships</li>
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Key Benefits
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Instant credibility with banks, vendors, and partners</li>
            <li>Greater likelihood of loan and credit approvals</li>
            <li>Faster setup for funding, bidding, and government contracts</li>
            <li>Potentially better insurance and lease terms</li>
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            New Entity vs. Aged Company Comparison
          </h3>
          <div className="grid grid-cols-1 gap-6 text-lg md:grid-cols-2" ref={revealRef}>
            <div>
              <h4 className="mb-2 text-xl font-semibold">New Business Entity</h4>
              <ul className="list-inside list-disc space-y-2">
                <li>Requires time to build trust</li>
                <li>Limited or no credit profile</li>
                <li>May face rejection for funding</li>
                <li>Longer process to qualify for contracts</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-xl font-semibold">Aged Company</h4>
              <ul className="list-inside list-disc space-y-2">
                <li>Instant trust with lenders and vendors</li>
                <li>Established credit potential</li>
                <li>Faster loan and credit approvals</li>
                <li>Eligible for larger contracts sooner</li>
              </ul>
            </div>
          </div>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            How CreditMaster AI Helps
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Access to verified aged companies</li>
            <li>Compliance checks and setup support</li>
            <li>Credit-building roadmap tailored for aged corps</li>
            <li>Integration with our full funding suite</li>
          </ul>
        </RevealWrapper>

        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AgedCompanyAdvantages
