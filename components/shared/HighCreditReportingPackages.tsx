'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface CreditReportingProps {
  marquee?: boolean
}

const HighCreditReportingPackages = ({ marquee = true }: CreditReportingProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            High Credit Reporting Packages
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Maximize your business’s credit strength with powerful reporting tools designed to enhance credibility and
            unlock funding.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            What’s Included in High Credit Reporting Packages?
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Experian Smart Business Monitoring</li>
            <br />
            <li>Equifax Commercial Monitoring</li>
            <br />
            <li>Dun & Bradstreet Score Builder Access</li>
            <br />
            <li>AI Insights via Bureau Analysis™</li>
            <br />
            <li>Monthly credit health alerts</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Benefits for Your Business
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Stronger credit profiles on all major bureaus</li>
            <br />
            <li>Better interest rates and terms from lenders</li>
            <br />
            <li>Increased vendor trust and approvals</li>
            <br />
            <li>Faster funding decisions and larger credit limits</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            How CreditMaster AI Helps
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>AI-backed reporting optimization</li>
            <br />
            <li>Integration with dispute tools and alerts</li>
            <br />
            <li>Real-time score tracking and historical views</li>
            <br />
            <li>Support in raising scores and disputing errors</li>
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

export default HighCreditReportingPackages
