'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface CreditReportingProps {
  marquee?: boolean
}

const CompanyInventories = ({ marquee = true }: CreditReportingProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            Inventories of Companies
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Explore a variety of ready-to-go business entities available across industries, states, and credit
            histories.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            What Are Company Inventories?
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Pre-registered companies with clean records</li>
            <br />
            <li>Available in various industries and states</li>
            <br />
            <li>Come with EINs, bank accounts, or aged profiles</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Why Buy from Our Inventory?
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Instant business startup without formation delays</li>
            <br />
            <li>Boosts credibility and lender trust</li>
            <br />
            <li>Potential for easier funding qualification</li>
            <br />
            <li>Option to add credit-building programs instantly</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Next Steps
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Browse available companies by state and category</li>
            <br />
            <li>Select an entity based on your goals</li>
            <br />
            <li>Book a call for consultation and compliance</li>
            <br />
            <li>Launch your business same-day</li>
            <br />
          </ul>
        </RevealWrapper>

        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default CompanyInventories
