'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface CreditReportingProps {
  marquee?: boolean
}

const CreditBrokerAffiliateProgram = ({ marquee = true }: CreditReportingProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            Credit Broker Affiliate Program
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Join our affiliate network and help businesses gain credit and funding while earning top commissions with
            CreditMaster AI.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Program Overview
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Earn passive income by promoting CreditMaster AI</li>
            <br />
            <li>Offer clients business credit, funding, and software solutions</li>
            <br />
            <li>Access to exclusive tools, training, and dashboards</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Benefits for Affiliates
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Up to 40% commission per referral</li>
            <br />
            <li>Custom tracking and marketing links</li>
            <br />
            <li>Support from our affiliate management team</li>
            <br />
            <li>Monthly payouts and real-time stats</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Get Started Today
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Apply to become a CreditMaster Affiliate</li>
            <br />
            <li>Complete onboarding and training</li>
            <br />
            <li>Start promoting with your custom link</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Referral Program Details
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Lead quality improvement</li>
            <br />
            <li>Operational scalability</li>
            <br />
            <li>Exclusive access to high-converting clients</li>
            <br />
            <li>Lead Program: 20 Exclusive Leads/Month, 100 Leads Annually</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            CRM-Tracked with Transparency
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Unique Referral Links</li>
            <br />
            <li>Real-Time Payment Alerts</li>
            <br />
            <li>Automated Commission Payouts</li>
            <br />
            <li>CRM Portal Access</li>
            <br />
            <li>
              Referral Link Example:{' '}
              <a href="https://app.creditmaster.ai/signup?ref=CM-67fb804fc037c" className="text-blue-600 underline">
                https://app.creditmaster.ai/signup?ref=CM-67fb804fc037c
              </a>
            </li>
            <br />
          </ul>

          <div className="overflow-x-auto pt-10" ref={revealRef}>
            <table className="w-full table-auto border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Brokers</th>
                  <th className="border px-4 py-2">1 Month</th>
                  <th className="border px-4 py-2">6 Months</th>
                  <th className="border px-4 py-2">12 Months</th>
                  <th className="border px-4 py-2">18 Months</th>
                  <th className="border px-4 py-2">24 Months</th>
                  <th className="border px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {[10, 20, 30, 40, 50].map((brokers, i) => {
                  const base = 100000 * (i + 1)
                  return (
                    <tr key={brokers} className="odd:bg-white even:bg-gray-50">
                      <td className="border px-4 py-2">{brokers}</td>
                      <td className="border px-4 py-2">${base.toLocaleString()}</td>
                      <td className="border px-4 py-2">${(base * 6).toLocaleString()}</td>
                      <td className="border px-4 py-2">${(base * 12).toLocaleString()}</td>
                      <td className="border px-4 py-2">${(base * 18).toLocaleString()}</td>
                      <td className="border px-4 py-2">${(base * 24).toLocaleString()}</td>
                      <td className="border px-4 py-2">${(base * 24).toLocaleString()}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default CreditBrokerAffiliateProgram
