'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface AboutProps {
  marquee?: boolean
}

const AboutNONUS = ({ marquee = true }: AboutProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            Legal Requirements for Non-U.S. Citizens
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Everything you need to know about legally forming and running a business in the United States — even if
            you’re not a U.S. citizen or resident.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            What You Need to Know
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Non-residents can form LLCs or corporations in the U.S. without citizenship or a visa</li>
            <br />
            <li>You do not need a U.S. social security number (SSN) to register a business</li>
            <br />
            <li>
              An Employer Identification Number (EIN) is required and can be obtained with a valid ITIN or passport
            </li>
            <br />
            <li>U.S. address or registered agent service is mandatory</li>
            <br />
            <li>Banking access requires proper documentation and compliance</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Common Misconceptions
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>
              You must be a U.S. citizen to own a business <span className="text-red-600">(False)</span>
            </li>
            <br />
            <li>
              You must live in the U.S. to open a bank account <span className="text-red-600">(False)</span>
            </li>
            <br />
            <li>
              You need a work visa to get paid from a U.S. company{' '}
              <span className="text-red-600">(False — you can pay yourself as a shareholder or member)</span>
            </li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            We Help You Stay Compliant
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Registered agent service in your chosen state</li>
            <br />
            <li>Assistance with EIN and ITIN application</li>
            <br />
            <li>Remote business banking setup guidance</li>
            <br />
            <li>Tax and annual reporting support</li>
            <br />
            <li>AI-powered alerts for state and federal deadlines</li>
            <br />
          </ul>

          <div className="pt-12 text-center text-sm text-gray-500" ref={revealRef}>
            © 2025 CreditMaster AI. All rights reserved.
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AboutNONUS
