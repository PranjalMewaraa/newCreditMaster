'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface CreditReportingProps {
  marquee?: boolean
}

const InternationalTrading = ({ marquee = true }: CreditReportingProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            International Trading Opportunities
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Unlock U.S. banking and business credit power to access global trade and supplier networks like never
            before.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Benefits for Global Traders
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Form a U.S.-based entity for supplier access & credibility</li>
            <br />
            <li>Gain access to U.S. banking & credit instruments</li>
            <br />
            <li>Work with suppliers that only transact with U.S. businesses</li>
            <br />
            <li>Reduce payment delays and currency conversion issues</li>
            <br />
            <li>Establish trust and trade history faster with U.S. partners</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Access Exclusive Markets
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Import/export sectors with special tariff advantages</li>
            <br />
            <li>Digital product sales into North America</li>
            <br />
            <li>Bulk goods & wholesale markets</li>
            <br />
            <li>Amazon FBA and eCommerce fulfillment in U.S. warehouses</li>
            <br />
            <li>U.S. government contracts available to registered suppliers</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            How CreditMaster AI Helps
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Incorporation and EIN setup for non-residents</li>
            <br />
            <li>Guided credit building for international applicants</li>
            <br />
            <li>Vendor and supplier account registration assistance</li>
            <br />
            <li>Access to virtual addresses and banking partners</li>
            <br />
            <li>AI tools for trade compliance and cash flow monitoring</li>
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

export default InternationalTrading
