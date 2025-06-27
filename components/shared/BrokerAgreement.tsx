'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface CreditReportingProps {
  marquee?: boolean
}

const BrokerAgreement = ({ marquee = true }: CreditReportingProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            Broker Agreement
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Partner with CreditMaster AI as a broker and unlock high-value opportunities while helping businesses secure
            credit and funding.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Why Become a Broker?
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Earn commission on every referral</li>
            <li>Access top-tier business credit tools</li>
            <li>Offer clients exclusive financing solutions</li>
            <li>Join a network of high-performing partners</li>
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            What We Offer Brokers
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Dedicated support and training</li>
            <li>Marketing resources and branded materials</li>
            <li>Transparent reporting and payouts</li>
            <li>White-label program opportunities</li>
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            How to Get Started
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Submit your broker application</li>
            <li>Schedule a call with our onboarding team</li>
            <li>Receive your custom broker dashboard</li>
            <li>Start referring and earning today</li>
          </ul>
        </RevealWrapper>

        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BrokerAgreement
