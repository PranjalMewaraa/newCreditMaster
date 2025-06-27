'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CompanyLogosMarquee from '../homepage-02/CompanyLogosMarquee'
import CircleTextAnimation from './CircleTextAnimation'

interface AboutProps {
  marquee?: boolean
}

const About = ({ marquee = true }: AboutProps) => {
  const { revealRef } = useReveal()

  if (marquee) {
    return (
      <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
        <div className="container">
          <RevealWrapper>
            <h3 className="pb-10 sm:pb-20" ref={revealRef}>
              Why Choose the Credit Master AI Software?
            </h3>{' '}
            <br />
            <h3 className="pb-10 text-2xl sm:pb-20" ref={revealRef}>
              <li>Personalized Credit Worthiness Enhancement: Improve over 125 business creditworthiness factors.</li>
              <li>Comprehensive Credit Building: Establish credit profiles with major bureaus.</li>
              <li>Diverse Funding Solutions: Access vendors, retail credit, business cards, and more.</li>
              <li>Expert Support: Unlimited coaching and advisor guidance.</li>
            </h3>
            <br />
            <br />
            <h3 className="pb-10 sm:pb-20" ref={revealRef}>
              Key Features of the Funding Worthiness System
            </h3>{' '}
            <br />
            <h3 className="pb-10 text-2xl sm:pb-20" ref={revealRef}>
              <li>EIN & Entity Setup, Funding Worthiness Checks</li>
              <li>Financial Account Setup Guidance</li>
              <li>Dispute Assistance, Education & Vendor Credit Access</li>
              <li>Mobile Access, Bureau Insights & Score Monitoring</li>
            </h3>
            <br />
            <br />
            <h3 className="pb-10 sm:pb-20" ref={revealRef}>
              Who Can Benefit?
            </h3>{' '}
            <br />
            <h3 className="pb-10 text-2xl sm:pb-20" ref={revealRef}>
              <li>New Entrepreneurs: Lay a solid financial foundation</li>
              <li>Established Businesses: Expand credit/funding access</li>
              <li>Credit-Challenged Owners: Overcome denials</li>
              <li>Resource-Constrained: Scale without capital</li>
            </h3>
            <br />
            <br />
            <h3 className="pb-10 sm:pb-20" ref={revealRef}>
              Why Credit Worthiness is Essential
            </h3>{' '}
            <br />
            <h3 className="pb-10 text-2xl sm:pb-20" ref={revealRef}>
              <li>Accelerated Credit Building & Higher Approval Rates</li>
              <li>Unlimited Funding Access</li>
              <li>Integrated Platform for Credit + Financing</li>
              <li>Save Time, Protect Personal Assets</li>
            </h3>
            <br />
            <br />
            <h3 className="pb-10 sm:pb-20" ref={revealRef}>
              Comprehensive Tools & Resources
            </h3>{' '}
            <br />
            <h3 className="pb-10 text-2xl sm:pb-20" ref={revealRef}>
              <li>Funding Explorer™: Find tailored funding sources</li>
              <li>Business Info Aide: Keep data consistent</li>
              <li>Bureau Insights™: Monitor scores with accuracy</li>
              <li>Resource Marketplace: Get discounted vendor services</li>
            </h3>
          </RevealWrapper>
          <RevealWrapper>
            <CircleTextAnimation />
          </RevealWrapper>

          <div className="flex flex-auto flex-col items-center justify-between gap-x-8 gap-y-14 pt-14 sm:pt-[70px] md:flex-row md:pt-[100px] xl:gap-x-28">
            <RevealWrapper className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark"></div>
              <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-backgroundBody to-transparent dark:from-dark"></div>

              {/* <CompanyLogosMarquee /> */}
            </RevealWrapper>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center lg:items-stretch lg:justify-normal">
          <CircleTextAnimation />
          <h3 className="mx-auto mt-[34px]" ref={revealRef}>
            Introducing the Funding Worthiness System, a groundbreaking software designed to revolutionize how
            businesses access credit and financing. Our interactive system adapts to your unique business needs,
            providing a personalized roadmap to build robust business credit, apply for financing, and secure approvals
            for substantial credit lines and loans—all within a single platform.​
            <br />
            <br />
            Whether you're a startup, solopreneur, small business, or an established enterprise, our system is tailored
            to assist:
          </h3>
        </div>
      </div>
    </section>
  )
}
export default About
