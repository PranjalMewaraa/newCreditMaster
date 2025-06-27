'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface CreditReportingProps {
  marquee?: boolean
}

const HowCreditReportingWorks = ({ marquee = true }: CreditReportingProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            How Our Credit Reporting Works
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Understand how your business activity gets reported, how bureaus evaluate your company, and how CreditMaster
            AI keeps your profile fundable.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Business Credit Reporting Made Clear
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>We help you set up accounts that report to Dun & Bradstreet, Experian, and Equifax</li>
            <br />
            <li>We monitor your vendor and lender data activity</li>
            <br />
            <li>AI flags any red flags or discrepancies in your bureau data</li>
            <br />
            <li>We coach you to add accounts that positively impact your business credit score</li>
            <br />
            <li>We provide ongoing visibility into how lenders see your profile</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            What Gets Reported?
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Payment history and age of accounts</li>
            <br />
            <li>Number of reporting trade lines</li>
            <br />
            <li>Credit utilization and balances</li>
            <br />
            <li>Legal filings (e.g., bankruptcies, liens)</li>
            <br />
            <li>Business identification data (entity name, address, EIN)</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Stay Informed With Bureau Insights™
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Receive alerts and score movement updates weekly</li>
            <br />
            <li>Get reports on new tradelines and inquiry activity</li>
            <br />
            <li>Use our dispute manager to correct incorrect bureau data</li>
            <br />
            <li>Track your fundability score across all three bureaus</li>
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

export default HowCreditReportingWorks
