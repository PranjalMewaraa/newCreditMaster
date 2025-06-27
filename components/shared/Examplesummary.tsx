'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface AboutProps {
  marquee?: boolean
}

const AboutExample = ({ marquee = true }: AboutProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-10 text-3xl font-semibold sm:pb-20" ref={revealRef}>
            Example Summary of Leads
          </h3>
          <p className="pb-6 text-xl" ref={revealRef}>
            Explore real-time examples of high-quality, exclusive business leads provided to brokers through the
            CreditMaster AI platform.
          </p>

          <h3 className="pb-4 pt-8 text-2xl font-semibold" ref={revealRef}>
            Lead Example Details
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Industries: Credit Repair, Real Estate, E-commerce, Transportation</li>
            <br />
            <li>Location Data: Name, State, Business Type</li>
            <br />
            <li>Engagement History: Form Completion, Funding Interest, CRM Score</li>
            <br />
            <li>Lead Delivery: Tracked via CRM portal in real-time</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Lead Quality Standards
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Exclusive: Not shared or resold to competitors</li>
            <br />
            <li>Validated: Verified contact and intent information</li>
            <br />
            <li>Segmented: Sorted by funding tier and credit readiness</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Sample Lead Preview
          </h3>
          <div className="overflow-auto" ref={revealRef}>
            <table className="min-w-full border border-gray-300 text-left text-base">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Industry</th>
                  <th className="border px-4 py-2">State</th>
                  <th className="border px-4 py-2">Funding Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="border px-4 py-2">Jane Corp</td>
                  <td className="border px-4 py-2">Trucking</td>
                  <td className="border px-4 py-2">TX</td>
                  <td className="border px-4 py-2">$50,000-$100,000</td>
                </tr>
                <tr className="border-t">
                  <td className="border px-4 py-2">Smith Logistics</td>
                  <td className="border px-4 py-2">Transportation</td>
                  <td className="border px-4 py-2">FL</td>
                  <td className="border px-4 py-2">$75,000</td>
                </tr>
                <tr className="border-t">
                  <td className="border px-4 py-2">Digital Boost</td>
                  <td className="border px-4 py-2">E-Commerce</td>
                  <td className="border px-4 py-2">CA</td>
                  <td className="border px-4 py-2">$20,000</td>
                </tr>
                <tr className="border-t">
                  <td className="border px-4 py-2">CapitalEdge Group</td>
                  <td className="border px-4 py-2">Real Estate</td>
                  <td className="border px-4 py-2">NY</td>
                  <td className="border px-4 py-2">$150,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-12 text-center text-xl font-semibold" ref={revealRef}>
            Join the Affiliate Program
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AboutExample
