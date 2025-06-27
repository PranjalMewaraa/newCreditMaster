'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface CreditReportingProps {
  marquee?: boolean
}

const BusinessCreditAdvisoryAgreement = ({ marquee = true }: CreditReportingProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            Business Credit Advisory Agreement
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Formalize your partnership with CreditMaster AI through our transparent advisory terms and shared success
            model.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Purpose of the Agreement
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Defines the responsibilities of the advisor and the client</li>
            <li>Outlines the scope of credit services offered</li>
            <li>Clarifies compensation and dispute resolution methods</li>
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Advisor Commitments
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Provide expert guidance on business credit establishment</li>
            <li>Deliver insights based on bureau data and financial tools</li>
            <li>Ensure compliance with federal and industry regulations</li>
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Client Responsibilities
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Submit truthful financial and business information</li>
            <li>Follow recommendations provided in a timely manner</li>
            <li>Maintain open communication throughout the term</li>
          </ul>
        </RevealWrapper>

        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BusinessCreditAdvisoryAgreement
