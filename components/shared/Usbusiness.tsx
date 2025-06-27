'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface AboutProps {
  marquee?: boolean
}

const AboutUSBZ = ({ marquee = true }: AboutProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            U.S. Business Formation for International Entrepreneurs
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Start your U.S.-based business the right way with expert guidance, compliance support, and powerful tools
            built for non-resident entrepreneurs.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            What We Offer
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Register your LLC or Corporation in any U.S. state</li>
            <br />
            <li>Get a U.S. address and EIN (Employer Identification Number)</li>
            <br />
            <li>Set up U.S. banking remotely</li>
            <br />
            <li>Build a fundable business profile from day one</li>
            <br />
            <li>Navigate compliance and tax requirements confidently</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Who This Is For
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>International founders, freelancers, creators, and entrepreneurs</li>
            <br />
            <li>Those who want to sell to U.S. customers with credibility</li>
            <br />
            <li>Anyone needing access to Stripe, PayPal, and U.S. banks</li>
            <br />
            <li>Startups looking to raise funds or apply for business credit</li>
            <br />
            <li>Entrepreneurs launching in the U.S. without relocating</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Why CreditMaster AI?
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Guided support with every legal step</li>
            <br />
            <li>Proven expertise helping hundreds of non-residents get funded</li>
            <br />
            <li>AI-backed tools for compliance, credit-building, and fundability</li>
            <br />
            <li>Ongoing advisory even after your entity is formed</li>
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

export default AboutUSBZ
